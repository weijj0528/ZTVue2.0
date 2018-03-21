//检查版本
require('./check-versions')()

//配置文件
var config = require('./config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')

var proxyMiddleware = require('http-proxy-middleware')

var webpackConfig = require('./webpack.dev.config')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// proxy api requests 反向代理API 在config 中配置即可
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    stats: {
        colors: true
    },
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 1000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})



// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// handle fallback for HTML5 history API
// h5的 history模式
app.use(require('connect-history-api-fallback')())

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = '127.0.0.1:' + port

console.log('> Starting dev server...')

console.log('> Listening at ' + uri + '\n')

var server = app.listen(port, '127.0.0.1')

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})
module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
