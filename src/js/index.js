/*? no js js needed from me */

const pathSvg = document.querySelectorAll("svg path");
pathSvg.forEach((element) => {
  console.info(element.getTotalLength());
});
