const electron = require("electron");
const DataStore = require("nedb");
const path = require("path");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const isDev = require("electron-is-dev");

let mainWindow;

require("update-electron-app")({
  repo: "kitze/react-electron-example",
  updateInterval: "1 hour"
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}


var todos = new DataStore({filename: path.join(app.getPath("userData"),"todos.db"), autoload: true});
todos.ensureIndex({fieldName: 'id', unique: true});
app.db = todos;



app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
