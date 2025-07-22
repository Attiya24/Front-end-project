let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

const header = document.querySelector('header');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 7){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}