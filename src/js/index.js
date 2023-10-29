// open sesame
const opensesame = document.getElementById("opensesame");
const secAbout = document.getElementById("about");
const footer = document.getElementsByTagName("footer")[0];
const msg = document.querySelector("#message .msg");
const unread = document.querySelector("#message .unread");
const read = document.querySelector("#message .msg-read");
const audio = document.querySelector("#hero audio");
const detailMsg = document.querySelector(".detail-msg");
const cardMsgDtl = document.querySelector(".card-msg-detail");
const closeMsg = document.querySelector(".close-msg");
const nextStep = document.querySelector(".nextstep");

opensesame.addEventListener("click", () => {
  audio.play();
  countMin();
  console.info(countMin());
  setTimeout(() => {
    msg.classList.toggle("showUp");
  }, 1000);
});

function openMsg() {
  detailMsg.classList.toggle("popUp");
  setTimeout(() => {
    cardMsgDtl.classList.add("popUp");
  }, 1300);
  // mark animation
  const marker = document.querySelectorAll(".mark");
  const typing = document.querySelectorAll(".card-msg-detail p");

  marker.forEach((element) => {
    setTimeout(() => {
      element.style.background = "yellow";
      element.style.color = "black";
    }, 36000);
    setTimeout(() => {
      element.style.background = "transparent";
      element.style.color = "#e7e3d6";
      closeMsg.style.display = "block";
    }, 45000);
  });
  typing.forEach((element) => {
    // Start Typing
    setTimeout(() => {
      element.classList.add("popUp");
    }, 1500);
    setTimeout(() => {
      element.style.color = "#e7e3d6";
    }, 45000);
  });
  const stab = document.querySelectorAll(".stab");
  stab.forEach((element) => {
    const hidden = document.querySelectorAll(".hidden");
    const closeMsg = document.querySelector(".close-msg");
    setTimeout(() => {
      element.style.textTransform = "uppercase";
      element.style.color = "#3aaec4";
      closeMsg.style.display = "block";
    }, 45000);
    hidden.forEach((hide) => {
      setTimeout(() => {
        hide.style.display = "none";
      }, 45000);
    });
  });
}

msg.addEventListener("click", () => {
  unread.style.display = "none";
  read.innerHTML = "Pesan telah di baca, Terima Kasih Cantik";
  read.style.color = "green";
  nextStep.style.display = "block";
  openMsg();
  secAbout.style.display = "block";
  footer.style.display = "block";
});

closeMsg.addEventListener("click", () => {
  detailMsg.classList.toggle("popUp");
  detailMsg.style.display = "none";

  // Firework Confetti
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
});

nextStep.addEventListener("click", () => {
  runAnimateText();
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration;

  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
});

// gettotal lengt line text
const line = document.querySelectorAll(".head path");
const textLogo = document.querySelector("#about .head #textLogo");
const who = document.querySelector(".who");
function runAnimateText() {
  line.forEach((element) => {
    element.classList.add("showUp");
  });
  setTimeout(() => {
    textLogo.classList.add("showUp");
  }, 2300);
  setTimeout(() => {
    who.classList.add("showUp");
  }, 4000);
}

// Part Kuis
const btnRamal = document.querySelector(".btn-ramal"); //Seleksi Tombol Ramal
const resultRamal = document.querySelector(".hasil-ramal");
const health = document.querySelectorAll(".health-content"); //Seleksi Hasil Sehat
const career = document.querySelectorAll(".career-content"); //Seleksi Hasil Karir
const love = document.querySelectorAll(".love-content"); //Seleksi Hasil Pericintaan
const goVideo = document.getElementById("goVideo");

// destructuring content
const [health1, health2, health3] = health; //desc health content
const [career1, career2, career3] = career; //desc career content
const [love1, love2, love3] = love; //desc love content

function pilihan(health, career, love) {
  // Section Health
  switch (health) {
    case "A":
      health1.style.display = "block";
      break;
    case "a":
      health1.style.display = "block";
      break;
    case "B":
      health2.style.display = "block";
      break;
    case "b":
      health2.style.display = "block";
      break;
    case "C":
      health3.style.display = "block";
      break;
    case "c":
      health3.style.display = "block";
      break;

    default:
      break;
  }

  // Section Career
  switch (career) {
    case "A":
      career1.style.display = "block";
      break;
    case "a":
      career1.style.display = "block";
      break;
    case "B":
      career2.style.display = "block";
      break;
    case "b":
      career2.style.display = "block";
      break;
    case "C":
      career3.style.display = "block";
      break;
    case "c":
      career3.style.display = "block";
      break;

    default:
      break;
  }

  // Section Love
  switch (love) {
    case "A":
      love1.style.display = "block";
      break;
    case "a":
      love1.style.display = "block";
      break;
    case "B":
      love2.style.display = "block";
      break;
    case "b":
      love2.style.display = "block";
      break;
    case "C":
      love3.style.display = "block";
      break;
    case "c":
      love3.style.display = "block";
      break;

    default:
      break;
  }
}

let ask1;
let ask2;
let ask3;

// Tampilan Hasil Ramal
btnRamal.addEventListener("click", () => {
  ask1 = prompt(
    "Jika harus memilih, ingin seperti apa kamu 5/10 tahun ke depan ? \nA. Menjadi CEO \nB. Presiden \nC. Traveller \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  ask2 = prompt(
    "Ruangan mana yang jadi tempat favoritmu di rumah ? \nA. Kamar Tidur \nB. Dapur \nC. Ruang Tamu \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  ask3 = prompt(
    "Kamu ingin orang seperti apa untuk menjadi pasangan ? \nA. Pintar \nB. Good Looking  \nC. Kaya \n\n*) Pilih A, B, atau C dengan huruf kapital "
  );
  resultRamal.style.height = "300px";
  btnRamal.style.display = "none";
  goVideo.style.display = "block";
  pilihan(ask1, ask2, ask3);
});

//  Waiting Finish for Song
const waitingMsg = document.querySelector(".loadMsg");
const imgCompile = document.querySelector(".compile");
let waitingCount = document.querySelector(".waiting");

function countMin() {
  let countdownMin = 253;
  const myInterval = setInterval(() => {
    console.info(countdownMin--);
    waitingCount.innerHTML = Number(countdownMin);
    if (countdownMin === 0) {
      clearInterval(myInterval);
      waitingMsg.innerHTML = "Klik Gambar";
      waitingCount.style.display = "none";
      imgCompile.style.display = "block";
    }
  }, 1000);
}
