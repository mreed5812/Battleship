
//setup
const gridContainer = document.querySelector('.grid-container');
const GridSide = 10;      // initial gridSide is 4, set the grid attribute to repeat 4x4
gridContainer.setAttribute('style', 'grid: repeat(' + GridSide + ',auto) / repeat(' + GridSide + ',auto)');
const GridTotal = GridSide * GridSide;

document.addEventListener("DOMContentLoaded", function () {
    drawGrid(GridSide, GridTotal);
    createShips();
});

function BattleShip(length) {
    this.length = length;
    this.name = length.toString();
}

var battleships = [];

function createShips() {
    for (i = 1; i < 6; i++) {
        let ship = new BattleShip(i);
        battleships.push(ship)
    }
}


function testShipObject() {
    for (i = 0; i < battleships.length; i++) {
        console.log(battleships[i]);
    }
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    testShipObject();
});

function drawGrid(gridSide, gridTotal) {
    for (i = 0; i < gridTotal; i++) {
        div = document.createElement('div')
        div.setAttribute('id', 'gridBox')
        gridContainer.appendChild(div);
    }
    gridContainer.setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
}

function markSquare() {
    var divs = document.querySelectorAll('.grid-container div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.setAttribute('style', 'background: black');
        });
    });
}

function gameSetup() {
    var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
        div.setAttribute('style', 'background: white');
    });
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    //gameSetup();
});


