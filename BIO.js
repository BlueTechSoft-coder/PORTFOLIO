//FUNCTON TO OPEN WHATSAAP IN ALL DEVICES

function openWhatsApp() {  
    const message = "Hello, I would like to know more!";  
    const phone = "+254708909399"; // The phone number to send the message to  
    const encodedMessage = encodeURIComponent(message);  
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);  
    
    if (isMobile) {  
        // Open WhatsApp on mobile devices  
        window.location.href = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;  
    } else {  
        // Open WhatsApp Web on desktop  
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');  
    }  
}  


/* DOWNLODING THE CV */
  function downloadFile(fileUrl, fileName) {  
    const link = document.createElement('a');  
    link.href = fileUrl;  
    link.download = fileName;  
    document.body.appendChild(link);  
    link.click();  
    document.body.removeChild(link);
};

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
    delay: 100,  
});  

// Function to adjust ScrollReveal settings based on window width  
function adjustScrollRevealForResponsive() {  
    const width = window.innerWidth;  

    // Adjust distance based on device size  
    let distance;  
    if (width < 768) { // For mobile devices  
        distance = '20px';  
    } else if (width < 992) { // For tablets  
        distance = '40px';  
    } else { // For laptops/desktops  
        distance = '100px';  
    }  

    // Reveal elements with adjusted settings  
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: distance });  
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom', distance: distance });  
    ScrollReveal().reveal('.about-img, .about-content', { origin: 'left', distance: distance });  
    ScrollReveal().reveal('.contact h4, .skill', { origin: 'right', distance: distance });  
}  

// Initial call  
adjustScrollRevealForResponsive();  

// Event listener to adjust on window resize  
window.addEventListener('resize', adjustScrollRevealForResponsive);
