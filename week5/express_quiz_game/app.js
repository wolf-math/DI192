const express = require('express');
const app = express();

const quizRoutes = require('./routes/quizRoutes');

app.use(express.json());
app.use(express.static('public'));

app.use('/quiz', quizRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
