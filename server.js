const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { app, BrowserWindow } = require("electron");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat-message", (msg) => {
        io.emit("chat-message", msg);
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});
    win.loadFile(path.join(__dirname, "login.html")); //START HERE

// IMPORTANT: needed for hosting platforms
const PORT = process.env.PORT || 3000;
    win.setMenuBarVisibility(false);
}

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
app.whenReady().then(createWindow);
