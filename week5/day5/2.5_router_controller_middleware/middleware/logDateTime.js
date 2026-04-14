// middleware/logDateTime.js

const logDateTime = (req, res, next) => {
  const now = new Date();
  req.requestTime = now.toLocaleString();

  console.log(req.requestTime);
  next();
};

module.exports = logDateTime;
