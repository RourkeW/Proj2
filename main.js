let moleTile;
let bombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    runGame();
}

function runGame() {
    for (let i = 0; i < 9; i++) {
        //this is creating my 9 divs in the js withing the big game border I made in html you can see them now if we went to inspect
        let tile = document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 750);
    setInterval(setBomb, 1500);
}

function getRandomTile() {
    //this is to decide the tile the mole is at so *9 for the amount of holes, floor makes it never choose 9
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    
    if (gameOver) {
        return;
    }

    if (moleTile) {
        moleTile.innerHTML="";
    }

    let mole = document.createElement("img");
    mole.src = "mole.png";

    let num = getRandomTile();
    if (bombTile && bombTile.id == num) {
        return;
    }
    moleTile = document.getElementById(num);
    moleTile.appendChild(mole);
}

function setBomb() {

    if (gameOver) {
        return;
    }

    if(bombTile) {
        bombTile.innerHTML="";
    }

    let bomb = document.createElement("img");
    bomb.src = "bomb.png";

    let num = getRandomTile();
    if (moleTile && moleTile.id == num) {
        return;
    }
    bombTile = document.getElementById(num);
    bombTile.appendChild(bomb);
}

function selectTile() {

    if(this == moleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == bombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}