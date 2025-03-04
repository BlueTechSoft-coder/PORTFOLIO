//LOADING PAGE
window.onload = function() {  
    // Hide the loading screen after 3 seconds  
    setTimeout(() => {  
        document.getElementById('loading').style.display = 'none';  
        document.getElementById('content').style.display = 'block';  
    }, 3000); // Change the duration as needed (3000 ms = 3 seconds)  
};


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

//CLIENTS
document.addEventListener('DOMContentLoaded', function () {  
    const statsSection = document.getElementById('stats');  
    const clients = document.getElementById('clients');  
    const hours = document.getElementById('hours');  
    const projects = document.getElementById('projects');  
    const awards = document.getElementById('awards'); 
    
    let hasAnimated = false;  

    function animateCounters() {  
        if (!hasAnimated) {  
            hasAnimated = true;  

            const clientCount = 13;   // Set your desired number of clients  
            const hourCount = 1460;      // Set your desired hours worked  
            const projectCount = 20;    // Set your desired number of projects  
            const awardCount = 15;

            let clientCounter = 0;  
            let hourCounter = 0;  
            let projectCounter = 0;  
            let awardCounter = 0;

            const clientInterval = setInterval(() => {  
                clientCounter++;  
                clients.textContent = clientCounter;  
                if (clientCounter === clientCount) clearInterval(clientInterval);  
            }, 100); // Speed of counting  

            const hourInterval = setInterval(() => {  
                hourCounter++;  
                hours.textContent = hourCounter;  
                if (hourCounter === hourCount) clearInterval(hourInterval);  
            }, 0.005); // Speed of counting  

            const projectInterval = setInterval(() => {  
                projectCounter++;  
                projects.textContent = projectCounter;  
                if (projectCounter === projectCount) clearInterval(projectInterval);  
            }, 100); // Speed of counting  

            const awardInterval = setInterval(() => {  
                awardCounter++;  
                awards.textContent = awardCounter;  
                if (awardCounter === awardCount) clearInterval(awardInterval);  
            }, 100); // Speed of counting  
        }  
    }  

    // Function to check if the stats section is in view  
    function checkScroll() {  
        const rect = statsSection.getBoundingClientRect();  
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {  
            animateCounters();  
            window.removeEventListener('scroll', checkScroll); // Remove listener after counting  
        }  
    }  

    window.addEventListener('scroll', checkScroll);  
});
