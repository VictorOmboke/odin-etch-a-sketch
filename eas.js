//name container in DOM
const container = document.querySelector('#container');

//Function that will create a grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
    };
};

makeGrid(16, 16);
