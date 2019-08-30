const Koa = require("koa");
const app = new Koa();
const path = require('path');
const onError = require("koa-onerror");
const config = require("./config");
const plugins = require("./app/plugin/");
const middleware = require("./app/middleware/common");
const router = require("./app/router");

const defaultConfig = require(path.join(__dirname, 'config', 'index.json'));
console.log(defaultConfig)


onError(app); // 异常处理



app.plugins = plugins;
// console.log(app.plugins);
// 加载mongoose model 和 路由
app.use(middleware(app));



app.use(router.routes(), router.allowedMethods());

app.on("error", err => {
  console.error(err);
});
console.log("This app is running in port " + config.app.port);

module.exports = app;
