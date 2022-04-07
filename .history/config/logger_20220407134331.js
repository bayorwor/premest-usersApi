const logger = (req, res, next) => {
  const { method, url, statusCode } = req;
  console.log(`${method} request to ${url} with status code ${status}`);
  next();
};

module.exports = logger;
