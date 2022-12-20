//DOM elements
const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons');
const reset = document.createElement('button');
const header = document.querySelector('#header');

//Create header for page
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch-a-Sketch';
header.appendChild(title);

//Create instructions for etch-a-sketch
const howTo = document.createElement('div');
howTo.classList.add('rules');
howTo.textContent = 'Select a grid size and have fun';
header.appendChild(howTo);

//Create slider button for user to choose grid size
const slider = document.createElement('input');
slider.classList.add('grid-size');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '1');
slider.setAttribute('max', '64');
slider.setAttribute('value', '32');
buttons.appendChild(slider);

//Create div to display the value of the range slider
const output = document.createElement('div');
output.classList.add('value');
output.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
buttons.appendChild(output);

//Add a reset button to the buttons container
reset.classList.add('reset');
reset.textContent = 'Reset';
buttons.appendChild(reset);

//create eventListener that creates the grid and allows user to change gridSize using range slider
slider.addEventListener('change', function () {
    let input = slider.value;

    container.textContent = '';

    container.style.setProperty('--grid-rows', input);
    container.style.setProperty('--grid-cols', input);

    for (let i = 0; i < (input * input); i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    };

    //Use an eventListener to reset the grid to white
    const gridItems = document.querySelectorAll('.grid-item');

    reset.addEventListener('click', () => {
        gridItems.forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    });

    output.textContent = `Grid Size: ${this.value} x ${this.value}`;

});