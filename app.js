
window.onload = function () {

    //setup
    var gridContainer = document.querySelectorAll(".grid-container");
    var battleships = [];
    const GridSide = 10;
    const GridTotal = GridSide * GridSide;
    var playerGrid;
    var computerGrid;


    drawGrid(GridSide, GridTotal);
    createShips();

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

    function BattleShip(length) {
        this.length = length;
        this.name = length.toString();
        this.hits = 0;
        this.isAlive = true;
    }

    //create ship
    function createShips() {
        for (i = 1; i < 6; i++) {
            let ship = new BattleShip(i);
            battleships.push(ship)
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
    function checkIfCellEmpty(number, array) {
        if (array[number] == undefined) {
            return true;
        } else {
            return false;
        }
    }

    resetGrids();

    //get random number between 0-100
    var placementSquare = getRandomNumber();

    //check if ship already placed in cell with that number
    if (checkIfCellEmpty(placementSquare, playerGrid)) {
        //if empty, get random number (0 or 1) for layout
        var layoutNumber = Math.floor(Math.random() * 2);
    } else {
        //
    };

    //get random number of 1 or 2 (horizontal or vertical placement)
    //if 1(horizontal(+1 spaces)), check if ship already in cells to immediate right.  If so, check vertical
    //if 2(vertical (+10 spaces)), check if ship already in cells downward, if so , check horizontal
    //place ship starting in that square
    //
    //if clicked, check if box contains part of ship


    //check if ship will go off grid

    testShipObject();
    var ship = battleships[0];
    console.log(ship.length);
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





