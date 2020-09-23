let title = document.querySelector("h1");

function getRandomNumbers() {
    let num = Math.floor(Math.random() * 6) + 1;
    return num;
}

function showDice(m, n) {
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    player1.querySelector(`div .dice:nth-child(${m})`).classList.add("show");
    player2.querySelector(`div .dice:nth-child(${n})`).classList.add("show");
}

function checkResult(m, n) {
    if(m > n) {
        title.innerText = "Player1 Wins! 🎉";
    } else if(m === n) {
        title.innerText = "Draw! 🎲";
    } else {
        title.innerText = "Player2 Wins! ✨";
    }
}

function init() {
    let firstNum = getRandomNumbers();
    let secondNum = getRandomNumbers();
    showDice(firstNum, secondNum);
    checkResult(firstNum, secondNum);
}

init();
