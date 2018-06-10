var link, popup, close, overlay, form, email, text, formfocus, storage;
link = document.querySelector(".feedback-form-btn");
popup = document.querySelector(".feedback-panel");
close = document.querySelector(".feedback-panel__close");
overlay = document.querySelector(".overlay");
form = popup.querySelector("form");
email = popup.querySelector("[name=feedback-email]");
text = popup.querySelector("[name=feedback-text]");
formfocus = popup.querySelector(".feedback-name");
storage = localStorage.getItem("email");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("feedback-panel-show");
  if (storage) {
    email.value = storage;
    text.focus();
  } else {
    email.focus();
  }
  overlay.classList.add("overlay-show");
  formfocus.focus();
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("feedback-panel-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-panel-show")) {
      popup.classList.remove("feedback-panel-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

overlay.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("feedback-panel-show");
  overlay.classList.remove("overlay-show");
});
