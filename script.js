let startTime;
let clickCount = 0;
let gameStarted = false;

function clickButton() {
  if (!gameStarted) {
    startTime = new Date().getTime(); // Start the timer on first click
    gameStarted = true;
  }

  clickCount++;

  let currentTime = new Date().getTime();
  let timeElapsed = (currentTime - startTime) / 1000; // Time in seconds

  // Update time on the page
  document.getElementById('game-time').textContent = `Time: ${timeElapsed.toFixed(2)}s`;

  // If the player has clicked 10 times, stop the game
  if (clickCount === 10) {
    alert(`Game Over! You took ${timeElapsed.toFixed(2)} seconds to click 10 times.`);
    clickCount = 0;
    gameStarted = false;
    document.getElementById('game-time').textContent = `Time: 0s`;
  }
}