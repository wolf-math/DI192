const express = require('express');
const app = express();
const products_routes = require('./routes/products.js');
const posts_routes = require('./routes/posts.js');

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

app.use(express.json());
app.use('/api/products', products_routes);
app.use('/api/posts', posts_routes);
