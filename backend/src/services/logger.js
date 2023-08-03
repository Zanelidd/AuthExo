const logger = (options) => (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, url, ip } = req;
  console.log(`
          ${timestamp} 
          ${options.level} 
          ${method} ${url} 
          ${ip}`);
  next();
};

module.exports = logger;
