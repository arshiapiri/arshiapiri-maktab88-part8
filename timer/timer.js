let hour = 0;
let minute = 0;
let second = 0;
let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => {timer(); }, 1000);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute= 0;
    second = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}

function timer() {
      ++second;
    if (second == 60) {
        second = 0;
        minute++;
      }
    if (minute == 60) {
        minute = 0;
        hour++;
      }

      document.getElementById('hour').innerText = returnData(hour);
      document.getElementById('minute').innerText = returnData(minute);
      document.getElementById('second').innerText = returnData(second);
}
function returnData(input) {
    if(input>=10){
        return input;
    }
    else if(input<10){
        return `0${input}`;
    }
  }

