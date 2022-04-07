const logger = (req, res, next) => {
  const { method, url } = req;
  console.log(`${method} request to ${url}`);
  next();
};

module.exports = logger;
