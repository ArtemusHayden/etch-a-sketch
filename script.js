const sketchCont = document.getElementsByClassName("sketch-cont");

// let userInput = Number(prompt("How many squares?"))
let userInput = 6

createGrid(userInput)
function createGrid (userInput){
    let gridAmount = (userInput * userInput)
    const sketchCont = document.querySelector(".sketch-cont");
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
const colorSelector = document.querySelector('.color-selector');

let isMousedown = false;
allGrids.forEach(grid => {

    grid.addEventListener("mousedown", () => {
        isMousedown = true;
        grid.style.backgroundColor = colorSelector.value;
    });

    grid.addEventListener("mouseup", () => {
        isMousedown = false;
    });

    grid.addEventListener("mousemove", () => {
        if (isMousedown) {
            grid.style.backgroundColor = colorSelector.value;
        } else {
            return;
    }
    });
});

// ^ allows grid to be colored when selected 

