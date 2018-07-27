// 服务部署 Node方式
// 也可以用Nginx 
var path = require('path')
var express = require('express')
var favicon = require('serve-favicon')
var proxyMiddleware = require('http-proxy-middleware')

//配置文件
var config = require('./config')
// 环境
var env = process.env.NODE_ENV
if (!env) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
    env = process.env.NODE_ENV
}
console.log("env-->" + process.env.NODE_ENV);

var app = express()
// 网站图标
app.use(favicon(path.join(__dirname, '../dist/static/favicon.ico')))
// 接口代理
// proxy api requests 反向代理API 在config 中配置
var proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// h5的 history模式
app.use(require('connect-history-api-fallback')())
// 项目路径
var staticPath = path.join(__dirname, '../dist')
console.log("static path:" + staticPath)
app.use("/", express.static(staticPath))

//端口号
var uri = '127.0.0.1'
var port = 81

console.log('> Starting dev server...')
console.log('> Listening at ' + uri + ":" + port + '\n')

app.listen(port, uri)