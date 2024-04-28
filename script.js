let timer;
let time = 0;

function start() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  time = 0;
  updateTime();
}

function updateTime() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.querySelector('.time').innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  time++; // Move the increment after updating the time components
}
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}