/* 全局异常拦截中间件函数 */
const catchError = async (ctx, next) => {
  try {
    // 执行下一个中间件
    await next()
  } catch (error) {
    // 判断是已知异常,还是未知异常
    ctx.body = '服务器有点异常，你等一下'
    // 未知异常判断，是生产环境，还是开发环境

  }
}

module.exports = catchError