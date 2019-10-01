//setup
const newGame = document.getElementById('reset');
const gridContainer = document.querySelectorAll(".grid-container");
var humanBattleships = [];
var computerBattleships = [];
const GridSide = 10;
const GridTotal = GridSide * GridSide;

const playerGrid = [5, 5, 5, 5, 5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 3, 3, 3, 0,
    0, 0, 1, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const computerGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2, 2, 0, 0, 0,
    0, 5, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 5, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 5, 0, 4, 4, 4, 4, 0, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 0];

//create grids
drawGrid(GridSide, GridTotal);

newGame.addEventListener('click', function () {
    gameSetup();
    createShips();
});

function drawGrid(gridSide, gridTotal) {
    for (i = 0; i < gridContainer.length; i++) {
        for (j = 0; j < gridTotal; j++) {
            div = document.createElement('div')
            div.setAttribute('id', j);
            gridContainer[i].appendChild(div);
        }
        gridContainer[i].setAttribute('id', i);
        gridContainer[i].setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
    }
}



//create battle ships for both human and computer
//createShips();
//create ship

function createShips() {
    //loop through twice for both human and computer ships
    for (i = 0; i < 2; i++) {
        if (i = 0) {
            for (j = 1; j < 6; j++) {
                let ship = new BattleShip(j);
                //store battleships in battleship arrays
                humanBattleships.push(ship)
            }
        } else {
            for (j = 1; j < 6; j++) {
                let ship = new BattleShip(j);
                //store battleships in battleship arrays
                computerBattleships.push(ship)
            }
        }
    }
}

function BattleShip(length) {
    this.length = length;
    this.name = length.toString();
    this.hits = 0;
    this.isSunk = false;
    this.cellPlacement = [];
}


//reset grids

//set grids

const square = document.querySelectorAll('.grid-container div');
square.forEach((square) => {
    square.addEventListener('click', function (e) {

        e.target.setAttribute('style', 'background: red');
    });
});

function gameSetup() {
    var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
        div.setAttribute('style', 'background: white');
    });
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    gameSetup();
});


