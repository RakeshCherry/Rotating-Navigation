const openMenu =document.getElementById('open');
const closeMenu = document.getElementById('close');

const container = document.querySelector('.container');

openMenu.addEventListener('click', () => {
    container.classList.add('rotate-container');
})
closeMenu.addEventListener('click', () => {
    container.classList.remove('rotate-container');
})