const express = require('express');
const router = express.Router();

const {
  startQuiz,
  submitAnswer,
  getScore
} = require('../controllers/quizController');

router.get('/', startQuiz); // this is actually /quiz
router.post('/', submitAnswer);
router.get('/score', getScore); // this is actually /quiz/score

module.exports = router;
