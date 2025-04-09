document.getElementById('startGame').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 37); // Roulette numbers: 0 to 36
    let result = "Spinning the wheel... Result: " + randomNumber;
    document.getElementById('gameArea').innerText = result;
});