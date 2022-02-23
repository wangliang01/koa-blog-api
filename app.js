const Koa = require('koa')
const { port } = require('./config/app')

/* 获取一个应用实例 */
const app = new Koa()

/* 监听3000端口 */
app.listen(port, () => {
  console.log(`the server is running at http://localhost:${port}`);
})