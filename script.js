var character = document.getElementById("character");
var block = document.getElementById("block");
var overlay = document.getElementById("overlay");
var startMessage = document.getElementById("start-message");
var endMessage = document.getElementById("end-message");
var scoreElement = document.getElementById("score");
var score = 0;

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(function () {
            character.classList.remove("animate");
        }, 500);
    }
}

function startGame() {
    overlay.classList.add("hidden");
    animateBlock();
    setInterval(updateScore, 100);
}

function restartGame() {
    overlay.classList.remove("hidden");
    endMessage.classList.add("hidden");
    character.style.bottom = "0";
    block.style.animation = "block 2s linear infinite";
    score = 0;
    updateScore();
}

function updateScore() {
    score++;
    scoreElement.textContent = score;
}

var checkDead = setInterval(function () {
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 60 && blockLeft > 0 && characterBottom <= 90) {
        endGame();
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});

function endGame() {
    clearInterval(checkDead);
    block.style.animation = "none";
    endMessage.classList.remove("hidden");
    scoreElement.textContent = score;
}
