/**
 * Express API "Not found" handler.
 */
const notFound = (request, response, next) => next({ status: 400, message: `Path not found ${request.originalUrl}` });

module.exports = notFound;
