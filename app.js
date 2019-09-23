
window.onload = function () {

    //setup
    var gridContainer = document.querySelectorAll(".grid-container");
    var battleships = [];
    const GridSide = 10;
    const GridTotal = GridSide * GridSide;


    drawGrid(GridSide, GridTotal);
    createShips();

    function drawGrid(gridSide, gridTotal) {
        for (i = 0; i < gridContainer.length; i++) {
            for (j = 0; j < gridTotal; j++) {
                div = document.createElement('div')
                div.setAttribute('id', 'gridBox')
                gridContainer[i].appendChild(div);
            }
            gridContainer[i].setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
        }
    }

    function BattleShip(length) {
        this.length = length;
        this.name = length.toString();
        this.hits = 0;
        this.isAlive = true;
    }

    //create ship and add to battleships array
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




