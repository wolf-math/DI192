async function loadScore() {
  const res = await fetch('/quiz/score');
  const data = await res.json();

  document.getElementById('score').textContent =
    `Score: ${data.score} / ${data.totalQuestions}`;
}

loadScore();
