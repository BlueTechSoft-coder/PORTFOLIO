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
ScrollReveal({
    //reset: true,
    distance: '200px',
    duration: 1500,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form, .portfolio-box ', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .about-content', { origin: 'left' });
ScrollReveal().reveal('.contact h4, .skill', { origin: 'right' });
