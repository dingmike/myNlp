module.exports = {
  name: "bus admin",
  version: "1.0",
  auth: "gyt",
  mysql: {
    connection: {
      host: '144.202.126.42',
      // user: 'root',
      user: 'newscnn',
      // password: '',
      password: 'rootcnn@198!QAZ@WSX',
      database: 'newscnn',
      charset: 'utf8mb4'
    }
  },
  session: {
    secrets: "bus-secret",
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
    secret: "knwo"
  }
};
