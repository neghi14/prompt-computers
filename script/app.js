const navbar = document.querySelector('.nav-links');

const clickerOpen = document.querySelector('#clicker-open');
clickerOpen.addEventListener('click', () => {

    
    navbar.classList.add('open');
});

const clickerClose = document.querySelector('#clicker-close');

clickerClose.addEventListener('click', () => {
    navbar.classList.remove('open')
});
