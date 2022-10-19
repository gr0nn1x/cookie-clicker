const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const clickupgrade2 = document.getElementById("clickupgrade2");
const autoclicerkUpgrade = document.getElementById("autoclickerUpgrade");

let cookies = 0;
let clickIncrease = 1;
let clickIncreasePrice = 100;
let clickIncreasePrice2 = 500000;
let autoclickerIncrease = 0;
let autoclickerPrice = 1000;

cookie.onclick = () => {
  cookies += clickIncrease; //PŘIDÁ JEDNIČKU COOKIES = COOKIES + 1
  counter.innerHTML = cookies;
};

counter.innerHTML = cookies;

clickupgrade.onclick = () => {
  if (cookies >= clickIncreasePrice) {
    cookies -= clickIncreasePrice;
    clickIncreasePrice *= 2;
    counter.innerHTML = cookies;
    clickIncrease *= 2;
    clickupgrade.innerHTML = `Buy upgrade: ${clickIncreasePrice}`;
  }
};

autoclicerkUpgrade.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice += 100;
    autoclicerkUpgrade.innerHTML = `Buy autoclicker upgrade: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
        cookies += autoclickerIncrease;
        counter.innerHTML = cookies;
      }, 100);
    }
    autoclickerIncrease++;
  }
};

clickupgrade2.onclick = () => {
  if (cookies >= 100000) {
    cookies -= 100000;
    counter.innerHTML = cookies;
    clickIncrease *= 150;
    clickupgrade.innerHTML = `Buy upgrade: ${clickIncreasePrice2}`;
  }
};


