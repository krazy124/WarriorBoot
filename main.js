let large = 0.5;
let view = document.getElementById("view");

let viewWidth = view.offsetWidth;
let viewHeight = view.offsetHeight;
if(viewWidth<576){view.innerHTML= "xs";}
if(viewWidth>=576 && viewWidth<768){view.innerHTML= "sm";}
if(viewWidth>=768 && viewWidth<992){view.innerHTML= "md";}
if(viewWidth>=992 && viewWidth<1200){view.innerHTML= "lg";}
if(viewWidth>=1200 && viewWidth<1400){view.innerHTML= "xl";}
if(viewWidth>=1400){view.innerHTML= "xxl";}
