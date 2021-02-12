const menuToggle = document.querySelector('.menuToggle');
const mainNav = document.querySelector('.mainNav');
const navLinks = document.querySelectorAll('.mainNav a');



menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    })
})