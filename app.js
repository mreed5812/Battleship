window.onload = function () {

    //setup
    var gridContainer = document.querySelectorAll(".grid-container");
    var humanBattleships = [];
    var computerBattleships = []
    const GridSide = 10;
    const GridTotal = GridSide * GridSide;
    var playerGrid;
    var computerGrid;
    var gamePlay = true;

    //create grids
    drawGrid(GridSide, GridTotal);
    resetGrids();

    while (gamePlay) {

    }

    //create battle ships for both human and computer
    createShips();

    //place battleships in each grid
    //loop through twice for both human and computer
    //0 for human, 1 for computer
    for (i = 0; i < 2; i++) {
        let grid;
        if (i = 0) {
            grid = playerGrid;
        } else {
            grid = computerGrid;
        }
        //get random number between 0-100
        var placementSquare = getRandomNumber();
        //check if cell in grid is already taken
        checkIfCellEmpty(placementSquare, grid);
        checkHorizontalCell(placementSquare, grid);
        checkVerticalCell(placementSquare, grid);
    }

    //if not taken, get random number for vertical or horizontal ship placement
    //check if cells in grid for vertical or horizontal are taken
    //if not taken, assign grid cells to ship
    //else (cells taken), check opposite layout

    //gameplay
    //player selects cell
    //check if cell is assigned to ship
    //if cell is assigned to ship, mark as hit on that ship
    //check if ship is sunk
    //if sunk, check if game is over
    //else, change players

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

    //returns true if horizontal neighboring cell is empty
    function checkHorizontalCell(cell, array) {
        if (array[cell + 1] == undefined) {
            return true;
        } else {
            return false;
        }
    }

    //returns true if vertical neighboring cell is empty
    function checkVerticalCell(cell, array) {
        if (array[cell + 10] == undefined) {
            return true;
        } else {
            return false;
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

//reset grids

//set grids
function resetGrids() {
    playerGrid = new Array(100);
    computerGrid = new Array(100);
}

//gets random number between 0-100
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
//
//add ships to array

//checks if position in given array is empty/undefined
//returns true if empty
function checkIfCellEmpty(number, array) {
    if (array[number] == undefined) {
        return true;
    } else {
        return false;
    }
}

resetGrids();

//check if ship already placed in cell with that number
if (checkIfCellEmpty(placementSquare, playerGrid)) {
    //if empty, get random number (0 or 1) for layout
    var layoutNumber = Math.floor(Math.random() * 2);
} else {
    //
};

testShipObject();
var ship = battleships[0];
getRandomNumber();

function testShipObject() {
    for (i = 0; i < battleships.length; i++) {
        console.log(battleships[i]);
    }
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    testShipObject();
});

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

}
