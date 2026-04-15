const quiz_questions = require('../data.js');
const path = require('path');

const getQuiz = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/quiz.html'));
};

const getQuizQuestion = (req, res) => {
  res.json(quiz_questions);
};

const getQuizScore = (req, res) => {};

const answerQuestion = (req, res) => {};

module.exports = { getQuiz, getQuizScore, answerQuestion, getQuizQuestion };
