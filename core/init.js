const requireDirectory = require("require-directory");
const Router = require("koa-router");
const catchError = require("../middleware/exception");
class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadGlobalException();
    InitManager.initLoadException();
    InitManager.initLoadBodyParder();
    InitManager.initLoadRouters();
  }
  // 加载路由
  static initLoadRouters() {
    requireDirectory(module, `${process.cwd()}/api`, {
      visit(router) {
        if (router instanceof Router) {
          InitManager.app.use(router.routes()).use(router.allowedMethods());
        }
        // 如果router不是Router实例
        for (const key of Object.keys(router)) {
          if (router[key] instanceof Router) {
            InitManager.app
              .use(router[key].routes())
              .use(router[key].allowedMethods());
          }
        }
      },
    });
  }
  // 加载全局异常中间件
  static initLoadGlobalException() {
    InitManager.app.use(catchError);
  }
  // 加载exception
  static initLoadException() {
    global.errs = require("./http-exception");
  }
  // 加载bodyparser 
  static initLoadBodyParder() {
    const bodyParser = require('koa-bodyparser')
    InitManager.app.use(bodyParser())
  }
}

module.exports = InitManager;
