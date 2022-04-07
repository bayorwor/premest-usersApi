const logger = (req, res, next) => {
  const { method, url, statusCode } = req;
  console.log(`${method} request to ${url} with status code ${statusCode}`);
  next();
};

module.exports = logger;
