//name DOM elements
const container = document.querySelector('#container');
let gridSize = prompt('Please enter grid size:', 16);

//Function that will create a grid (inp = input) and add hover effect for cells
function makeGrid(inp) {
    container.style.setProperty('--grid-rows', inp);
    container.style.setProperty('--grid-cols', inp);
    for (let i = 0; i < (inp * inp); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    };
};

makeGrid(gridSize);
