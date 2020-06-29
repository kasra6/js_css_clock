//get elements
let secondsHand = document.querySelector(".sec-hand");
let minsHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

//get the time
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondsHand.style.rotate = `${secondsDegrees}deg`;


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360);
  minsHand.style.rotate = `${minsDegrees}deg`;

  const hour = now.getHours();

  const hourDegrees = ((hour / 12) * 360);
  console.log(hourDegrees);
  hourHand.style.rotate = `${hourDegrees}deg`;
}

setInterval(setDate, 1000);
