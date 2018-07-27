const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, './../dist'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: ['css-loader', 'autoprefixer-loader'],
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },
        {
            test: /iview\/.*?js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader',
            options: {
                limit: 1024,
                name: 'static/image/[hash:16].[ext]',
            }
        },
        {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@src': path.join(__dirname, "../src"),
            '@libs': path.join(__dirname, "../src/libs"),
            '@views': path.join(__dirname, "../src/views"),
            '@com': path.join(__dirname, "../src/views/com"),
            '@layout': path.join(__dirname, "../src/views/layout"),
            '@jquery': path.join(__dirname, "../src/views/jquery"),
            '@biz': path.join(__dirname, "../src/views/biz"),
        }
    },
    // 挂载全局插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.ejs',
            inject: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ]
};