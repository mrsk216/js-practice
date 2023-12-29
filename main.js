//Javascript
var header = document.querySelector('#header'); //ami header id tak dhore rakhlam ekta variable a
var homeNav = document.querySelector('.home'); //ami header id tak dhore rakhlam ekta variable a
var homeBorder = document.querySelector('.home-border');
var aboutBorder = document.querySelector('.about-border');
var serviceBorder = document.querySelector('.service-border');
var contactBorder = document.querySelector('.contact-border');
var quaLi = document.querySelector('#qualification');
var desCri = document.querySelector('#description');
var details = document.querySelector('.qualification');
var text = document.querySelector('.description');



//Home Page
function home() {
    window.scroll(0,0);
    //aboutBorder.classList.remove('borders');
    //serviceBorder.classList.remove('borders');
    //contactBorder.classList.remove('borders');
}

//About Page
function about() {
    window.scroll(0,580);
    //aboutBorder.classList.add('borders');
    //serviceBorder.classList.remove('borders');
   // contactBorder.classList.remove('borders');
}

//Service Page
function service() {
    window.scroll(0,1190);
    //serviceBorder.classList.add('borders');
    //aboutBorder.classList.remove('borders');
    //contactBorder.classList.remove('borders');
}

//Contact Page
function contact() {
    window.scroll(0,1651);
    //aboutBorder.classList.remove('borders');
    //serviceBorder.classList.remove('borders');
    //contactBorder.classList.add('borders');
}

window.addEventListener('scroll', function () {
    //Nav fixed
    if (this.scrollY >= 575) {
        header.classList.add('active');
        homeNav.classList.remove('d-none');
    } else {
        header.classList.remove('active');
        homeNav.classList.add('d-none');
    }
})
window.addEventListener('scroll', function () {
    if (this.scrollY <= 575) {
        aboutBorder.classList.remove('borders');
    } else if(this.scrollY >=1180){
        aboutBorder.classList.remove('borders');
    }else{
       aboutBorder.classList.add('borders');
    }
});
window.addEventListener('scroll', function () {
    if (this.scrollY < 1181) {
        serviceBorder.classList.remove('borders');
    } else if(this.scrollY >=1640){
        serviceBorder.classList.remove('borders');
    }else{
       serviceBorder.classList.add('borders');
    }
});
window.addEventListener('scroll', function () {
    if (this.scrollY < 1642) {
        contactBorder.classList.remove('borders');
    } else {
       contactBorder.classList.add('borders');
    }
});

//Qualification button
function qualification(){
    quaLi.classList.add('d-none');
    desCri.classList.remove('d-none');
    details.classList.remove('d-none');
    text.classList.add('d-none');
};
//Description button
function description(){
    quaLi.classList.remove('d-none');
    desCri.classList.add('d-none');
    details.classList.add('d-none');
    text.classList.remove('d-none');
    
};