// navbar Scroll
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});


//Scroll up
document.querySelector('#to-top').addEventListener('click',()=>{

    let TopInterval = setInterval(()=>{
      
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if(ArrowTop.scrollTop > 0){
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
        }
        if(ArrowTop.scrollTop < 1){
            clearInterval(TopInterval)
        }
    },10)
}, false);


function showscroll(){
    let TopButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        TopButton.classList.add('show')
    }else{
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}

// navbar toggle

const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})


const popupOverlay1 = document.getElementById('popupOverlay1');
const popupOverlay2 = document.getElementById('popupOverlay2');
const popupOverlay3 = document.getElementById('popupOverlay3');
const popupOverlay4 = document.getElementById('popupOverlay4');
const popupOverlay5 = document.getElementById('popupOverlay5');

const openBtn1 = document.querySelector('.b11');
const openBtn2 = document.querySelector('.b22');
const openBtn3 = document.querySelector('.b33');
const openBtn4 = document.querySelector('.b44');
const openBtn5 = document.querySelector('.b55');

const closeBtn1 = document.getElementById('closeBtn1');
const closeBtn2 = document.getElementById('closeBtn2');
const closeBtn3 = document.getElementById('closeBtn3');
const closeBtn4 = document.getElementById('closeBtn4');
const closeBtn5 = document.getElementById('closeBtn5');


openBtn1.addEventListener('click', () => {
  popupOverlay1.style.display = 'flex';
});
openBtn2.addEventListener('click', () => {
    popupOverlay2.style.display = 'flex';
});
openBtn3.addEventListener('click', () => {
    popupOverlay3.style.display = 'flex';
});
  openBtn4.addEventListener('click', () => {
      popupOverlay4.style.display = 'flex';
});
  openBtn5.addEventListener('click', () => {
    popupOverlay5.style.display = 'flex';
});


closeBtn1.addEventListener('click', () => {
    popupOverlay1.style.display = 'none';
});
  closeBtn2.addEventListener('click', () => {
    popupOverlay2.style.display = 'none';
});
closeBtn3.addEventListener('click', () => {
    popupOverlay3.style.display = 'none';
});
  closeBtn4.addEventListener('click', () => {
    popupOverlay4.style.display = 'none';
});
closeBtn5.addEventListener('click', () => {
    popupOverlay5.style.display = 'none';
});


function addOutsideClickClose(popupOverlayId, popupBoxClass) {
    const overlay = document.getElementById(popupOverlayId);
    const popupBox = overlay.querySelector(popupBoxClass);
  
    overlay.addEventListener('click', (e) => {
      if (!popupBox.contains(e.target)) {
        overlay.style.display = 'none';
      }
    });
  }
  
  addOutsideClickClose('popupOverlay1', '.popup');
  addOutsideClickClose('popupOverlay2', '.popup');
  addOutsideClickClose('popupOverlay3', '.popup');
  addOutsideClickClose('popupOverlay4', '.popup');
  addOutsideClickClose('popupOverlay5', '.popup');
  