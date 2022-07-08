const boxOne = document.querySelector('.box1');
const layConOne = document.querySelector('.lay-con');
const boxTwo = document.querySelector('.box2');
const layConTwo = document.querySelector('.lay-con-1');
const prev1 = document.getElementById('left-1');
const next1 = document.getElementById('right-1');
const prev2 = document.getElementById('left-2');
const next2 = document.getElementById('right-2');

let makepic1 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png", "lay-7.png",
  "lay-8.png", "lay-9.png", "lay-10.png", "lay-11.png", "lay-12.png", "lay-13.png", "lay-14.png", "lay-15.png"
];


let makepic2 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png", "lay-7.png",
  "lay-8.png", "lay-9.png", "lay-10.png", "lay-11.png", "lay-12.png", "lay-13.png", "lay-14.png", "lay-15.png"
];

let data = 0;

for (let i = 0; i < makepic1.length; i++) {

  const makeDivOne = document.createElement('div');
  makeDivOne.classList.add('lay');
  const img = document.createElement('img');

  layConOne.appendChild(makeDivOne);
  boxOne.appendChild(layConOne);

  img.setAttribute('src', `../VER-2-pic/makepic1/lay-${i+1}.png`);
  makeDivOne.appendChild(img);

  makeDivOne.style.width = "14vw";
  makeDivOne.style.height = "18.5vw";
  makeDivOne.style.borderRadius = "10px";
  makeDivOne.style.margin = "0.3vw";
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

for (let i = 0; i < makepic2.length; i++) {

  const makeDivTwo = document.createElement('div');
  makeDivTwo.classList.add('lay');
  const img = document.createElement('img');

  layConTwo.appendChild(makeDivTwo);
  boxTwo.appendChild(layConTwo);

  img.setAttribute('src', `../VER-2-pic/makepic2/lay-${i+1}.png`);
  makeDivTwo.appendChild(img);

  makeDivTwo.style.width = "14vw";
  makeDivTwo.style.height = "18.5vw";
  makeDivTwo.style.borderRadius = "10px";
  makeDivTwo.style.margin = "0.3vw";
  makeDivTwo.style.marginBottom = "-1.5vw";
  makeDivTwo.style.display = "fixed";

  let data4 = true;
  prev2.addEventListener('click', () => {

    for (let i = 0; i < makepic2.length; i++) {

      if (data4 === true) {
        data4 = false;
        makeDivTwo.style.transform = "translateX(0vw)";
        makeDivTwo.style.transition = "1s";
        console.log(prev);
      } else {
        data4 = true;
        makeDivTwo.style.transform = "translateX(0vw)";
        makeDivTwo.style.transition = "1s";
      }
    }
  });
  let data5 = true;
  next2.addEventListener('click', () => {

    for (let i = 0; i < makepic2.length; i++) {

      if (data5 === true) {

        data5 = false;

        makeDivTwo.style.transform = "translateX(-128vw)";
        makeDivTwo.style.transition = "1s";
      } else {

        data5 = true;
        makeDivTwo.style.transform = "translateX(0vw)";
        makeDivTwo.style.transition = "1s";
      }
    }
  });
}

//----------------------------------------------------

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