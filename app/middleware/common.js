const path = require("path");
const views = require("koa-views");
const json = require("koa-json");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const compress = require("koa-compress");
// const cors = require("kcors");
const cors = require('koa2-cors');
const helmet = require("koa-helmet"); // 安全中間件
// koa-compose模块可以将多个中间件函数合并成一个大的中间件函数，然后调用这个中间件函数就可以依次执行添加的中间件函数，执行一系列的任务。
const compose = require("koa-compose");
const serve = require("koa-static");
const session = require("koa-generic-session");
const RedisStore = require("koa-redis");
const xmlParser = require("koa-xml-body");
const config = require("../../config");


module.exports = app => {
    app.keys = [config.session.secrets];
    return compose([
        // cors({
        //     credentials: true // 是否需要证书
        // }),
        cors({
            origin: function (ctx) {
                console.log('ctx.header.origin')
                console.log(ctx.header.origin)
                // return "*";
                /*if (ctx.url === '/backend') {
                    return "*"; // 允许来自所有域名请求
                }*/
                if (ctx.header.origin === 'http://cnnend.ngrok.tecfcs.com') {
                    return "http://cnnend.ngrok.tecfcs.com"; // 允许来自所有域名请求
                }
                if (ctx.header.origin === 'http://localhost:9527') {
                    return "http://localhost:9527"; // 允许来自所有域名请求
                }
                if (ctx.header.origin === 'http://admin.tecfcs.com') {
                    return "http://admin.tecfcs.com"; // 允许来自所有域名请求
                }
                if (ctx.header.origin === 'http://wxportal.fecstec.com') {
                    return "http://wxportal.fecstec.com"; // 允许来自所有域名请求
                }
                // return config.webHostname; // 这样就能只允许 config.webHostname 这个域名的请求了
                return '*'; // 这样就能只允许 config.webHostname 这个域名的请求了
            },
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
            maxAge: 5,
            credentials: true,
            allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
            allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-requested-with', 'X-Token', 'wx-token']
        }),
        /* (ctx, next)=>{
         console.log(ctx.request.method +' ================================')
             if (ctx.request.method == "OPTIONS") {
                 ctx.response.status = 200
             }
         },*/
        helmet({
            // frameguard: false,
            // xssFilter: false
            hsts: false, // https off
            noCache: false
        }),
        xmlParser({
            limit: 120 * 1024 * 1024
        }),
        bodyparser({
            enableTypes: ["json", "form", "text"],
            jsonLimit: 120 * 1024 * 1024,
            textLimit: 120 * 1024 * 1024,
            formLimit: 120 * 1024 * 1024
        }),
        json(),
        logger(),
        compress({
            filter: function (content_type) {
                return /text/i.test(content_type);
            },
            threshold: 2048,
            flush: require("zlib").Z_SYNC_FLUSH
        }),
    serve(path.resolve(__dirname, "../web")),
])
    ;
};
