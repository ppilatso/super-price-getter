declare type Errors = {
  BadRequest: {
    status: 400,
    message: "Request has wrong format."
  },
  Unauthorized: {
    status: 401,
    message: "Authentication credentials not valid."
  },
  Forbidden: {
    status: 403,
    message: "You're missing permission to execute this request."
  }
}
