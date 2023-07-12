
var initialvalue = 100;
var highscore = null;

var randomNumber = random(100);
console.log(randomNumber);

function random(n){
   return Math.floor(Math.random()*n) + 1;
}

function check(){
    let inputNumber = document.getElementById("guess1").value;

    if(initialvalue !== 0){

        if(inputNumber > randomNumber){
            document.getElementById("message").textContent = "😒 Your Guess Is High 😒";
            document.querySelector("#chances").textContent = --initialvalue;
        }else if(inputNumber < randomNumber){
            document.getElementById("message").textContent = "😒 Your Guess Is Low 😒";
            document.querySelector("#chances").textContent = --initialvalue;
        }else{
            document.getElementById("message").textContent = "🤩🤩👍 Hurry You Won 👍🤩🤩";
            document.body.style.backgroundColor = "green";
            document.querySelector("#chances").textContent = --initialvalue;
            
            highscore = initialvalue;
            document.querySelector(".highscore").textContent = highscore;
            document.querySelector("#correctno").textContent = randomNumber;
        }

    }else{
        document.getElementById("message").textContent = "😒😒 Game Over 😒😒";
        document.body.style.backgroundColor = "red";
    }
}

// function reset(){
//     let inputNumber = parseInt(document.getElementById("guess1").value);

//     document.body.style.backgroundColor = "aqua";
//     document.querySelector(".message").textContent = "Start Gussing.....";

//     highscore = initialvalue;
//     document.querySelector(".highscore").textContent = highscore;
// }

function reset() {
    document.body.style.backgroundColor = "aqua";
    document.getElementById("message").textContent = "Start Guessing.....";
  
    initialvalue = 100;
    document.querySelector("#chances").textContent = "100";
    location.reload();
  }