const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')
const menu = document.querySelectorAll('.nav-links a')



burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');

    // links.forEach((link, index) => {
        

    //     if(link.style.animation){
    //         link.style.animation = ''
    //     } else {
    //         link.style.animation = `navLinkFade 0.6s ease forwards ${index / 4 + 0.3}s `
    //     }
    //     console.log(index)
        
    // })

    
});


