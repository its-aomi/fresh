// Select the paragraph elements
const paragraphs = document.querySelectorAll('.hero-content p');

// Set the initial opacities
paragraphs[0].style.opacity = '0.1';
paragraphs[1].style.opacity = '0';
paragraphs[2].style.opacity = '0';

// Add an event listener to the window to detect when the user scrolls
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Set the opacities of the paragraphs to a value between their initial value and 100% based on the scroll position
  paragraphs[0].style.opacity = (scrollPosition / 200) + 0.1;
  paragraphs[1].style.opacity = (scrollPosition / 500) + 0;
  paragraphs[2].style.opacity = (scrollPosition / 700) + 0;
});

