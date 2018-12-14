const net = require('net')

const port = 5000

process.env.ENVIRONMENT = 'development'
process.env.ELECTRON_START_URL = `http://localhost:${port}`

const client = new net.Socket()

let startElectron = false

const tryConnection = () => client.connect({ port }, () => {
  client.end()
  if (!startElectron) {
    console.log('Starting Electron')
    startElectron = true
    const exec = require('child_process').exec
    exec('npm run electron')
  }
})

tryConnection()

client.on('error', (err) => {
  console.log('Electron connect error', err)
  setTimeout(tryConnection, 2000)
})
