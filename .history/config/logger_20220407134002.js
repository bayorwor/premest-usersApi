const logger = (req, res, next) => {
  const { method, url, statuscode } = req;
  console.log(`${method} request to ${url} with status code ${statuscode}`);
  next();
};

module.exports = logger;
