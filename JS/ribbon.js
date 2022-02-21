export default function ribbon() {
  const ribbons = document.querySelectorAll('[data-js="ribbon"]');

  ribbons.forEach(ribbon => {
    ribbon.addEventListener('click', () => {
      ribbon.classList.toggle('ribbon--active');
    });
  });
}
