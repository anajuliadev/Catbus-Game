const catbus = document.querySelector('.catbus');
const house = document.querySelector('.house');

const jump = () => {
    catbus.classList.add('jump');

    setTimeout(() => {
        catbus.classList.remove('jump')
    } , 1000);
}

const loop = setInterval(() => {

    console.log(loop);  

    const housePosition = house.offsetLeft;
    const catbusPosition = +window.getComputedStyle(catbus).bottom.replace('px' , '');


    if (housePosition <= 200  && housePosition > 0 && catbusPosition < 130){

        house.style.animation = 'none';
        house.style.left = `${housePosition}px`;

        catbus.style.animation = 'none';
        catbus.style.bottom = `${catbusPosition}px`;

        catbus.src = './assets/game-over.png'
        catbus.style.width = '130px';
        catbus.style.marginleft = '0px';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown' , jump);

