let large = 0.5;
let view = document.getElementById("view");
let viewWidth = view.offsetWidth;
let viewHeight = view.offsetHeight;
view.innerHTML = viewWidth;

let cat= 1;

let breakPointArray= [0.7,0.5,0.488,0.378,0.3125,0.2679];
let arrayCurrent = 0;


document.getElementById("bigBtn").addEventListener("click",viewBigger);
document.getElementById("smallBtn").addEventListener("click",viewSmaller);
function viewBigger(){
  arrayCurrent = arrayCurrent + 1;
  document.querySelector("meta[name=viewport]").setAttribute('content',`width=device-width, initial-scale=${breakPointArray[arrayCurrent]}, maximum-scale=1.0, user-scalable=0`);
  view.innerHTML = view.offsetWidth;
}

function viewSmaller(){
  cat = cat+0.05;
  document.querySelector("meta[name=viewport]").setAttribute('content',`width=device-width, initial-scale=${cat}, maximum-scale=1.0, user-scalable=0`);
  view.innerHTML = view.offsetWidth;
}

/*
if (viewWidth < 576) {
  view.innerHTML = "less than 576";
}
if (viewWidth >= 576 && viewWidth < 768) {
  view.innerHTML = "between 576 and 768";
}
if (viewWidth >= 768 && viewWidth < 992) {
  view.innerHTML = "between 768 and 992";
}
if (viewWidth >= 992 && viewWidth < 1200) {
  view.innerHTML = "between 992 and 1200";
}
if (viewWidth >= 1200 && viewWidth < 1400) {
  view.innerHTML = "between 1200 and 1400";
}
if (viewWidth >= 1400) {
  view.innerHTML = "more than 1400";
}
*/
