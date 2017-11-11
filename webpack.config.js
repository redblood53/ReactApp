let path = require('path')
module.exports = {
    devtool: 'source-map',
    entry: "./src/js/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
          }
        ]
      },
};