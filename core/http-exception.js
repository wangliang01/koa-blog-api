class HttpException extends Error {
  constructor(errorCode, msg, code) {
    super()
    this.errorCode = errorCode 
    this.msg = msg 
    this.code = code 
  }
}


class ParameterException extends HttpException {
  constructor(errorCode = 10001, msg = '参数错误') {
    super()
    this.errorCode = errorCode 
    this.msg = msg 
    this.code = 400 
  }
}

module.exports = {
  HttpException,
  ParameterException
}