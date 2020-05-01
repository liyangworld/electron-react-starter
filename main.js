const { app } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const AppWindow = require("./src/main/AppWindow");

let mainWindow = null;
app.on("ready", () => {
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
