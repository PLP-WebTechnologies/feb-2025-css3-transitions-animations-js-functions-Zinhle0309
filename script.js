// Function to save and retrieve preferences using localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Example: Save a theme preference
savePreference('theme', 'dark');
console.log('Saved theme:', getPreference('theme')); // Output: 'dark'

// Add event listener to the button
document.querySelector('.animate-btn').addEventListener('click', () => {
  const box = document.querySelector('.box'); // Select the blue box
  box.classList.add('animate'); // Add the 'animate' class to trigger the animation

  // Remove the 'animate' class after the animation completes
  setTimeout(() => {
    box.classList.remove('animate');
  }, 2000); // Match the animation duration (2s)
});