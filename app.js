console.clear();

const showAnswerButton = document.querySelector('.card__button');
const cardAnswer = document.querySelector('.card__answer');

showAnswerButton.addEventListener('click', () => {
  cardAnswer.style.display = 'block';
});

const ribbon = document.querySelector('.ribbon');

ribbon.addEventListener('click', () => {
  ribbon.classList.toggle('ribbon--active');
});
