export className ResponseAPI {
  constructor(isError, message, data) {
    this.data = data
    this.isError = isError
    this.message = message
  }
}
