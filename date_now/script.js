'use strict';

/*
Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней
*/

let helloString = document.querySelector('#hello'),
  todayString = document.querySelector('#today'),
  timeString = document.querySelector('#time'),
  newYearString = document.querySelector('#newyear');

let getTimeNow = function() {
  let date = new Date();
  return date;
  };

let showHello = () => {
  let hour = getTimeNow().getHours();
  let message = '';

  if (hour > 5 && hour < 11) {
    message = 'Доброе утро';
  } else if (hour > 11 && hour < 17) {
    message = 'Добрый день';
  } else if (hour > 17 && hour < 22) {
    message = 'Добрый вечер';
  } else {
    message = 'Доброй ночи';
  }

  helloString.textContent = `${message}`;
};

let showToday = () => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let today = getTimeNow().toLocaleDateString('ru-RU', options).split(', '); // ["понедельник", " 9 августа 2021 г."]
  todayString.textContent = `Cегодня: ${today[0]}`;
};

let showTime = () => {
  timeString.textContent = `Текущее время: ${getTimeNow().toLocaleTimeString('en-US')}`;
};

let showNewYear = () => {
  let NewYearDate = new Date(`1 january ${getTimeNow().getFullYear() + 1}`);

  newYearString.textContent = `До нового года осталось ${Math.floor((NewYearDate - getTimeNow()) / 86400000)} дней.`;
};

setInterval(showHello, 1000);
setInterval(showToday, 1000);
setInterval(showTime, 1000);
setInterval(showNewYear, 1000);
