// ----------------TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    console.log("Menu icon clicked!"); 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --------------SCROLL SECTION ACTIVE LINK */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href* =' + id +']').classList.add('active')
            });
        };

    });
    /*-------STICKY NAVBAR--------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 /*-------SCROLL REVEAL --------*/
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .porfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// -----------typed js ------------
const typed = new Typed('.multiple-text', { //create a typing object on the web page
    strings: ['Frontend Developer', 'Data Analyst', 'Software Engineer' ],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 600,
    loop: true
});


// Read more/ Read Less
function myFunction(contentId, btnId) {
    var moreText = document.getElementById(contentId);
    var btnText = document.getElementById(btnId);
  
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read less"; 
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read more"; 
    }
}
