export default function nav() {
  const homeButton = document.querySelector('[data-js="home-button"]');
  const bookmarksButton = document.querySelector(
    '[data-js="bookmarks-button"]'
  );
  const createButton = document.querySelector('[data-js="create-button"]');
  const profileButton = document.querySelector('[data-js="profile-button"]');

  const homeMain = document.querySelector('[data-js="home-main"]');
  const bookmarksMain = document.querySelector('[data-js="bookmarks-main"]');
  const createMain = document.querySelector('[data-js="create-main"]');
  const profileMain = document.querySelector('[data-js="profile-main"]');

  homeButton.addEventListener('click', () => {
    homeMain.classList.remove('hidden');
    bookmarksMain.classList.add('hidden');
    createMain.classList.add('hidden');
    profileMain.classList.add('hidden');
  });

  bookmarksButton.addEventListener('click', () => {
    homeMain.classList.add('hidden');
    bookmarksMain.classList.remove('hidden');
    createMain.classList.add('hidden');
    profileMain.classList.add('hidden');
  });

  createButton.addEventListener('click', () => {
    homeMain.classList.add('hidden');
    bookmarksMain.classList.add('hidden');
    createMain.classList.remove('hidden');
    profileMain.classList.add('hidden');
  });

  profileButton.addEventListener('click', () => {
    homeMain.classList.add('hidden');
    bookmarksMain.classList.add('hidden');
    createMain.classList.add('hidden');
    profileMain.classList.remove('hidden');
  });
}
