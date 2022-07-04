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
