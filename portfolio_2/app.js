const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')
const menu = document.querySelectorAll('.nav-links a')



burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');

    let tl = gsap.timeline()
    tl.from('.nav-links ul li a', {y: -50 , opacity: 0, duration: 0.4, stagger: 0.25, delay: 0.2});
    tl.from('.social-links-nav a', {y: 30, opacity:0, duration: 0.4, stagger: 0.25}, '-=0.4')
});


