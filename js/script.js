const menu = document.getElementById('menu');
const links = document.getElementById('links');

menu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    links.classList.toggle('active');
});

document.addEventListener('click', () => {
    menu.classList.remove('active');
    links.classList.remove('active');
});