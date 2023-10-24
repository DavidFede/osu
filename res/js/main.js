const point = document.getElementById("point");
const startGame = document.getElementById("startGame");

let pointInterval;

startGame.onclick = () => {
    startGame.style.display = "none";
    startPointInterval();
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}

const startPointInterval = () =>{
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval(() => {
        movePoint(point, getRandomNumber(100, 600), getRandomNumber(100,600));
    }, 600);
}
const getRandomNumber = (minimum, maximum) =>
Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
    }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}