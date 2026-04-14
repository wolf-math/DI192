const express = require('express');
const app = express();
const products_routes = require('./routes/products.js');

app.use(express.json());

// homepage
app.get('/', (req, res) => {
  res.send('Home page!');
});

// protected routes
app.use('/api/products', products_routes);

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
