function toggleMenu() {
  let toggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
};

let themeSwitch = document.getElementById('themeSwitch');
let body = document.querySelector('body');
themeSwitch.onclick = function () {
  themeSwitch.classList.toggle('active');
  body.classList.toggle('dark');
}

// image slide
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);