const lightThemeBtn = document.querySelector(
  '.header__theme-button_type_light'
);
const darkThemeBtn = document.querySelector('.header__theme-button_type_dark');

const strangeThemeBtn = document.querySelector('.header__theme-button_type_strange');

window.onload = () => {
  const themeInLocal = localStorage.getItem('theme');
  if (!themeInLocal) {
    setLightTheme();
  } else if (themeInLocal === 'dark') {
    setDarkTheme();
  } else if (themeInLocal === 'strange') { 
    setStrangeTheme();
  }
};

lightThemeBtn.onclick = () => {
  setLightTheme();
  localStorage.removeItem('theme');
};

darkThemeBtn.onclick = () => {
  setDarkTheme();
  localStorage.setItem('theme', 'dark');
};

strangeThemeBtn.onclick = () => {
  setStrangeTheme();
  localStorage.setItem('theme', 'strange');
};

function setDarkTheme() {
  document.querySelector('.page').classList.add('theme_dark');
  document.querySelector('.page').classList.remove('theme_strange');
  lightThemeBtn.classList.remove('header__theme-button_is-active');
  strangeThemeBtn.classList.remove('header__theme-button_is-active');
  darkThemeBtn.classList.add('header__theme-button_is-active');
  darkThemeBtn.disabled = true;
  lightThemeBtn.disabled = false;
  strangeThemeBtn.disabled = false;
};

function setLightTheme() {
  document.querySelector('.page').className = 'page';
  darkThemeBtn.classList.remove('header__theme-button_is-active');
  strangeThemeBtn.classList.remove('header__theme-button_is-active');
  lightThemeBtn.classList.add('header__theme-button_is-active');
  darkThemeBtn.disabled = false;
  lightThemeBtn.disabled = true;
  strangeThemeBtn.disabled = false;
};

function setStrangeTheme() {
  document.querySelector('.page').classList.remove('theme_dark');
  document.querySelector('.page').classList.add('theme_strange');
  darkThemeBtn.classList.remove('header__theme-button_is-active');
  lightThemeBtn.classList.remove('header__theme-button_is-active');
  strangeThemeBtn.classList.add('header__theme-button_is-active');
  darkThemeBtn.disabled = false;
  lightThemeBtn.disabled = false;
  strangeThemeBtn.disabled = true;
};
