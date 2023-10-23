window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    
    // Show the scroll-to-top button when the user scrolls down 100 pixels
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  document.getElementById('scrollButton').addEventListener('click', function() {
    // Smoothly scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const header=document.getElementById('header')
const nav_btn=document.querySelector('.menuBtn')
const close_btn=document.querySelector('.close-sideBar')
const closeMenu=document.querySelector('.closeMenu')
const closeMenu1=document.querySelector('.closeMenu1')
const closeMenu2=document.querySelector('.closeMenu2')
const closeMenu3=document.querySelector('.closeMenu3')
const closeMenu4=document.querySelector('.closeMenu4')
const closeMenu5=document.querySelector('.closeMenu5')
const closeMenu6=document.querySelector('.closeMenu6')
function toggaleNavBar(){
    // console.log(nav_btn);
    // console.log('hello');
    header.classList.toggle('active')
}
close_btn.addEventListener('click',()=> toggaleNavBar())
nav_btn.addEventListener('click',()=> toggaleNavBar())
closeMenu.addEventListener('click',()=> toggaleNavBar())
closeMenu1.addEventListener('click',()=> toggaleNavBar())
closeMenu2.addEventListener('click',()=> toggaleNavBar())
closeMenu3.addEventListener('click',()=> toggaleNavBar())
closeMenu4.addEventListener('click',()=> toggaleNavBar())
closeMenu5.addEventListener('click',()=> toggaleNavBar())
closeMenu6.addEventListener('click',()=> toggaleNavBar())


$('.find-products-carousel').owlCarousel({
    loop:true,
   dots:true,
   navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        318:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})