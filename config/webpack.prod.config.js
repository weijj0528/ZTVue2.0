const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, './../dist'),
        filename: '[name].[hash:16].js',
        chunkFilename: 'static/js/[name].chunk.[hash:16].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[hash:16].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.[hash:16].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            sourceMap: false
        }),
    ]
});