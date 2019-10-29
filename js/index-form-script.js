var link = document.querySelector(".search-details .button-brown");
var popup = document.querySelector(".search-modal");
var form = popup.querySelector(".search-form");
var datein = popup.querySelector(".input-check-in");
var dateout = popup.querySelector(".input-check-out");
var adults = popup.querySelector(".data-adults");
var kids = popup.querySelector(".data-kids");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("open");
  popup.classList.remove("open-error");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!datein.value || !dateout.value || !adults.value || !kids.value) {
    evt.preventDefault();
    popup.classList.remove("open-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("open-error");
  }
});
