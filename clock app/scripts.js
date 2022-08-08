// numbers
const numbers = document.getElementById("numbers");

for(i = 1; i <=12; i++){
    const hourCount = document.createElement('span');
    hourCount.classList.add('hour-count');
    hourCount.innerHTML = i;

    const numberEl = document.createElement('div');
    numberEl.classList.add('number-el');
    numberEl.classList.add(`number-${i}`);
    numberEl.appendChild(hourCount);

    numbers.appendChild(numberEl);

    rotateNumbers(numberEl, i);
    fixNumbers(hourCount, i);

}

function rotateNumbers(numberEl, count){
    const rotateNum = count * 30 + 'deg';
    numberEl.style.transform = `rotate(${rotateNum})`;
}

function fixNumbers (hourCount, count){
    const fixNum = -1 * (count * 30) + 'deg';
    hourCount.style.transform = `rotate(${fixNum})`;
}

// access our digital number elements
const hourDigital = document.getElementById('hour');
const minuteDigital = document.getElementById('minute');
const secondDigital = document.getElementById('second');

setInterval(clockFunction, 1000);

function clockFunction(){
    const Time = new Date()
    const hour = Time.getHours();
    const minute = Time.getMinutes();
    const second = Time.getSeconds();

    let checkHour = hour;
    if(checkHour > 12) checkHour -= 12;
    hourDigital.innerHTML = checkHour;
    minuteDigital.innerHTML = minute;
    secondDigital.innerHTML = second;

    if(checkHour < 10) hourDigital.innerHTML = `0${checkHour}`;
     if(minute < 10) minuteDigital.innerHTML = `0${minute}`;
      if(second < 10) secondDigital.innerHTML = `0${second}`;

      const hourHand = document.getElementById('hourHand');
      const minuteHand = document.getElementById('minuteHand');
      const secondHand = document.getElementById('secondHand');

      const secondRotate = second / 60;
      const minuteRotate = (secondRotate + minute) / 60;
      const hourRotate = (minuteRotate + hour) / 12;

      moveHands(secondHand, secondRotate);
      moveHands(minuteHand, minuteRotate);
      moveHands(hourHand, hourRotate);

}

function moveHands(moveHands, rotateRatio){
    moveHands.style.setProperty('--rotation', rotateRatio * 360)
}

clockFunction();

