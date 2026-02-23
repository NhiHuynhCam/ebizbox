module.exports = {
    apps : [{
      name   : "builty-web",
      script : "yarn",
      args: "start -p 3066",
      exec_mode: "fork",
      error_file : "./logs/error.log",
      log_date_format: "YYYY-MM-DD HH:mm Z"
    }]
  }