const sideNavabarIcon = document.querySelector("#nav-animation");
//  nav scroll code
const body = document.body;
let lastScroll= 0;
window.addEventListener('scroll',()=>{
  const recentScroll= window.pageYOffset
  if(recentScroll <= 0){
    body.classList.remove('scroll-up')
  }
  if(recentScroll > lastScroll && !body.classList.contains('scroll-down')){
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }
  if(recentScroll < lastScroll && body.classList.contains('scroll-down')){
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }
  lastScroll =recentScroll;
})
    // preloder gif code
const preloder = document.getElementById('loading-banner');
window.addEventListener('load',()=>{
  preloder.style.display = 'none'
})


// sooth-scrolling
const homeSection = document.querySelector('.home-section')
const NewReleaseSection = document.querySelector('.New-Release-section')
const  gallarySection = document.querySelector('.gallary-section')
const footerSection = document.querySelector('.footer-section')
const fixedIngSection = document.querySelector('.fixed-ing-section')
const mobile = document.querySelector('.New-Release-section')

document.querySelector('.home-link').addEventListener('click' , ()=>{
  homeSection.scrollIntoView({behavior:"smooth"})
})

document.querySelector('.new-release-link').addEventListener('click' , ()=>{
  NewReleaseSection.scrollIntoView({behavior:"smooth"})
})
document.querySelector('.gallery-link').addEventListener('click' , ()=>{
  gallarySection.scrollIntoView({behavior:"smooth"})
})
document.querySelector('.about-link').addEventListener('click' , ()=>{
  footerSection.scrollIntoView({behavior:"smooth"})
})
document.querySelector('.explore-now-btn').addEventListener('click' , ()=>{
  fixedIngSection.scrollIntoView({behavior:"smooth"})
})
