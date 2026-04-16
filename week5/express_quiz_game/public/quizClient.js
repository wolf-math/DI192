// Start quiz when page loads
window.onload = async () => {
  const res = await fetch('/quiz');
  const data = await res.json();

  document.getElementById('question').textContent = data.question;
};

// submit an answer
const questionForm = document.getElementById('questionForm');
questionForm.addEventListener('submit', submitAnswer);

async function submitAnswer(e) {
  e.preventDefault();
  const answerInput = document.getElementById('answer');
  const answer = answerInput.value;

  // submitAnswer in the controller
  const res = await fetch('/quiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer })
  });

  const data = await res.json();

  document.getElementById('feedback').textContent = data.feedback || '';

  // If quiz continues
  if (data.nextQuestion) {
    document.getElementById('question').textContent = data.nextQuestion;
    answerInput.value = '';
  }
  // If finished → redirect
  else {
    window.location.href = '/results.html';
  }
}
