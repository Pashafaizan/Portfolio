// const nslide = ()=>{
    console.log("faizan pasha");
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');


burger.addEventListener('click', ()=>{
    console.log("thisis a burger");
    nav.classList.toggle("nav-active");
    burger.classList.toggle('toggle');
})
// }
// nslide();