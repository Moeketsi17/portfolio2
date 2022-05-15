const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')
const menu = document.querySelectorAll('.nav-links ul li a')



burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');


    let tl = gsap.timeline()
    tl.from('.nav-links ul li a', {
        y: -50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.25,
        delay: 0.2
    });
    tl.from('.social-links-nav a', {
        y: 30,
        opacity: 0,
        duration: 0.4
    }, '-=0.4')
});


// animate header
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.header'
    }
})

tl2.from('.hi-container h2', {
    y: -50,
    opacity: 0,
    duration: 0.4
});
tl2.from('.name-container h1', {
    y: -50,
    opacity: 0,
    duration: 0.4,
    stagger: 0.4
});
tl2.from('.resume a', {
    y: -50,
    opacity: 0,
    duration: 0.4
});







// projects ease in and out on scroll 
let projectElements = Array.from(document.querySelectorAll('.orject-card'));

window.addEventListener('scroll', throttle(scanElements, 20))

function scanElements() {
    // get position of each div
    projectElements.forEach(element => {
        if (isVisable(element)) {
            element.classList.add('view');
        } else {
            element.classList.remove('view');
        }
    });
}

function isVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -200;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

function throttle(fn, delay) {
    let lastCall = 0;
    return (...arg) => {
        let context = this;
        let current = new Date().getTime();
        if (current - lastCall < delay) {
            return
        }
        lastCall = current;
        return fn.apply(context, ...arg)
    }
}



