console.log("main process working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win, dimWin, colorWin;
let parentWindow, childWindow

function createWindow() {
  win = new BrowserWindow();
  // dimWin = new BrowserWindow({width: 400, height: 400})
  // colorWin = new BrowserWindow({backgroundColor: '#22b4'})
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"),
  //     protocol: "file",
  //     slashes: true,
  //   }),
  // );

  parentWindow = new BrowserWindow({title: "parent"})
  childWindow = new BrowserWindow({title: 'child', show: false, parent: parentWindow, modal: true})
  childWindow.loadURL('https://github.com/SunilBaghel002')
  childWindow.once('ready-to-show', ()=>{
    childWindow.show()
  })

  win.webContents.openDevTools();
  
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
