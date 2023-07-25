const sketchCont = document.getElementsByClassName("sketch-cont");

let gridAmount = Number(prompt("How many squares?"))

createGrid(gridAmount)
function createGrid (gridAmount){
    const sketchCont = document.querySelector(".sketch-cont");
    for (i = 0; i < gridAmount; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        sketchCont.appendChild(grid);
    }

}