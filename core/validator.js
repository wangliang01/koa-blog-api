const validator = require('validator')

class KoaValidator {
  constructor() {}
  validate(ctx) {
    // 在ctx中获取参数
   const params =  this.getParmas(ctx)
   console.log("参数", params);
    //  获取参数对应的校验规则 
    
    for (let key of this) {
      const rules = this.getRules(key)
    }
  }
  getRules(key) {
    return this[key]
  }
  getParmas(ctx) {
    //获取path参数
    const params = ctx.params 
    const query = ctx.request.query 
    const header = ctx.request.header 
    const body = ctx.request.body 

    return {
      ...params,
      ...query,
      ...header,
      ...body 
    }
  }
}

class Rule {
  constructor(fnExp, msg, ...args) {
    if (typeof validator[fnExp] === 'function') {
      // 如果是validator中的函数，则调用
      const valid =  validator[fnExp].apply(null, args)
      if (!valid) {
        throw Error(msg)
      }
    }
  }
}

module.exports = {
  KoaValidator,
  Rule
}