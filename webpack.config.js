const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    devServer: {
        host: '127.0.0.1',
        port: 3001,
        hot: true,
        inline: true
    },
    output: {
        path: path.resolve(__dirname, 'dist/webpack-demo'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};