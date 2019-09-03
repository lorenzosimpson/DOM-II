// Your code goes here

//make paragraphs expand on mouseover//
const textContent = document.querySelectorAll('.text-content');
textContent.forEach(element => {
    element.addEventListener('mouseover', e => {
        element.style.transform = 'scale(1.2)';
        element.style.transition = 'transform 0.5s';
    })
});
textContent.forEach(element => {
    element.addEventListener('mouseleave', e => {
        element.style.transform = 'scale(1)';
        element.style.transition = 'transform 0.5s';
    })
})

//alert to redirect on button clicks
const buttons = document.querySelectorAll('.btn');
buttons.forEach(element => {
    element.addEventListener('click', e => {
        alert("You're now leaving our site and heading to our travel partner to book.")
    })
})

// //alert on keydown//
const body = document.querySelector('body');
body.addEventListener('keydown', e => {
    alert("Watch it, your cat may be stepping on your keyboard!")
})

//alert on copy//
body.addEventListener('copy', e => {
    alert('The selection has been copied to the clipboard')
})

//flip images on double click;
const images = document.querySelectorAll('img');
images.forEach(element => {
    element.addEventListener('dblclick', e => {
        element.style.transform = 'rotate(0.5turn)';
    })
})

//prevent nav links from refreshing
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
    })
})

//change color if window is resized 
window.addEventListener('resize', e => {
    const bodyCenter = document.querySelector('.container.home');
    bodyCenter.style.backgroundColor = 'lightgray';
})

window.addEventListener('scroll', e => {
    const navbar = document.querySelector('.main-navigation');
    navbar.style.backgroundColor = 'lightgray';
})

//propagation stop 
const pickDestination = document.querySelectorAll('h2')[3];
pickDestination.addEventListener('mouseover', e => {
    pickDestination.style.transform = 'scale(1.2)';
    pickDestination.style.transition = 'transform 0.5s';
    e.stopPropagation();
});
pickDestination.addEventListener('mouseleave', e => {
    pickDestination.style.transform = 'scale(1)';
    pickDestination.style.transition = 'transform 0.5s';
});

const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('mouseover', e => {
    contentDestination.style.backgroundColor = 'blue';
})

