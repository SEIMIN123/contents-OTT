  const boxTwo = document.querySelector('.box2');
  const boxThree = document.querySelector('.box3');
  const boxFour = document.querySelector('.box4');
  const layConOne = document.querySelector('.lay-con');
  const layConTwo = document.querySelector('.lay-con-1');
  const layConThree = document.querySelector('.lay-con-2');
  const prev1 = document.getElementById('left-1');
  const next1 = document.getElementById('right-1');
  const prev2 = document.getElementById('left-2');
  const next2 = document.getElementById('right-2');
  const prev3 = document.getElementById('left-3');
  const next3 = document.getElementById('right-3');

  console.log(boxTwo);
  console.log(boxThree);
  console.log(boxFour);
  console.log(layConOne);
  console.log(layConTwo);
  console.log(layConThree);



  let makepic1 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png", "lay-7.png",
    "lay-8.png", "lay-9.png", "lay-10.png", "lay-11.png", "lay-12.png", "lay-13.png", "lay-14.png", "lay-15.png"
  ];

  let makepic2 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png", "lay-7.png",
    "lay-8.png", "lay-9.png", "lay-10.png", "lay-11.png", "lay-12.png", "lay-13.png", "lay-14.png", "lay-15.png"
  ];

  let makepic3 = ["lay-1.png", "lay-2.png", "lay-3.png", "lay-4.png", "lay-5.png", "lay-6.png", "lay-7.png",
    "lay-8.png", "lay-9.png", "lay-10.png", "lay-11.png", "lay-12.png", "lay-13.png", "lay-14.png", "lay-15.png"
  ];

  //-----------------------------------------------------------------

  let data = 0;

  for (let i = 0; i < makepic1.length; i++) {

    const makeDivOne = document.createElement('div');
    makeDivOne.classList.add("lay");
    const img = document.createElement('img');

    layConOne.appendChild(makeDivOne);
    boxTwo.appendChild(layConOne);

    img.setAttribute('src', `../VER-2-pic/makepic1/lay-${i+1}.png`);
    makeDivOne.appendChild(img);

    makeDivOne.style.width = "14vw";
    makeDivOne.style.height = "18.5vw";
    makeDivOne.style.borderRadius = "10px";
    makeDivOne.style.margin = "0.3vw";
    makeDivOne.style.marginBottom = "-1.5vw";
    
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

  //------------------------------------------------------------------
  for (let i = 0; i < makepic2.length; i++) {

    const makeDivTwo = document.createElement('div');
    makeDivTwo.classList.add("lay");
    const img = document.createElement('img');

    layConTwo.appendChild(makeDivTwo);
    boxThree.appendChild(layConTwo);

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

  //-------------------------------------------------------------------

  for (let i = 0; i < makepic3.length; i++) {

    const makeDivThree = document.createElement('div');
    makeDivThree.classList.add("lay");
    const img = document.createElement('img');

    layConThree.appendChild(makeDivThree);
    boxFour.appendChild(layConThree);

    img.setAttribute('src', `../VER-2-pic/makepic3/lay-${i+1}.png`);
    makeDivThree.appendChild(img);

    makeDivThree.style.width = "14vw";
    makeDivThree.style.height = "18.5vw";
    makeDivThree.style.borderRadius = "10px";
    makeDivThree.style.margin = "0.3vw";
    makeDivThree.style.marginBottom = "-1.5vw";
    makeDivThree.style.display = "fixed";


    let data6 = true;
    prev3.addEventListener('click', () => {

      for (let i = 0; i < makepic2.length; i++) {
        if (data6 === true) {
          data6 = false;
          makeDivThree.style.transform = "translateX(0vw)";
          makeDivThree.style.transition = "1s";
          console.log(prev);
        } else {
          data6 = true;
          makeDivThree.style.transform = "translateX(0vw)";
          makeDivThree.style.transition = "1s";
        }
      }
    });

    let data7 = true;
    next3.addEventListener('click', () => {

      for (let i = 0; i < makepic2.length; i++) {

        if (data7 === true) {

          data7 = false;

          makeDivThree.style.transform = "translateX(-128vw)";
          makeDivThree.style.transition = "1s";

        } else {

          data7 = true;
          makeDivThree.style.transform = "translateX(0vw)";
          makeDivThree.style.transition = "1s";
        }
      }
    });
  }
  //----------------------------------------------------------

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

  //----------------------------------------------------

  const home = document.querySelector('.hometext');
home.addEventListener('click', function(){
  let page = '../VER-2/home.html';
  location.href = page;
});

const list = document.querySelector('.listtext');
list.addEventListener('click', function(){
  let page = '../VER-2/list-none.html';
  location.href = page;
});

const contents= document.querySelector('.contentstext');
contents.addEventListener('click', function(){
  let page = '../VER-2/contents.html';
  location.href = page;
});

const setting = document.querySelector('.settingtext');
setting.addEventListener('click', function(){
  let page = '../VER-2/setting.html';
  location.href = page;
});

const movie = document.querySelector('.box1');
movie.addEventListener('click', function(){
  let page = '../VER-2/movie.html';
  location.href = page;
});




