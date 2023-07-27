const defaultColor = '#1E1014'
// const sketchCont = document.getElementsByClassName("sketch-cont");

// const userInput = document.querySelector('.slider');
// const slideDisplay = document.querySelector('.slider-value');
// userInput.onInput(() => {
//     let value = userInput.value
//     slideDisplay.textContent = value 
//     createGrid(value)
// });

let userInput = Number(prompt("How many squares?"))
createGrid (userInput)


function createGrid (userInput){
    const sketchCont = document.querySelector(".sketch-cont");
    let gridAmount = (userInput * userInput);
    for (i = 0; i < gridAmount; i++) {
        let grid = document.createElement('div');
        grid.style.height = (600 / userInput) + 'px';
        grid.style.width = (600 / userInput) + 'px';
        grid.classList.add('grid');
        sketchCont.appendChild(grid);
    }

}
// ^ creates grid


const allGrids = document.querySelectorAll('.grid');
let colorSelector = document.querySelector('.color-selector');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
let isMousedown = false;
let eraserMode = false;

allGrids.forEach(grid => {

    colorSelector.addEventListener ('click', () =>{
        eraserMode = false;
    });

    eraser.addEventListener('click', () =>{
        eraserMode = true;
    });

    grid.addEventListener("mousedown", () => {
        isMousedown = true;
        if (eraserMode === true) {
            grid.style.backgroundColor = defaultColor;
        } else{
            grid.style.backgroundColor = colorSelector.value;
        }
    });

    grid.addEventListener("mouseup", () => {
        isMousedown = false;
    });

    grid.addEventListener("mousemove", () => {
        if (isMousedown) {
            if (eraserMode === true) {
                grid.style.backgroundColor = defaultColor;
            } else{
                grid.style.backgroundColor = colorSelector.value;
            }
        } else {
            return;
    }
    });

    clear.addEventListener('click', () =>{
        grid.style.backgroundColor = defaultColor;
    });
});

// ^ allows grid to be colored when selected 
