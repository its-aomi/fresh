// Select the counter elements
const counters = document.querySelectorAll('.counter');

// Set the initial count for each counter to 0
counters.forEach(counter => {
  counter.innerText = 0;
  // Add a flag to track whether the counter has been animated
  counter.animated = false;
});

// Define a function to count up to a target number
function countUp(counter, target) {
  // Set the current count to 0
  let currentCount = 0;

  // Parse the target number from the data-target attribute
  target = parseFloat(target);

  // Check if the counter should use decimals
  const useDecimals = counter.classList.contains('decimal');

  // Set the interval time and increment based on whether or not the counter should use decimals
  const intervalTime = useDecimals ? 20 : 20;
  const increment = useDecimals ? 0.1 : 1;

  // Set an interval to update the count every intervalTime
  const interval = setInterval(() => {
    // Increment the count
    currentCount += increment;

    // Update the counter element
    counter.innerText = useDecimals ? currentCount.toFixed(1) : currentCount;

    // If the count has reached the target, clear the interval
    if (currentCount >= target) {
      clearInterval(interval);
    }
  }, intervalTime);
}

// Add an event listener to the window to detect when the user scrolls
window.addEventListener('scroll', function() {
  // Check if any of the counters are in the viewport
  counters.forEach(counter => {
    if (isInViewport(counter) && !counter.animated) {
      // If the counter is in the viewport and has not been animated, start the count up animation
      const target = counter.dataset.target;
      countUp(counter, target);
      // Set the animated flag to true
      counter.animated = true;
    }
  });
});

// Define a function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
