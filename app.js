//setup
const newGame = document.getElementById('reset');
const gridContainer = document.querySelectorAll(".grid-container");
var playerBattleships = [];
var computerBattleships = [];
const GridSide = 10;
const GridTotal = GridSide * GridSide;
let turnDisplay = document.getElementById('turnDisplay');
//true for human turn, false for computer
let playerTurn = true;

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
createShips();

//new game will set squares in grid back to white and create battleships
newGame.addEventListener('click', function () {
    gameSetup();
});

function drawGrid(gridSide, gridTotal) {
    for (i = 0; i < gridContainer.length; i++) {
        for (j = 0; j < gridTotal; j++) {
            div = document.createElement('div')
            div.setAttribute('id', j);
            div.setAttribute('class', 'sqr');
            gridContainer[i].appendChild(div);
        }
        gridContainer[i].setAttribute('id', i);
        gridContainer[i].setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
    }
}

function updatePlayerTurn() {
    playerTurn = !playerTurn;

}
function createShips() {
    //loop through twice for both human and computer ships

    for (i = 1; i < 6; i++) {
        let ship = new BattleShip(i);
        //store battleships in humanBattleship arrays
        playerBattleships.push(ship);

    }

    for (i = 1; i < 6; i++) {
        let ship = new BattleShip(i);
        computerBattleships.push(ship);
    }
}

function BattleShip(length) {
    this.length = length;
    this.name = length.toString();
    this.hits = 0;
    this.isSunk = false;
}

function checkIfGameOver() {
    let sunkPlayerShipsCounter = 0;
    let sunkComputerShipsCounter = 0;
    for (i = 0; i < 5; i++) {

        if (playerBattleships[i].isSunk == true) {
            sunkPlayerShipsCounter++;
            console.log("Player sunk counter: " + sunkPlayerShipsCounter);
        }

        if (computerBattleships[i].isSunk == true) {
            sunkComputerShipsCounter++;
            console.log("Computer sunk counter: " + sunkComputerShipsCounter);
        }
    }
    if (sunkComputerShipsCounter == 5) {
        alert("Game Over. Player wins!");
        gameSetup();
    }
    if (sunkPlayerShipsCounter == 5) {
        alert("Game Over. Computer wins!");
        gameSetup();
    }

}
function updatePlayerShip(gridNumber) {
    let gridNum = gridNumber;
    let ship = playerBattleships[playerGrid[gridNumber] - 1];
    ship.hits += 1;
    if (ship.hits == ship.length) {
        ship.isSunk = true;
    }
}

function updateComputerShip(gridNumber) {
    let gridNum = gridNumber;
    let ship = computerBattleships[computerGrid[gridNumber] - 1];
    ship.hits += 1;
    if (ship.hits == ship.length) {
        ship.isSunk = true;
    }
}

function colorSquareMiss(e) {
    e.target.setAttribute('class', "triggered")
    e.target.setAttribute('style', 'background: darkgrey');
}

function colorSquareHit(e) {
    e.target.setAttribute('class', "triggered")
    e.target.setAttribute('style', 'background: red');
}


function getRandomNumber() {
    return (Math.floor(Math.random() * 100));
}

function computerTurn() {
    let randomNumber = getRandomNumber();
    //check if cell has already been selected
    //let container = document.querySelector(".player-grid");
    let container = document.getElementById('0');
    let selectedSquare = container.querySelector("#" + CSS.escape(randomNumber));

    if (selectedSquare.classList.contains("triggered")) {
        console.log("this cell has been triggered");
        computerTurn();
    }

    if (playerGrid[selectedSquare.id] != 0) {
        console.log("Hit on player ship");
        selectedSquare.setAttribute('class', "triggered");
        selectedSquare.setAttribute('style', 'background: red');
        updatePlayerShip(randomNumber);
    }
    else {
        selectedSquare.setAttribute('class', "triggered");
        selectedSquare.setAttribute('style', 'background: darkgrey');
    }
    //console.log(selectedSquare);
    updatePlayerTurn();
}


//On square click, run id # through hit logic 
const square = document.querySelectorAll('.computer-grid div');
square.forEach((square) => {
    square.addEventListener('click', function (e) {
        //check if it's the player's turn
        if (playerTurn) {
            if (e.target.classList.contains("triggered")) {
                alert("Square has already been selected.  Please choose again.");
                return;
            }

            //check if selected square contains battleship
            if (computerGrid[e.target.id] != 0) {
                //color the square for a hit
                colorSquareHit(e);
                //console.log(computerGrid[e.target.id]);
                //update the computer ship object that was hit, passing event target id
                updateComputerShip(e.target.id);
            } else {
                colorSquareMiss(e);
            }
            updatePlayerTurn();
        }
        computerTurn(getRandomNumber);
        checkIfGameOver();
    });
});

function gameSetup() {
    location.reload();
}

