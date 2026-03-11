// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

// Function to show messages from URL parameters
function showFormMessages() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for subscriber form messages
    if (urlParams.has('subscribe')) {
        const status = urlParams.get('subscribe');
        const message = urlParams.get('message');
        
        if (message) {
            showNotification(message, status === 'success');
            
            // Clean URL (remove parameters)
            const cleanUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }
    
    // Check for contact form messages
    if (urlParams.has('contact')) {
        const status = urlParams.get('contact');
        const message = urlParams.get('message');
        
        if (message) {
            showNotification(message, status === 'success');
            
            // Clean URL (remove parameters)
            const cleanUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }
}

// Function to show notification
function showNotification(message, isSuccess) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `form-notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Set background color based on success/error
    notification.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336';
    
    // Add close button style
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        margin-left: 15px;
        padding: 0;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', showFormMessages);

//LOADING PAGE

/*
window.onload = function() {  
    // Hide the loading screen after 3 seconds  
    setTimeout(() => {  
        document.getElementById('loading').style.display = 'none';  
        document.getElementById('content').style.display = 'block';  
    }, 3000); // Change the duration as needed (3000 ms = 3 seconds)  
};
*/



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
            }, 1); // Speed of counting  

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



// Contact Form Submission

document.getElementById('contact_form').addEventListener('submit', function(event) {

    // event.preventDefault();
})


//SCROLL REVEAL 

ScrollReveal({
    //reset: true,
    distance: '100px',
    duration: 1000,
    delay: 100
});
ScrollReveal().reveal('#relax, .session1, .header-cont, #about .service, #testimonials, #welcome ', { origin: 'top' });
ScrollReveal().reveal('#achieve, .company, .work, .contacts, #privacy ', { origin: 'bottom' });
ScrollReveal().reveal('#menucolumnn, .royal, .pool, .welcome, .shop, .offerrr, .social', { origin: 'left' });
ScrollReveal().reveal('#junkk, .shoop, .delivery', { origin: 'right' });