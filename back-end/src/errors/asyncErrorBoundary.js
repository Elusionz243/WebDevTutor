const asyncErrorBoundary = (delegate, defaultStatus) => {
  return async (request, response, next) => {
    try {
      await Promise.resolve();
      await delegate(request, response, next);
    } catch (error) {
      const { status = defaultStatus, message = error } = error;
      next({ status, message });
    }
  }
}

module.exports = asyncErrorBoundary;
