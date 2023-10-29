// Video Player
const player = document.getElementById("videoplayer");
player.addEventListener("playing", () => {
  if (player.requestFullscreen) player.requestFullscreen();
  else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
  else if (player.msRequestFullScreen) player.msRequestFullScreen();
});
