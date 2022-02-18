console.clear();

const showAnswerButtons = document.querySelectorAll(
  '[data-js="answer-button"]'
);
//const cardAnswer = document.querySelector('.card__answer');

showAnswerButtons.forEach(showAnswerButton => {
  showAnswerButton.addEventListener('click', () => {
    showAnswerButton.textContent === 'Show Answer'
      ? (showAnswerButton.textContent = 'Hide Answer')
      : (showAnswerButton.textContent = 'Show Answer');

    showAnswerButton.nextSibling.nextSibling.classList.toggle('hidden');
  });
});

const ribbons = document.querySelectorAll('[data-js="ribbon"]');

ribbons.forEach(ribbon => {
  ribbon.addEventListener('click', () => {
    ribbon.classList.toggle('ribbon--active');
  });
});
