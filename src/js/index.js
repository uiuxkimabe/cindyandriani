// open sesame
const opensesame = document.getElementById("opensesame");
const msg = document.querySelector("#message .msg");
const unread = document.querySelector("#message .unread");
const read = document.querySelector("#message .msg-read");
const audio = document.querySelector("#hero audio");
const detailMsg = document.querySelector(".detail-msg");
const cardMsgDtl = document.querySelector(".card-msg-detail");
const closeMsg = document.querySelector(".close-msg");

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
  openMsg();
});

closeMsg.addEventListener("click", () => {
  detailMsg.classList.toggle("popUp");
  console.info("oke");
});

// gettotal lengt line text
const line = document.querySelectorAll(".head path");
line.forEach(element => {
  console.info(element.getTotalLength());
});
