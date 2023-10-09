const btnSub = document.getElementById("confetti");
const info = document.querySelector(".info");
const msg = document.getElementById("message");

simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 10, // required
  day: 10, // required
  hours: 1, // Default is 0 [0-23] integer
  minutes: 16, //  Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
  onEnd: function () {
    btnSub.style.visibility = "visible";
    info.style.visibility = "hidden";
    setTimeout(() => {
      info.style.display = "none";
      msg.style.height = "100vh";
    }, 1000);
    //  return show;
  },
});

// ANIMATE FILE SVG
const pathSvg = document.querySelectorAll("svg path");
const contentList = document.querySelectorAll("#message figcaption ul li");
const nextBtn = document.getElementById("nextBtn");

const sectionHero = document.getElementById("hero");
btnSub.addEventListener("click", () => {
  setTimeout(() => {
    contentList.forEach((list) => {
      list.classList.add("fadeUp");
    });
  }, 1000);
  setTimeout(() => {
    pathSvg.forEach((element) => {
      element.classList.add("animate");
      fillerTrip();
    });
  }, 3000);
});

// FILL WARNA BERUBAH SETELAH ANIMASI GARIS SELESAI
function fillerTrip() {
  setTimeout(() => {
    pathSvg.forEach((element) => {
      element.style.fill = "black";
      element.style.transition = "transform .5s ease-in-out";
    });
  }, 7000);
  setTimeout(() => {
    nextBtn.classList.add("showUp");
  }, 8000);
}
