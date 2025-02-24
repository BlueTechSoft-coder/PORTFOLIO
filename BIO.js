//WHATSAPP ICON & TEXT
const text = document.getElementById('text');
const iconn = document.getElementById('iconn');
iconn.onclick = function () {
    if (text.innerText === ""){
        text.innerText = "Hi, how may I help You?";
    } else {
        text.innerText = "";
    }
}
text.onclick = function () {
    window.location.href = "https://wa.me/+254708909399?text=Hello%20Andrew!";
}

/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* scroll events */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*removing the navbar after a click on the link*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



// Initialize ScrollReveal with options  
ScrollReveal({  
    //reset: true, // Uncomment if you want elements to animate again when scrolled back into view  
    distance: '50px', // Default distance  
    duration: 1000,  
    delay: 100 

}); 
    //Reveal elements with adjusted settings  
    ScrollReveal().reveal('.home-content,', { origin: 'top' });  
    //ScrollReveal().reveal('.home-img, .about-content, .skill, .services-container, .portfolio-container, .contact', { origin: 'bottom' });  
    //ScrollReveal().reveal('.about-imgg', { origin: 'leftt' });  
    //ScrollReveal().reveal('.skilll', { origin: 'rightt' });  


//CERTIFICATION SECTION

//DISPLAY BUTTON EVENT
/*
const header = document.getElementById("headd");
const certfication = document.getElementById("certfication");
const show = document.getElementById("show");

show.onclick = function() {
    if (certfication.style.display === "none") {
        certfication.style.display = "block";
        show.textContent = "Hide Certifications";
        show.style.marginTop = "10vh";
        header.style.height = "20px";
    } else {
        certfication.style.display = "none";
        show.textContent = "See Certifications";
        show.style.marginTop = "40vh";
        header.style.height = "auto";
    }
}
*/



/*
let slideIndex = 0;  
const slides = document.querySelectorAll(".slides");  
const totalSlides = slides.length;  

function updateSlidePosition() {  
    const slideWidth = document.querySelector(".body-container").offsetWidth; // Get container width  
    const offset = slideIndex * slideWidth; // Calculate offset  
    document.querySelector(".slideshow-container").style.transform = `translateX(-${offset}px)`;  
} 
function showSlides(n) {  
    slideIndex += n;  
    if (slideIndex < 0) {  
        slideIndex = totalSlides - 1;  
    } else if (slideIndex >= totalSlides) {  
        slideIndex = 0;  
    }  
    updateSlidePosition();  
}  
function plusSlides(n) {  
    showSlides(n);  
}  
*/
