###生产部署
#####初始化服务器（Server）应用
$ pm2 deploy ecosystem.config.js production setup
####开始部署
$ pm2 deploy ecosystem.config.js production
####更新
$ pm2 deploy production update


###开发测试部署
#####初始化服务器（Server）应用
$ pm2 deploy ecosystem.config.js development setup
####开始部署
$ pm2 deploy ecosystem.config.js development
####更新
$ pm2 deploy development update