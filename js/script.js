window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = two2digits(Math.floor(timeRemaining % 60)),
        minutes = two2digits(Math.floor((timeRemaining / 60) % 60)),
        hours = two2digits(Math.floor(timeRemaining / 60 / 60));

        if (dateStop > dateNow) {

          return {timeRemaining, hours, minutes, seconds};
        } else {
          return {timeRemaining: 0,
                 hours: '00',
                 minutes: '00',
                 seconds: '00'};
        }
    }

    function updateClock(){
      let timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
    }

    setInterval(() => {
      updateClock();
    }, 1000);
  }

  countTimer('19 august 2021');

  function two2digits (digit){
    if (digit.toString().length < 2){
      return '0' + digit;
    } else {
      return digit;
    }
  }
});

