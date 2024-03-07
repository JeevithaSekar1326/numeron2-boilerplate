// Iteration 8: Making scoreboard functional
let score = 0;
function increaseScore() {
    score += 10; 
}

function decreaseScore() {
    score -= 5; 

}
function updateScoreboard() {
    document.getElementById("score-board").innerText = score;
}
