//setup
const newGame = document.getElementById('reset');
const gridContainer = document.querySelectorAll(".grid-container");
var playerBattleships = [];
var computerBattleships = [];
const GridSide = 10;
const GridTotal = GridSide * GridSide;
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
        playerBattleships.push(ship)
    }

    for (i = 1; i < 6; i++) {
        let ship = new BattleShip(i);
        //store battleships in computerBattleship arrays
        computerBattleships.push(ship)
    }
}

function BattleShip(length) {
    this.length = length;
    this.name = length.toString();
    this.hits = 0;
    this.isSunk = false;
}

function updatePlayerShip(gridNumber) {
    let gridNum = gridNumber;
    let ship = playerBattleships[playerGrid[gridNumber] - 1];
    ship.hits += 1;
    if (ship.hits == ship.length) {
        ship.isSunk = true;
    }
    console.log(playerBattleships[playerGrid[gridNumber] - 1]);
}

function updateComputerShip(gridNumber) {
    let gridNum = gridNumber;
    let ship = computerBattleships[computerGrid[gridNumber] - 1];
    ship.hits += 1;
    if (ship.hits == ship.length) {
        ship.isSunk = true;
    }
    console.log(computerBattleships[computerGrid[gridNumber] - 1]);

}

function colorSquare(e) {
    e.target.setAttribute('class', "triggered")
    e.target.setAttribute('style', 'background: darkgrey');
}

//check cell selection is in proper grid given player turn
function checkCellSelection(e) {
    if (playerTurn && (e.target.parentNode.id == 1)) {
        return true;
    }
}

//On square click, run id # through hit logic 
const square = document.querySelectorAll('.grid-container div');
square.forEach((square) => {
    square.addEventListener('click', function (e) {
        //Only used by player so logic made with only player in mind
        //check cell selection
        //if it's player turn and in computer grid, update grid
        if (checkCellSelection(e)) {
            if (computerGrid[e.target.id] != 0) {
                console.log(computerGrid[e.target.id])
                updatePlayerShip(e.target.id);
                console.log(playerTurn);
            }
            //else, display notificaiton that wrong grid is select
        } else {
            alert("Cannot select cell within Player grid.  Please pick again.")
        }

        console.log(e.target.parentNode.id);

        colorSquare(e);
        updatePlayerTurn();
    });
});

function gameSetup() {
    location.reload();
}

