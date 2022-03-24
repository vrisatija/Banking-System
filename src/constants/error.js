function CustomException(message, status) {
  const error = new Error(message);

  error.code = status;
  return error;
}

CustomException.prototype = Object.create(Error.prototype);
module.exports = {
  CustomException,
};
