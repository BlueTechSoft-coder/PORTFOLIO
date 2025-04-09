//WHATSAPP ICON & TEXT
const text = document.getElementById('text');
const iconn = document.getElementById('iconn');
iconn.onclick = function () {
    if (text.innerText === ""){
        text.innerText = "Contact me on WhatsApp";
    } else {
        text.innerText = "";
    }
}
text.onclick = function () {
    window.location.href = "https://wa.me/+254708909399?text=Hello%20Andrew%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.";
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


// FAQs SECTION

function toggleFAQ(faq) {  
    let answer = faq.nextElementSibling;  
    if (answer.style.display === "block") {  
        answer.style.display = "none";  
    } else {  
        answer.style.display = "block"; 
    }  
} 



//SCROLL REVEAL 

ScrollReveal({
    //reset: true,
    distance: '200px',
    duration: 1000,
    delay: 100
});
ScrollReveal().reveal(' .headingg ', { origin: 'top' });
ScrollReveal().reveal('.service-box, .plan, #loved, #nice, #faq, form', { origin: 'bottom' });
ScrollReveal().reveal('#menucolumnn, .royal, .pool, .welcome, .shop, .offerrr, .social', { origin: 'left' });
ScrollReveal().reveal('#junkk, .shoop, .delivery', { origin: 'right' });
