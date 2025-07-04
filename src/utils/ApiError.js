class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors=errors

    if(stack){
        this.status=stack
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
  }
}

export default ApiError;