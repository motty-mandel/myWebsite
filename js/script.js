const menu = document.getElementById('menu');
const links = document.getElementById('links');

const leftGlass = document.getElementById('leftGlass');
const middleGlass = document.getElementById('middleGlass');
const rightGlass = document.getElementById('rightGlass');


menu.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    links.classList.toggle('active');
});

document.addEventListener('click', () => {
    menu.classList.remove('active');
    links.classList.remove('active');
    leftGlass.classList.remove('active');
    middleGlass.classList.remove('active');
    rightGlass.classList.remove('active');
});

leftGlass.addEventListener('click', (e) => {
    e.stopPropagation();
    leftGlass.classList.toggle('active');
    middleGlass.classList.remove('active');
    rightGlass.classList.remove('active');
});

middleGlass.addEventListener('click', (e) => {
    e.stopPropagation();
    leftGlass.classList.remove('active');
    middleGlass.classList.toggle('active');
    rightGlass.classList.remove('active');
});

rightGlass.addEventListener('click', (e) => {
    e.stopPropagation();
    leftGlass.classList.remove('active');
    middleGlass.classList.remove('active');
    rightGlass.classList.toggle('active');
});