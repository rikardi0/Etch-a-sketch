const container = document.querySelector('#container');//parent of mainDIv

const mainDiv = document.createElement('div');//parent of the grid 
container.appendChild(mainDiv);

const bottom = document.querySelector('#btn');//parent of clear and change size 

const clear = document.createElement('button');
clear.textContent = 'Clear';
clear.setAttribute('class', 'botones');
bottom.appendChild(clear);
const size = document.createElement('button');
size.textContent = 'Change size';
size.setAttribute('class', 'botones');
bottom.appendChild(size);

const btnColor = document.querySelector('#colorSelector'); //botton for color change and eraser

const black = document.createElement('button');
black.textContent = 'Black';
black.setAttribute('class', 'botones');
btnColor.appendChild(black);
const rainbow = document.createElement('button');
rainbow.textContent = 'Random';
rainbow.setAttribute('class', 'botones');
btnColor.appendChild(rainbow);
const eraser = document.createElement('button');
eraser.textContent = 'Eraser';
eraser.setAttribute('class', 'botones');
btnColor.appendChild(eraser);

let row = 16;

function defaultGrid(row) { // is the default grid 16x16
    for (let i = 0; i < `${row}` * `${row}`; i++) {
        let colorSelector = ` rgb(236, 233, 233)`;

        const divs = document.createElement('div');
        divs.setAttribute('id', 'grid');
        divs.style.border = ' 2px inset rgb(199, 197, 197)',
            divs.style.background = `white`

        mainDiv.appendChild(divs);
        mainDiv.setAttribute(`id`, `mainDiv`);
        mainDiv.style.display = "grid";
        mainDiv.style.gridTemplateColumns = `repeat(${row}, 1fr )`;
        mainDiv.style.gridTemplateRows = `repeat(${row}, 1fr )`;

        black.addEventListener('click', () => {
            colorSelector = `black`;
        })
        rainbow.addEventListener('click', () => {

            let rainbowSelect = rainbowSelection();
            colorSelector = `${rainbowSelect}`;
        })
        eraser.addEventListener('click', () => {

            colorSelector = `white`;
        })

        divs.addEventListener('click', () => {

            divs.style.background = `${colorSelector}`;
        });

        clear.addEventListener('click', () => {

            divs.style.background = `white`
        })
    }
}

defaultGrid(row);//principal grid (16x16)

function removeOldGrid() { //this clean the grid
    const grid = Array.from(document.querySelectorAll('#grid'));
    grid.forEach((element) => {
        mainDiv.removeChild(element);
    })
}
function newGrid() { //this function change the size of the grid
    let newRow = prompt('select new size (1-40)');
    if (newRow > 40 || newRow < 0 || newRow == 0) {
        alert('Please select a number between 1-40');
        location.reload();
    }
    else if (newRow <= 40 || newRow > 0) {
        removeOldGrid();
        defaultGrid(newRow);
    }
    else {
        alert('Unvalid, please enter a number');
    }
}
function rainbowSelection() {
    let sectionR = [Math.floor(Math.random() * 255)];
    let sectionG = [Math.floor(Math.random() * 255)];
    let sectionB = [Math.floor(Math.random() * 255)];
    let color = `rgb(${sectionR},${sectionG},${sectionB})`;
    return color;
}
size.addEventListener('click', newGrid);//change size event