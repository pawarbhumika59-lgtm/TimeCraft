const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

function updateTime(){
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;
}

setInterval(updateTime, 1000);
updateTime();