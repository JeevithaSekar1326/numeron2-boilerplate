// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
document.addEventListener("DOMContentLoaded", function() {
    var number1 = Math.floor(Math.random() * 101);
    var number2 = Math.floor(Math.random() * 101);
    document.getElementById("number1").innerText = number1;
    document.getElementById("number2").innerText = number2;
});


// Iteration 3: Creating variables required to make the game functional
var currentOperator = ""; 
var correctAnswer = 0; 


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3 = 0; 
var number3Element = document.getElementById("number3"); 


// Iteration 5: Creating a randomise function to make the game functional
function randomize() {
    number3 = Math.floor(Math.random() * 101);
    number3Element.innerText = number3;
}


// Iteration 6: Making the Operators (button) functional

document.getElementById("plus").addEventListener("click", function() {
    currentOperator = "+";
    randomize();
});
document.getElementById("minus").addEventListener("click", function() {
    currentOperator = "-";
    randomize();
});
document.getElementById("mul").addEventListener("click", function() {
    currentOperator = "*";
    randomize();
});
document.getElementById("divide").addEventListener("click", function() {
    currentOperator = "/";
    randomize();
});
document.getElementById("modulus").addEventListener("click", function() {
    currentOperator = "%";
    randomize();
});

// Iteration 7: Making Timer functional

var timerElement = document.getElementById("timer");
var timeLeft = 60; 

function startTimer() {
    var countdown = setInterval(function() {
        timeLeft--;
        timerElement.innerText = "Time left: " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(countdown);
            
        }
    }, 1000);
}

startTimer();




