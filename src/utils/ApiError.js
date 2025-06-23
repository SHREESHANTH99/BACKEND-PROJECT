class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors=errors

    if(statck){
        this.status=statck
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
  }
}

export default ApiError;