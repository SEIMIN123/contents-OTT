const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
  let page = '../html/category.html';
  location.href = page;
});

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function(){
  let page = '../html/search-category.html';
  location.href = page;
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function(){
  let page = '../html/setting.html';
  location.href = page;
});