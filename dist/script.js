document.addEventListener('DOMContentLoaded', function () {
  const clock = document.getElementById('clock');
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  const themeToggle = document.getElementById('theme-toggle');

  // Update the clock
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.toDateString();

    timeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    dateElement.textContent = date;
  }

  // Format time with leading zeros
  function formatTime(time) {
    return time.toString().padStart(2, '0');
  }

  // Toggle between dark and light themes
  themeToggle.addEventListener('click', function () {
    clock.classList.toggle('light');
    clock.classList.toggle('dark');
  });

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial clock update
  updateClock();
});