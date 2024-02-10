var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(function () {
            character.classList.remove("animate");
        }, 500);
    }
}

var checkDead = setInterval(function () {
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 60 && blockLeft > 0 && characterBottom <= 90) {
        alert("Game Over!");
        block.style.animation = "none";
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});
