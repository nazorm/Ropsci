
var y = document.querySelector(".pageTwo");
var x = document.querySelector(".rulesNav");


function myBtn(){
    var x = document.querySelector(".rulesNav");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

function goback(){
    y.style.display = "none"
    x.style.display = "none"
}

var yourScore = document.querySelector(".yourScore");
var houseScore = document.querySelector(".houseScore");

var verdict = document.querySelector(".verdict");
var playAgain = document.querySelector(".playagainBtn");
var h = document.querySelector(".houseChoice");
var userChoice = document.querySelector(".yourChoice");

    var houseOptionsArray = ["./i/icon-paper.svg", "./i/icon-scissors.svg", "./i/icon-rock.svg"];

function options(index){
    var y = document.querySelector(".pageTwo");
    if(y.style.display === "block"){
        y.style.display = "none";
    }else{
        y.style.display = "block";
    } 
    
if (index == 0){
    userChoice.src = houseOptionsArray[0];
} else if(index == 1){
    userChoice.src = houseOptionsArray[1];
}else{
    userChoice.src = houseOptionsArray[2];
}


    var houseOption = Math.floor(Math.random()*houseOptionsArray.length);
    document.querySelector(".houseChoice").src = houseOptionsArray[houseOption];

    

if (index == 0 && houseOption == 0){
    verdict.innerHTML ="Match"
    verdict.style.color = "whitesmoke";
   playAgain.innerHTML = "Play Again"
} 

else if (index == 0 && houseOption == 1){
    verdict.innerHTML ="You Lose"
    houseScore.innerText = Number(houseScore.innerText) + 1;
    verdict.style.color = "red"
    playAgain.innerHTML = "Play Again"
}

else if (index == 0 && houseOption == 2){
    yourScore.innerText = Number(yourScore.innerText) + 1;
     verdict.innerHTML ="You Win"
     verdict.style.color = "green";
    playAgain.innerHTML = "Play Again"
}

else if (index == 1 && houseOption == 0){
    yourScore.innerText = Number(yourScore.innerText) + 1;
    verdict.innerHTML ="You Win"
    verdict.style.color = "green";
    playAgain.innerHTML = "Play Again"
} 

else if (index == 1 && houseOption == 1){
    verdict.innerHTML ="Match"
    verdict.style.color = "whitesmoke";
    playAgain.innerHTML = "Play Again"
}

else if (index == 1 && houseOption == 2){
   verdict.innerHTML ="You Lose"
   houseScore.innerText = Number(houseScore.innerText) + 1;
   verdict.style.color = "red"
    playAgain.innerHTML = "Play Again"
}

else if (index == 2 && houseOption == 0){
   verdict.innerHTML ="You Lose"
   houseScore.innerText = Number(houseScore.innerText) + 1;
   verdict.style.color = "red"
    playAgain.innerHTML = "Play Again"
}

else if (index == 2 && houseOption == 1){
    yourScore.innerText = Number(yourScore.innerText) + 1;
   verdict.innerHTML ="You Win"
   verdict.style.color = "green";
    playAgain.innerHTML = "Play Again"
}

else if (index == 2 && houseOption == 2){
    verdict.innerHTML ="Match"
    verdict.style.color = "whitesmoke";
    playAgain.innerHTML = "Play Again"
}

}



