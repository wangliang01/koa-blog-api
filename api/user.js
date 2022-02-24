const Router = require('koa-router')

const router =  Router({
  prefix: ''
})

router.get('/user', async (ctx) => {
  ctx.body = {
    key: 'user'
  }
})

module.exports = router