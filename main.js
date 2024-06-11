let moleTile;
let bombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    runGame();
}

function runGame() {
    for (let i = 0; i < 9; i++) {
        // Create 9 divs for the game tiles
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        tile.addEventListener("touchstart", selectTile); // Added touch event for mobile devices
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 750);
    setInterval(setBomb, 1500);
}

function getRandomTile() {
    // Get a random tile
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (moleTile) {
        moleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "assets/images/mole.png";

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

    if (bombTile) {
        bombTile.innerHTML = "";
    }

    let bomb = document.createElement("img");
    bomb.src = "assets/images/bomb.png";

    let num = getRandomTile();
    if (moleTile && moleTile.id == num) {
        return;
    }
    bombTile = document.getElementById(num);
    bombTile.appendChild(bomb);
}

function selectTile(event) {
    event.preventDefault(); // Prevent default touch event behavior

    if (gameOver) {
        return;
    }

    if (this === moleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this === bombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}


/*some ideas were taken from youtube videos:
https://www.youtube.com/results?search_query=how+to+make+a+whac+a+mole+game+in+html+css+and+js
https://www.youtube.com/watch?v=D9ZfzXaCPuI&t=922s
https://www.youtube.com/watch?v=rJU3tHLgb_c&t=1169s */