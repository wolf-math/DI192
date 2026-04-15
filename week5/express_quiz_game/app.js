const express = require('express');
const quiz_routes = require('./routes/quiz_routes.js');

const app = express();

app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

app.use('/quiz', quiz_routes);

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
