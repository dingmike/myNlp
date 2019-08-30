module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "cnnBot",
      script: "./bin/www",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      watch: true,
      merge_logs: true,
      exec_mode: "cluster",
      ignore_watch: ["./logs/*", "./dashbord/*", "./app/web/*"],
      env: {
        // NODE_ENV: "production"
        COMMON_VARIABLE: 'true'
        // PORT: "8080"
      },
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: 'development'
      },
      instances: "max",
      instance_var: "INSTANCE_ID"
    }
    // Second application
    // {
    //   name: "WEB",
    //   script: "web.js"
    // }
  ],
  // Cluster environment variablelink
  // The NODE_APP_INSTANCE environment variable is used to make a difference between cluster.

  // For example, if you want to run a cronjob only on one cluster, you can check if process.env.NODE_APP_INSTANCE === 0.

  // This variable can be renamed in the ecosystem file:
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/95555
   */
  deploy: {
    production: {
      user: "root",
      host: "144.202.126.42",
      ref: "origin/master",
      repo: "git@github.com:dingmike/myNlp.git",
      path: "/home/software/nlp",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production"
      }
    },
    /*development: {
      user: "root",
      host: "144.202.126.43",
      ref: "origin/master",
      repo: "git@github.com:dingmike/myNlp.git",
      path: "/home/software/cnn",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env development",
      env: {
        NODE_ENV: "development"
      }
    }*/
  }

  //   use admin
  // db.createUser(
  //   {
  //     user: "padmin",
  //     pwd: "padmin123",
  //     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  //   }
  // )
  // user h5db
  // db.createUser(
  //   {
  //     user: "h5dbadmin",
  //     pwd: "admin123",
  //     roles: [ { role: "readWrite", db: "h5db" } ]
  //   }
  // )
};
