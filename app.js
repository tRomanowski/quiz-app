console.clear();

const showAnswerButton = document.querySelector('.card__button');
const cardAnswer = document.querySelector('.card__answer');

showAnswerButton.addEventListener('click', () => {
  showAnswerButton.textContent === 'Show Answer'
    ? (showAnswerButton.textContent = 'Hide Answer')
    : (showAnswerButton.textContent = 'Show Answer');

  cardAnswer.classList.toggle('hidden');
});

const ribbon = document.querySelector('.ribbon');

ribbon.addEventListener('click', () => {
  ribbon.classList.toggle('ribbon--active');
});
