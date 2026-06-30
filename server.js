const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile(path.join(__dirname, "login.html")); //START HERE

    win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
