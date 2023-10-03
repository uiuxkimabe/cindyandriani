const btnSub = document.getElementById("confetti");
const info = document.querySelector(".info");

simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 10, // required
  day: 4, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 53, //  Default is 0 [0-59] integer
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
    }, 1000);
    //  return show;
  },
});
