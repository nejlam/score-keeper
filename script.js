var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var reset = document.querySelector("#reset")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("h4 span")
var numInput = document.querySelector("input")
var winner = document.querySelector("#winner")

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++
        if(p1Score === winningScore){
            gameOver = true
            winner.textContent = "The winner is Player 1!"
            //p1Display.classList.add("winner")
        }
        p1Display.textContent = p1Score;
    }
       
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++
        if(p2Score === winningScore){
            gameOver = true
            //p2Display.classList.add("winner")
            winner.textContent = "The winner is Player 2!"
        }
        p2Display.textContent = p2Score;
    }
 
})

//reseting score
function resetf(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    //p1Display.classList.remove("winner")
    //p2Display.classList.remove("winner")
    winner.textContent = ""
}

reset.addEventListener("click", resetf)

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value)
    resetf()
})


// disabling entering negative numbers
var number = document.getElementById('inputcont');
number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}