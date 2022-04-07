const logger = (req, res, next) => {
  const { method, url } = req;
  console.log(`${method} request to ${url} with status ${res.statusCode}`);
  next();
};

module.exports = logger;
