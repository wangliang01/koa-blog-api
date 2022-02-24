class HttpException extends Error {
  constructor(errorCode, msg, code) {
    super()
    this.errorCode = errorCode 
    this.msg = msg 
    this.code = code 
  }
}

module.exports = {
  HttpException
}