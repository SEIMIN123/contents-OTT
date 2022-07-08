const boxTwo = document.querySelector('.box2');
const prev1 = document.getElementById('left-1');
const next1 = document.getElementById('right-1');

let makepic2 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png"];
let data = 0;
for (let i = 0; i < makepic2.length; i++) {

  const makeDivOne = document.createElement("div");
  makeDivOne.classList.add('lay');
  const img = document.createElement('img');
  boxTwo.appendChild(makeDivOne);

  img.setAttribute('src', `../VER-2-pic/makepic2/lay-${i+1}.png`);
  makeDivOne.appendChild(img);

  makeDivOne.style.width = "12vw";
  makeDivOne.style.height = "17vw";
  makeDivOne.style.borderRadius = "10px";
  makeDivOne.style.margin = "1vw";
  makeDivOne.style.marginBottom = "-1.5vw";
  makeDivOne.style.display = "fixed";
  let data2 = true;
  prev1.addEventListener('click', () => {

    for (let i = 0; i < makepic1.length; i++) {

      if (data2 === true) {
        data2 = false;
        makeDivOne.style.transform = "translateX(0vw)";
        makeDivOne.style.transition = "1s";
        console.log(prev);
      } else {
        data2 = true;
        makeDivOne.style.transform = "translateX(0vw)";
        makeDivOne.style.transition = "1s";
      }
    }
  });
  let data3 = true;
  next1.addEventListener('click', () => {

    for (let i = 0; i < makepic1.length; i++) {

      if (data3 === true) {

        data3 = false;

        makeDivOne.style.transform = "translateX(-128vw)";
        makeDivOne.style.transition = "1s";
      } else {

        data3 = true;
        makeDivOne.style.transform = "translateX(0vw)";
        makeDivOne.style.transition = "1s";
      }
    }
  });
}
//---------------------------------------------------------

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


//------------------------------------------------------------


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