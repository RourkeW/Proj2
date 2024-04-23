let moleTile;


window.onload = function() {
    runGame();
}

function runGame() {
    for (let i = 0; i < 9; i++) {
        //this is creating my 9 divs in the js withing the big game border I made in html you can see them now if we went to inspect
        let tile = document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1400);
}

function getRandomTile() {
    //this is to decide the tile the mole is at so *9 for the amount of holes, floor makes it never choose 9
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    let mole = document.createElement("img");
    mole.src = "mole.png";

    let num = getRandomTile();
    moleTile = document.getElementById(num);
    moleTile.appendChild(mole);
}