const { app } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { autoUpdater } = require("electron-updater");
const AppWindow = require("./src/main/AppWindow");

let mainWindow = null;
app.on("ready", () => {
  if (isDev) {
    autoUpdater.updateConfigPath = path.join(__dirname, "app-update.yml");
  }
  autoUpdater.checkForUpdates();
  autoUpdater.on("error", function (error) {
    console.log("[UPDATE ERROR!!!]:", error);
  });
  autoUpdater.on("update-available", function (updateInfo) {
    console.log("[update-available]:", updateInfo);
  });
  autoUpdater.on("update-not-available", function (info) {
    console.log("[update-not-available]:", info);
  });

  const mainWindowConfig = {
    width: 1440,
    height: 768,
  };

  const urlLocation = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "./index.html")}`;

  mainWindow = new AppWindow(mainWindowConfig, urlLocation);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
