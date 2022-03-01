const Router = require('koa-router')
const {KoaValidator} = require('../core/validator')

const router =  Router({
  prefix: ''
})

router.post('/user/:id', async (ctx) => {
  new KoaValidator().validate(ctx)
  ctx.body = {
    key: 'user'
  }
})

module.exports = router