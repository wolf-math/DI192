const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// middleware function
const logDateTime = (req, res, next) => {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  console.log(`Date: ${date}, Time: ${time}`);
  req.requestTime = `${date} ${time}`;

  next();
};

// second middleware function
const sayHi = (req, res, next) => {
  console.log('Hello There!');

  next();
};

// use both middleware functions on both routes
app.use([logDateTime, sayHi]);

// first route
app.get('/', (req, res) => {
  res.send(`Home Page<br>Request time: ${req.requestTime}`);
});

// second route
app.get('/special', (req, res) => {
  // logDateTime specified on this route.
  res.send(`Special Route<br>Request time: ${req.requestTime}`);
});
