const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
const h2=document.querySelector('h2');

// Check if the user has a preference for dark mode
const isDarkMode = localStorage.getItem('darkMode');

if (isDarkMode === 'true') {
  body.classList.add('dark-mode');
  h2.classList.add('dark-mode');
}

// Listen for the toggle button to be clicked
darkModeToggle.addEventListener('click', () => {
  // Toggle the body's class to switch between light and dark mode
  body.classList.toggle('dark-mode');
  h2.classList.add('dark-mode');

  // Save the user's preference for dark mode
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  localStorage.setItem('darkMode', h2.classList.contains('dark-mode'));
});
