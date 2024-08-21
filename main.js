let large = 0.5;
let view = document.getElementById("view");

let viewWidth = view.offsetWidth;
let viewHeight = view.offsetHeight;

view.innerHTML = view.offsetWidth;

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
