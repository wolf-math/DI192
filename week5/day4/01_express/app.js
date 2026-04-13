const express = require('express');
const products = require('./data.js');

const app = express();

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

// homepage
app.get('/', (req, res) => res.send('Hello World!'));
// about page
app.get('/aboutme', (req, res) => res.send('I love coding!'));

// tutorial page
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'));

// dynamic tutorial page
app.get('/tutorial/:notion', (req, res) => {
  console.log('req.params: ', req.params);
  res.send(`Tutorial about ${req.params.notion}!`);
});

// get all products (from data.js)
app.get('/api/products', (req, res) => {
  res.json(products);
});

// get single product by id
app.get('/api/products/:productID', (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.json(product);
});

app.get('/api/query', (req, res) => {
  const name = req.query.name.toLowerCase();
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
  );

  if (products_result.length < 1) {
    return res.status(200).send('No products matched your search');
  }
  res.json(products_result);
});
