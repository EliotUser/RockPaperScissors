let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let choice = Math.floor(Math.random(choices.length))
    let rand = Math.floor(Math.random()*3)
    let randomNum = choices[rand]
    console.log("Computer choice is: ", randomNum);
}
getComputerChoice()
function playerChoice(){
    let userChoice = prompt("Rock - Paper  or Scissors ?");

    if(userChoice === choices[0]){
        console.log("User choice is: ", choices[0]);
    }else if(userChoice === choices[1]){
        console.log("User choice is: ", choices[1]);
    }else if(userChoice === choices[2]){
        console.log("User choice is: ", choices[2]);
    }else{
        console.log('Not a choice...');
    }
}
playerChoice()
