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