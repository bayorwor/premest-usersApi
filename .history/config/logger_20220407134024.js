const logger = (req, res, next) => {
  const { method, url, status } = req;
  console.log(`${method} request to ${url} with status code ${status}`);
  next();
};

module.exports = logger;
