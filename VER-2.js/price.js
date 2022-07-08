const sideOpen = document.querySelector('.sideopen');
const ham = document.querySelector('.ham');

let data1 = true;

ham.addEventListener('click', () => {

  if (data1 === true) {
    data1 = false;

    sideOpen.style.width = "18vw";
    sideOpen.style.height = "100%";
    sideOpen.style.display = "block";
    sideOpen.style.transition = "0.5s";
    sideOpen.style.trasnform = "translateX(3vw)";
    sideOpen.style.backgroundColor = "#141414";

  } else {
    data1 = true;

    sideOpen.style.width = "5vw";
    sideOpen.style.backgroundColor = "#303030";
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