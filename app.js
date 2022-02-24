const Koa = require('koa')
const { port } = require('./config/app')
const InitManager = require('./core/init')
/* 获取一个应用实例 */
const app = new Koa()

InitManager.initCore(app)

/* 监听3000端口 */
app.listen(port, () => {
  console.log(`the server is running at http://localhost:${port}`);
})