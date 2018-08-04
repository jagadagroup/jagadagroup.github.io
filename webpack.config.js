var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

module.exports = {
    mode: 'development',
    entry: {
        master: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            // glob.sync('./public/javascripts')
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}