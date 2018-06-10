
var link = document.querySelector('.feedback-form-btn'),
popup = document.querySelector('.feedback-panel'),
close = document.querySelector('.feedback-panel__close'),
overlay = document.querySelector('.overlay'),

form = popup.querySelector('form'),
username = popup.querySelector('[name=feedback-name]'),
email = popup.querySelector('[name=feedback-email]'),
text = popup.querySelector('[name=feedback-text]'),
formfocus = popup.querySelector('.feedback-name'),
storage = localStorage.getItem('email');

link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('feedback-panel-show');
  if (storage) {
    email.value = storage;
    text.focus();
  } else {
    email.focus();
  }
  overlay.classList.add('overlay-show');
  formfocus.focus();
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('feedback-panel-show');
  overlay.classList.remove('overlay-show');
  popup.classList.remove('feedback-panel-error');
});

form.addEventListener('submit', function(event){
  if (!username.value || !email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove('feedback-panel-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('feedback-panel-error');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
  }
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('feedback-panel-show')) {
      popup.classList.remove('feedback-panel-show');
      overlay.classList.remove('overlay-show');
      popup.classList.remove('feedback-panel-error');
    }
  }
});

overlay.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('feedback-panel-show');
  overlay.classList.remove('overlay-show');
});
