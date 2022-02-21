export default function answer() {
  const showAnswerButtons = document.querySelectorAll(
    '[data-js="answer-button"]'
  );
  //const cardAnswer = document.querySelector('.card__answer');

  showAnswerButtons.forEach(showAnswerButton => {
    showAnswerButton.addEventListener('click', () => {
      showAnswerButton.innerText === 'Show Answer'
        ? (showAnswerButton.innerText = 'Hide Answer')
        : (showAnswerButton.innerText = 'Show Answer');

      showAnswerButton.nextSibling.nextSibling.classList.toggle('hidden');
    });
  });
}
