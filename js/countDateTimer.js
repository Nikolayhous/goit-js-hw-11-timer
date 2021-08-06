// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий,
// во время технического обслуживания и т. д.

const refs = {
    stopTimer: document.querySelector('timer'),
  divTimer: document.querySelector('#timer-1'),
  spanDays: document.querySelector('[data-value="days"]'),
  spanHours: document.querySelector('[data-value="hours"]'),
  spanMins: document.querySelector('[data-value="mins"]'),
  spanSecs: document.querySelector('[data-value="secs"]'),
};

const timer = {
// constructor({ CountdownTimer }) {
//     this.CountdownTimer = CountdownTimer;
// }

  start() {
    const startTime = Date.now('Ogs 4, 2021');

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = setTimeComponents(deltaTime);
      
    //   updateClock(time)
      
    }, 1000);
  },
};

timer.start();

  function updateClock({days, hours, mins, secs}) {
       refs.divTimer.textContent = `${days}:${hours}:${mins}:${secs}`;
  }

  function pad(value) {
      return String(value).padStart(2, '0')
  }


function setTimeComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

refs.spanDays.textContent = `${days}`;
refs.spanHours.textContent = `${hours}`;
refs.spanMins.textContent = `${mins}`;
refs.spanSecs.textContent = `${secs}`;
}



function stopTime(time) {
    if(time < 0) {
        refs.stopTimer.textContent = 'Поздравляю, вы выиграли автомобиль';
        refs.stopTimer.style.backgroundColor = 'rgba(66, 60, 60, 0.5)';
        refs.stopTimer.style.fontSize = '48px';
        refs.stopTimer.style.color = 'white';
        refs.stopTimer.style.textAlign = 'center';
        refs.stopTimer.style.fontWeight = '700'
    }
}

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });
