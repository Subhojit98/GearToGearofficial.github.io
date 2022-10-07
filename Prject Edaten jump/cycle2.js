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

// sooth-scrolling
const homeSection = document.querySelector('.home-section__thunder')
const FeaturesSection = document.querySelector('.thunder__featers-section')
const  ProductSection = document.querySelector('.thunder__product-senction')
const footerSection = document.querySelector('.thunder__footer-section')

document.querySelector('.home-link').addEventListener('click' , ()=>{
  homeSection.scrollIntoView({behavior:"smooth"})
})

document.querySelector('.Features-link').addEventListener('click' , ()=>{
  FeaturesSection.scrollIntoView({behavior:"smooth"})
})
document.querySelector('.Product-link').addEventListener('click' , ()=>{
  ProductSection.scrollIntoView({behavior:"smooth"})
})
document.querySelector('.about-link').addEventListener('click' , ()=>{
  footerSection.scrollIntoView({behavior:"smooth"})
})
