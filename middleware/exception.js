const { HttpException } = require("../core/http-exception")
const {env} = require('../config/app')

/* 全局异常拦截中间件函数 */
const catchError = async (ctx, next) => {
  try {
    // 执行下一个中间件
    await next()
  } catch (error) {
    // 判断是已知异常,还是未知异常
    if (error instanceof HttpException) {
      ctx.body = {
        errorCode: error.errorCode,
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      // 未知异常判断，是生产环境，还是开发环境
      if (env === 'development') {
        throw error
      } 

      ctx.body = {
        errorCode: '999',
        msg: '服务器异常',
        request: `${ctx.method} ${ctx.path}`
      }

      ctx.status = 500
    }

  }
}

module.exports = catchError