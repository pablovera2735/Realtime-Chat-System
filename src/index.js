// Load environment variables
require('dotenv').config();

// emit events
// socket.emit, io.emit, socket.broadcast.emit

// emit to a specific room
// io.to(room).emit, socket.broadcast.to(room).emit

const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");
const {
  generateMessage,
} = require("./utils/messages");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/user");

// initialize express
const app = express();
// initialize http server
const server = http.createServer(app);
// initialize socketio
const io = socketio(server);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  // socket.emit("message", generateMessage("Welcome!"));
  // socket.broadcast.emit("message", "A new user has joined!");

  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });

    if (error) {
      return callback(error);
    }

    socket.join(room);
    socket.emit("message", generateMessage("Admin", "Welcome!"));
    socket.broadcast
      .to(user.room)
      .emit("message", generateMessage("Admin", `${user.username} has joined`));
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const filter = new Filter();

    const user = getUser(socket.id);

    if (!user) {
      return callback("You are not authenticated");
    }

    
    io.to(user.room).emit("message", generateMessage(user.username, message));
    callback();
  });

  //   socket.emit("countUpdated", count);

  //   socket.on("increment", () => {
  //     count++;
  // notify only the current connection
  // socket.emit("countUpdated", count);

  // notify all connections
  //     io.emit("countUpdated", count);
  //   });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage("Admin", `${user.username} has left`)
      );
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });


});

// start the server
server.listen(port, host, () => {
  console.log(`Server is up on ${host}:${port}!`);
});
