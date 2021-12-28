const themeTogglerBtn = document.querySelector('.theme-toggler');
const themeImg = themeTogglerBtn.querySelector('img');

function enableDarkTheme() {
  themeImg.setAttribute('src', '../images/icon-sun.svg');
  document.body.setAttribute('data-theme', 'dark');
}

function enableLightTheme() {
  themeImg.setAttribute('src', '../images/icon-moon.svg');
  document.body.setAttribute('data-theme', 'light');
}

function toggleTheme() {
  if (document.body.getAttribute('data-theme') === 'light') {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
}

// Changing to the user preferred theme
window.addEventListener('load', event => {
  const userPreferredColorScheme = window.matchMedia('(prefers-color-scheme)');

  if (userPreferredColorScheme.media !== 'not all') {
    // Then the browser can use this functionality

    const userPrefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDarkTheme) {
      enableDarkTheme();
    } else {
      enableLightTheme();
    }
  }
});

themeTogglerBtn.addEventListener('click', toggleTheme);