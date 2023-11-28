let BACKEND_URL = 'https://github.com/Lafdalt/UltimeTimer-API';


if (BACKEND_URL[BACKEND_URL.length - 1] === '/') {
  BACKEND_URL = BACKEND_URL.slice(0, -1);
}  

setInterval(function () {
  fetch(`${BACKEND_URL}/time`)
    .then(response => response.json())
    .then(data => {
      const timer = document.getElementById('timer');
      timer.innerHTML = data.time;
    });
}, 1000);
