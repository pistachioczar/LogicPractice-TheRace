
function initializeGame() {
    let strength = prompt("enter your initial strength:");

    if (strength == null) {
        document.getElementById("gameLog").innerText = "Game Canceled";
    } else {
        startGameLoop(strength);
    }
}

function startGameLoop(strength) { 
    let attacks = 0;
    while (strength > 0) {
        attackValue = getRandomAttackValue(strength);
        strength -= attackValue;
        attacks++;

        updateGameLog(attacks, attackValue, strength);
    }

    document.getElementById("result").innerHTML = "Game Over! Total number of attacks: " + attacks;
}

function getRandomAttackValue(max) {
    return Math.floor(Math.random() * max) + 1;
}

function updateGameLog(attacks, attackValue, strength) {
    document.getElementById("gameLog").innerHTML +=
        "Attack " + attacks + ": " + attackValue +
        ". remaining strength: " + strength + ".<br>";
}

initializeGame();