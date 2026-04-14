# Modern Chat App

Una aplicación de chat en tiempo real construida con Node.js, Express y Socket.IO. Disfruta de una comunicación fluida con una interfaz moderna y adaptable.

## ✨ Características

- **Mensajería en tiempo real**: Entrega instantánea de mensajes usando tecnología WebSocket  
- **Soporte multi-sala**: Únete a diferentes salas de chat para conversaciones organizadas  
- **Interfaz moderna**: Diseño limpio, adaptable y con animaciones suaves  
- **Gestión de usuarios**: Visualiza quién está en línea en tu sala actual  
- **Estado de conexión**: Indicador en tiempo real del estado de conexión  
- **Atajos de teclado**: Acciones rápidas para mejorar la experiencia de usuario  
- **Responsive**: Funciona perfectamente en todos los dispositivos  

## 🚀 Tecnologías utilizadas

- **Backend**: Node.js, Express.js  
- **Comunicación en tiempo real**: Socket.IO  
- **Frontend**: JavaScript puro, HTML5, CSS3  
- **Estilos**: CSS moderno con variables y Flexbox  
- **Iconos**: Font Awesome  
- **Tipografía**: Inter (Google Fonts)  

## 📋 Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:

- Node.js (versión 14 o superior)  
- npm (incluido con Node.js)  

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/your-username/modern-chat-app.git
   cd modern-chat-app
   npm install

# Modo desarrollo (con reinicio automático)
npm run dev

# Modo producción
npm start

# Abrir en el navegador
Navega a http://localhost:3000

🎯 Uso
1. Unirse a una sala de chat
      - Introduce tu nombre de usuario
      - Elige un nombre de sala
      - Haz clic en "Join Chat"
2. Comenzar a chatear
      - Escribe tu mensaje en el campo de texto
      - Presiona Enter o haz clic en enviar
      - Usa Ctrl/Cmd + Enter para enviar rápidamente
3. Funciones de la sala
      - Ver usuarios activos en la barra lateral
      - Estado de conexión en tiempo real
      - Desplazamiento automático de mensajes

🎨 Características en detalle
1. Comunicación en tiempo real
   - Entrega instantánea de mensajes
   - Presencia de usuarios en vivo
   - Monitoreo del estado de conexión
   - Reconexión automática

2. Interfaz moderna
   - Fondos con degradados
   - Animaciones suaves
   - Diseño responsive
   - Tipografía limpia
   - Navegación intuitiva

3. Experiencia de usuario
   - Mensajes de bienvenida
   - Estados de carga
   - Notificaciones de error
   - Atajos de teclado
   - Auto-scroll a nuevos mensajes

## 📁 Project Structure

```
modern-chat-app/
├── src/
│   ├── index.js              # Main server file
│   └── utils/
│       ├── messages.js       # Message utilities
│       └── user.js          # User management
├── public/
│   ├── index.html           # Join page
│   ├── chat.html            # Chat interface
│   ├── css/
│   │   └── styles.css       # Modern styling
│   └── js/
│       └── chat.js          # Frontend logic
├── package.json
└── README.md
```


🔧 Configuración
La aplicación utiliza variables de entorno para la configuración:

# Archivo .env (opcional)
PORT=3000
HOST=0.0.0.0

🚀 Despliegue

# Desarrollo local

npm run dev

🤝 Contribuciones
Haz un fork del repositorio
Crea una rama (git checkout -b feature/AmazingFeature)
Haz commit de tus cambios (git commit -m 'Añade una nueva funcionalidad')
Haz push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request


🙏 Agradecimientos
Socket.IO por la comunicación en tiempo real
Express.js por el framework web
Font Awesome por los iconos
Inter Font por la tipografía
📞 Soporte

Si tienes preguntas o necesitas ayuda, abre un issue en GitHub.
