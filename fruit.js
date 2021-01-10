import {onSnake, expandSnake} from "./snake.js";
import {randomGridPosition} from "./grid.js";

let fruit = getRandomFruitPosition();
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(fruit)) {
        expandSnake(EXPANSION_RATE);
        fruit = getRandomFruitPosition();
    }
}

export function draw(gameBoard) {
    const fruitElement = document.createElement("div");
    fruitElement.style.gridRowStart = fruit.y;
    fruitElement.style.gridColumnStart = fruit.x;
    fruitElement.classList.add("fruit");
    gameBoard.appendChild(fruitElement);
}

function getRandomFruitPosition() {
    let newFruitPosition
        while (newFruitPosition == null || onSnake(newFruitPosition)) {
            newFruitPosition = randomGridPosition();
        }
        return newFruitPosition;
}