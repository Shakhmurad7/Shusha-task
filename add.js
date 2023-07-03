const menu = document.querySelector('.icon-menu')
const ul = document.querySelector('.header-nav-ul')
const close = document.querySelector('.icon-close')

menu.addEventListener('click' , function(){
    ul.classList.toggle('active')
   
})
close.addEventListener('click' , function(){
    ul.classList.toggle('active') 
    close.classList.toggle('close')
   
})