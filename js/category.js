const btn = document.querySelector('.img-2');
btn.addEventListener('click', function () {
  let page = '../html/movie-category.html';
  location.href = page;
});
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function () {
  let page = '../html/search-category.html';
  location.href = page;
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function () {
  let page = '../html/setting.html';
  location.href = page;
});

window.onload = function () {

  function onClick() {
    document.getElementById('modal').style.display = 'block';
  }

  function offClick() {
    document.getElementById('modal').style.display = 'none';
  }

  document.getElementById('modal_btn').addEventListener('click', onClick);

  document.getElementById('modal_close').addEventListener('click', offClick);

};