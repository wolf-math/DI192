const triviaQuestions = require('../data');

let currentQuestionIndex = 0;
let score = 0;

startQuiz = (req, res) => {
  currentQuestionIndex = 0;
  score = 0;

  const question = triviaQuestions[currentQuestionIndex];

  res.json({
    question: question.question
  });
};

submitAnswer = (req, res) => {
  const userAnswer = req.body.answer;

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  let feedback;

  if (
    userAnswer &&
    userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()
  ) {
    score++;
    feedback = 'Correct!';
  } else {
    feedback = `Incorrect! Correct answer: ${currentQuestion.answer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    return res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  }

  res.json({
    feedback,
    finished: true
  });
};

getScore = (req, res) => {
  res.json({
    score,
    totalQuestions: triviaQuestions.length
  });
};

module.exports = { startQuiz, submitAnswer, getScore };
