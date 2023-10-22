// open sesame
const opensesame = document.getElementById("opensesame");
const msg = document.querySelector("#message .msg");
const unread = document.querySelector("#message .unread");
const read = document.querySelector("#message .msg-read");
const audio = document.querySelector("#hero audio");
opensesame.addEventListener("click", () => {
  audio.play();
  setTimeout(() => {
    msg.classList.toggle("showUp");
  }, 1000);
});

msg.addEventListener("click", () => {
  unread.style.display = "none";
  read.innerHTML = "Pesan telah di baca, Terima Kasih Cantik";
  read.style.color = "green";
});
