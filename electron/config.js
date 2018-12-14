const path = require('path')

module.exports = {
  width: 800,
  height: 600,
  titleBarStyle: 'hiddenInset',
  webPreferences: {
    nodeIntegration: false,
    preload: path.join(__dirname, 'bridge', 'index.js')
  }
}
