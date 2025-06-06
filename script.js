let countdown;

function startTimer(seconds) {
  clearInterval(countdown);
  const endTime = Date.now() + seconds * 1000;

  function updateTimer() {
    const remaining = Math.round((endTime - Date.now()) / 1000);
    if (remaining <= 0) {
      clearInterval(countdown);
      document.getElementById('timer').textContent = "Done!";
      alert("Your egg is ready! 🥚🍳");
      return;
    }
    const minutes = Math.floor(remaining / 60);
    const secs = remaining % 60;
    document.getElementById('timer').textContent = `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  updateTimer();
  countdown = setInterval(updateTimer, 1000);
}