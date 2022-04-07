const logger = (req, res, next) => {
  const { method, url, status_code } = req;
  console.log(`${method} request to ${url} with status code ${status_code}`);
  next();
};

module.exports = logger;
