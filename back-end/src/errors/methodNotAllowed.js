const methodNotAllowed = (request, response, next) => next({ status: 500, message: "Method not allowed!" });

module.exports = methodNotAllowed;
