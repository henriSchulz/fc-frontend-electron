const {app, BrowserWindow} = require('electron');


//react build path: build/index.html

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800 * 1.7, height: 600 * 1.7, webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        icon: __dirname + '/icon.png'

    });
    mainWindow.loadURL('https://kartai.de');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});