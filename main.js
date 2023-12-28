//Javascript
var header = document.querySelector('#header'); //ami header id tak dhore rakhlam ekta variable a
var homeNav = document.querySelector('.home'); //ami header id tak dhore rakhlam ekta variable a

//Home Page
function home() {
    window.scroll(0,0);
}

//About Page
function about() {
    window.scroll(0,675);
}

//Service Page

//Contact Page


window.addEventListener('scroll', function () {
    console.log(this.scrollY);
    //Nav fixed
    if (this.scrollY >= 650) {
        header.classList.add('active');
        homeNav.classList.remove('d-none');
    } else {
        header.classList.remove('active');
        homeNav.classList.add('d-none');
    }
})


//Qualification button

//Description button