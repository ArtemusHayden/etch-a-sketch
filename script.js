const defaultColor = '#1E1014'
const sketchCont = document.getElementsByClassName("sketch-cont");

const userInput = document.querySelector('.slider');
const slideDisplay = document.querySelector('.slider-value');
userInput.oninput = (() => {
    let value = userInput.value
    slideDisplay.textContent = value 
    let colorSelector = document.querySelector('.color-selector');
    createGrid(value, colorSelector)
});

function createGrid (userGrid, colorSelector){
    const sketchCont = document.querySelector(".sketch-cont");
    let gridAmount = (userGrid * userGrid);
    sketchCont.innerHTML = '';
    for (i = 0; i < gridAmount; i++) {
        let grid = document.createElement('div');
        grid.style.height = (600 / userGrid) + 'px';
        grid.style.width = (600 / userGrid) + 'px';
        grid.classList.add('grid');
        sketchCont.appendChild(grid);

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

        const clear = document.querySelector('.clear');
        const eraser = document.querySelector('.eraser');
        let eraserMode = false;

        colorSelector.addEventListener ('click', () =>{
            eraserMode = false;
        });
    
        eraser.addEventListener('click', () =>{
            eraserMode = true;
        });

        clear.addEventListener('click', () =>{
            grid.style.backgroundColor = defaultColor;
        });
    }

}
// ^ creates grid and adds conditions based on which buttons are pressed