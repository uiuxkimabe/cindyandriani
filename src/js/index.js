// open sesame
const opensesame = document.getElementById("opensesame");
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
});

closeMsg.addEventListener("click", () => {
  detailMsg.classList.toggle("popUp");
  detailMsg.style.display = "none";
  console.info("oke");
});

nextStep.addEventListener("click", () => {
  runAnimateText();
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
    case "B":
      health2.style.display = "block";
      break;
    case "C":
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
    case "B":
      career2.style.display = "block";
      break;
    case "C":
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
    case "B":
      love2.style.display = "block";
      break;
    case "C":
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
  pilihan(ask1, ask2, ask3);
});
