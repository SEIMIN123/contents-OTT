const sideOpen = document.querySelector('.sideopen');
const ham = document.querySelector('.ham');

let data = true;

ham.addEventListener('click', () => {

  if (data === true) {
    data = false;

    sideOpen.style.width = "18vw";
    sideOpen.style.height = "100%";
    sideOpen.style.display = "block";
    sideOpen.style.transition = "0.5s";
    sideOpen.style.trasnform = "translateX(3vw)";
    sideOpen.style.backgroundColor = "#141414";

  } else {
    data = true;

    sideOpen.style.width = "5vw";
    sideOpen.style.backgroundColor = "#303030";
  }
});

//------------------------------------------------------------

const conThree = document.querySelector('.con-3');
const ticketOne = document.querySelector('.ticket-1');
const ticketTwo = document.querySelector('.ticket-2');
const ticketThree = document.querySelector('.ticket-3');

let data1 = true;
ticketOne.addEventListener('click', () => {

  if (data1 === true) {

    data1 = false;
    ticketOne.style.color = "#D63D3D";
    ticketOne.style.transition = "0.5s";
    ticketThree.style.color = "#fff";
    ticketTwo.style.color = "#fff";
  } else {
    data1 = true;
    ticketOne.style.color = "#D63D3D";
    ticketTwo.style.color = "#fff";
    ticketThree.style.color = "#fff";
  }
});

let data2 = true;
ticketTwo.addEventListener('click', () => {

  if (data2 === true) {

    data2 = false;
    ticketTwo.style.color = "#D63D3D";
    ticketTwo.style.transition = "0.5s";
    ticketOne.style.color = "#fff";
    ticketThree.style.color = "#fff";
  } else {
    data2 = true;
    ticketOne.style.color = "#fff";
    ticketTwo.style.color = "#D63D3D";
    ticketThree.style.color = "#fff";
  }
});

let data3 = true;
ticketThree.addEventListener('click', () => {

  if (data3 === true) {

    data3 = false;
    ticketThree.style.color = "#D63D3D";
    ticketThree.style.transition = "0.5s";
    ticketOne.style.color = "#fff";
    ticketTwo.style.color = "#fff";
  } else {
    data3 = true;
    ticketOne.style.color = "#fff";
    ticketTwo.style.color = "#fff";
    ticketThree.style.color = "#D63D3D";
  }
});

//-----------------------------------------------------------

const home = document.querySelector('.hometext');
home.addEventListener('click', function () {
  let page = '../VER-2/home.html';
  location.href = page;
});

const list = document.querySelector('.listtext');
list.addEventListener('click', function () {
  let page = '../VER-2/list-none.html';
  location.href = page;
});

const contents = document.querySelector('.contentstext');
contents.addEventListener('click', function () {
  let page = '../VER-2/contents.html';
  location.href = page;
});

const setting = document.querySelector('.settingtext');
setting.addEventListener('click', function () {
  let page = '../VER-2/setting.html';
  location.href = page;
});

const priceBtn = document.querySelector('.pricebtn');
priceBtn.addEventListener('click', function () {
  let page = '../VER-2/price.html';
  location.href = page;
});

const logout = document.querySelector('.logout');
logout.addEventListener('click', function () {
  let page = '../index.html';
  location.href = page;
});

const btn1 = document.querySelector('.pro');
btn1.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/portfolio/html/portfolio-7.html';
  location.href = page;
});