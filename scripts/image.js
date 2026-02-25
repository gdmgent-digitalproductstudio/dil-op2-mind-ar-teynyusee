document.addEventListener("DOMContentLoaded", () => {

const target = document.querySelector("#paulTarget");
const paul = document.querySelector("#paul");
const mist = document.querySelector("#mist");

let running=false;
let t=0;
let z=0;

target.addEventListener("targetFound",()=>{
running=true;

mist.setAttribute("animation",{
property:"material.opacity",
to:0.1,
dur:1200
});

animateDepth();
});

target.addEventListener("targetLost",()=>{
running=false;
mist.setAttribute("material","opacity",0);
});

function animateDepth(){
if(!running)return;

t+=0.002;
const targetZ=Math.sin(t)*0.02;
z+=(targetZ-z)*0.04;

paul.setAttribute("position",`0 0.02 ${0.18+z}`);

requestAnimationFrame(animateDepth);
}

});