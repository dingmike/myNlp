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
    secrets: "bot-secret",
    cookie: {maxAge: 60000 * 5} // session expiration time ms 5min
  },
  app: {
    nibu: 'hehe',
    port: "8080",
    secret: "knwos"
  }
};
