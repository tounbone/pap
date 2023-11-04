const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  // Create the main application window.
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:5173/"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(() => {
  createWindow(); // Create the main application window
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
