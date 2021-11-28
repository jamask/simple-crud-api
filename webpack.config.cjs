const path = require('path');

module.exports = {
  entry: './app.mjs',
  target: 'node16.13', // Nodejs 16.13.0 LTS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    module: true,
  },
  mode: 'development',
  experiments: {
    outputModule: true,
  }
};