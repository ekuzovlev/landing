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

let timeNow = new Date(),
  hours = timeNow.getHours();

function getHello(){
  if (hours > 5 && hours < 11) {
    return 'Доброе утро';
  } else if (hours > 11 && hours < 17) {
    return 'Добрый день';
  } else if (hours > 17 && hours < 22) {
    return 'Добрый вечер';
  } else {
    return 'Доброй ночи';
  }
}

let getDate = function(date){
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('ru-RU', options).split(', '); // ["понедельник", " 9 августа 2021 г."]
};

let NewYearDate = new Date('1 january 2022');

helloString.textContent = `${getHello()}`;
todayString.textContent = `Cегодня: ${getDate(timeNow)[0]}`;
timeString.textContent = `Текущее время: ${timeNow.toLocaleTimeString('en-US')}`;
newYearString.textContent = `До нового года осталось ${Math.floor((NewYearDate - timeNow) / 86400000)} дней.`;
