const catbus = document.querySelector('.catbus');
const house = document.querySelector('.house');

const gameover = document.querySelector('.game-over');
const gameboard = document.querySelector('.game-board');

const jump = () => {
    catbus.classList.add('jump');

    setTimeout(() => {
        catbus.classList.remove('jump')
    } , 1000);
}



const loop = setInterval(() => {
    
    const housePosition = house.offsetLeft;
    const catbusPosition = +window.getComputedStyle(catbus).bottom.replace('px' , '');
    
    
    if (housePosition <= 200  && housePosition > 0 && catbusPosition < 130){
        
        house.style.animation = 'none';
        house.style.left = `${housePosition}px`;
        
        catbus.style.animation = 'none';
        catbus.style.bottom = `${catbusPosition}px`;
        

        catbus.src = './assets/catbus-gameover.png';
        catbus.style.width = '200px';
        catbus.style.marginleft = '0px';
        
        clearInterval(loop);
        
        crash();
    }

}, 10);

function crash (){
    gameover.classList.add('over');

    gameboard.classList.add('over');

    house.classList.add('inverter');
    catbus.classList.add('inverter');


}


document.addEventListener('keydown' , jump);

