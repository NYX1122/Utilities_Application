const { ipcRenderer } = require('electron')

// Send an asynchronous message to the main process
ipcRenderer.send('asynchronous-message', 'Hello from renderer process')

// Receive message from the main process
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "Hello from main process"
})