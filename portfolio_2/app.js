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



let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.header'
    }
})
tl2.from('.hi-container h2', {y: -50, opacity: 0, duration:0.4});
tl2.from('.name-container h1', {y: -50, opacity: 0, duration:0.4, stagger: 0.4});
tl2.from('.resume a', {y: -50, opacity: 0, duration:0.4});




// ease in and out animations on scroll
let projectElements = Array.from(document.querySelectorAll('.orject-card'));

window.addEventListener('scroll', scanElements)

function scanElements(){
    // get position of each div
    projectElements.forEach(element => {
        if(isVisable(element)){
            element.classList.add('view');
        } else {
            element.classList.remove('view');
        }
    })
}

function isVisable(element){
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}








