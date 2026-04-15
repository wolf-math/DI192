const express = require('express');
const router = express.Router();

const {
  getQuiz,
  getQuizQuestion,
  getQuizScore,
  answerQuestion
} = require('../controllers/quiz_controller.js');

router.get('/', getQuiz);
router.get('/score', getQuizScore);
router.get('/quiz_question', getQuizQuestion);
router.post('/', answerQuestion);

module.exports = router;
