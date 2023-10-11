/*? no js js needed from me */

// slider
const messagePrivate = document.querySelectorAll("#message .row figcaption");
let count = 0;

const size = messagePrivate[0].clientWidth;

nextBtn.addEventListener("click", () => {
  count++;
  messagePrivate[0].style.transform = "translateX(" + -size * count + "px)";
  messagePrivate[0].style.width = 0;
  messagePrivate[1].style.transform = "translateX(" + -size * count + "px)";
  console.info(messagePrivate[0], messagePrivate[1]);
});
