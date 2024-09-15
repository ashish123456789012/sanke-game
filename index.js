// game constants and variables
let direction = {x: 0, y: 0}
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.mp3');
const movesound = new Audio('move.mp3');
const musicsound = new Audio('music.mp3');
let speed = 2;
letlastpaintTime = 0;
letsnakeArr =[
    {x: 12, y = 15}
]


// game function
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastpaintTime)/1000 < 1/speed){
        return;
    }
    lastpaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //updating sanke array and food

    // display sanke and food
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        sankeElement = document.createElement('div');
        sankeElement.style.gridRowStart = e.y;
        sankeElement.style.gridRowStart = e.x;
        sankeElement.classList.add('food')
        board.appendChild(sankeElement);
    })
}












// main logic 
window.requestAnimationFrame(main);
