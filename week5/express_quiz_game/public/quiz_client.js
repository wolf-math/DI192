const quiz_container = document.getElementById('quiz_container');

function getData() {
  fetch('http://localhost:3000/quiz/quiz_question')
    .then((res) => res.json())
    .then((data) => {
      
    });
}


