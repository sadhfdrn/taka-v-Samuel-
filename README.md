# Samuel Taka WhatsApp Bot

This is a WhatsApp bot powered by [Baileys](https://github.com/WhiskeySockets/Baileys) and hosted with a web interface using Express. It’s ready for deployment on platforms like [Koyeb](https://www.koyeb.com).

## Features
- Neon web page for Koyeb health checks
- WhatsApp bot using Baileys
- Auto reconnect and session handling

## Project Structure
```
.
├── index.js               # Main bot + web server
├── package.json           # Dependencies and startup script
└── public/
    └── index.html         # Glowing neon status page
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the bot
```bash
node index.js
```

### 3. Deploy
Push this to GitHub and link your repo to Koyeb.

Make sure your `PORT` is set by Koyeb (it’s used automatically via `process.env.PORT`).

---

Made with love by **Samuel Taka**