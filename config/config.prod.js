module.exports = {
  name: "bus admin",
  version: "1.0",
  auth: "gyt",
  webHostname: 'https://english.fecstec.com',
  mongo: {
    host: "47.106.85.97",
    port: "28011",
    dbName: "newscnn",
    username: "mikeNewscnn",
    password: "news2wsx@zdj",
    poolSize: 10
  },
  mysql: {
    connection: {
      host: '127.0.0.1',
      // user: 'root',
      user: 'userwedding',
      // password: '',
      password: 'mikeweddingZdj!@#123',
      database: 'wedding',
      charset: 'utf8mb4'
    }
  },
  /*redis: {
      uri: "redis://198.211.33.137",
      host: '198.211.33.137', // 配置session store时候使用
      port: "6379",
      password: 'foolish@123',
      db: 5
  },*/
  redis: {
    uri: "redis://127.0.0.1",
    host: '127.0.0.1', // 配置session store时候使用
    port: "6379",
    password: 'foobared@zdj1989',
    db: 6
  },
  session: {
    secrets: "cnn-secret",
    cookie: {maxAge: 60000 * 5} // session expiration time ms 5min
  },
  // 公众号网页授权
  wechatWeb: {
    AppID: "wx2bac5a2f552cd30b", //wx2bac5a2f552cd30b //wx941f9fac155760cb
    AppSecret: "a24163d0cb7ca781f9d696d4ea5b5c56", //a24163d0cb7ca781f9d696d4ea5b5c56 //709321ae6b38555b5ec3c4a6b5a7d3bb
    token: "123123123123qazwsxedc"  //123123123123qazwsxedc //mikedingdingppzdj
  },
  // 支付测试配置
  wechatPayDev: {
    appid: "wx2bac5a2f552cd30b",
    appkey: "",
    mch_id: "1507143691",
    key: "",
    test_openid: ""
  },
  // 小程序支付
  wechatPay: {
    appid: "wx2bac5a2f552cd30b",
    appkey: "", // 小程序密
    mch_id: "1507143691",
    key: "mikezhangding19891qaz2wsx3edc4rf"
  },
  qiniu: {
    // ak: "jPdkCpu9WKSqjZNwKkQslzG4vrv_o9O1HUuRS2df",
    ak: "ny1pdys1z-Hy2ErjaibcXNOJmZhGMUPo_MOjT7Ox",
    // sk: "XR1TQ34aci4kDracziIaKlhMdHAsGNri4LMin9yr",
    sk: "mPULtkrDcGm22sLJAtgYe65w5HUXKYaGUdjbEFPd",
    bucket: "cnn-img",
    // domin: "http://psnkebui3.bkt.clouddn.com" // 测试资源域名
    domin: "http://bkcdn.fecstec.com" // 测试资源域名
  },
  app: {
    nibu: 'hehe',
    port: "8080",
    secret: "knwos"
  }
};
