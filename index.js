
let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let choice = Math.floor(Math.random(choices.length))
    let rand = Math.floor(Math.random()*3)
    let randomNum = choices[rand]
    console.log("Computer choice is: ", randomNum);
    return randomNum
}

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
    return userChoice
}

// function playRound(){
//     for (let i = 1; i <= 3; i++) {
//          gameRound();
//     }
// }

function gameRound(){

    let userPoints = 0;
    let machinePoints = 0;

    for(let i = 1; i <= 3; i++){
    let userChoice = playerChoice();
    let randomNum = getComputerChoice();

   
    if(randomNum === userChoice){
        console.log("Draw!");
         userPoints += 1;
         machinePoints += 1;
    }
    else if((randomNum == 'rock' && userChoice == 'paper')){
        console.log("User Wins!");
         userPoints += 1;
    }
    else if((randomNum == 'rock' && userChoice == 'scissors')){
        console.log("Machine Wins!");
         machinePoints += 1;
    }
    else if((randomNum == 'paper' && userChoice == 'rock')){
        console.log("Machines Win!");
         machinePoints += 1;
    }
    else if((randomNum == 'paper' && userChoice == 'scissors')){
        console.log("User Wins!");
         userPoints += 1;
    }
    else if(randomNum == 'scissors' && userChoice == 'rock'){
        console.log("User Wins!");
         userPoints += 1;
    }
    else if(randomNum == 'scissors' && userChoice == 'paper'){
        console.log("Machine Win!");
         machinePoints += 1;
    }
}
if(userPoints > machinePoints){
    console.log("User Wins! User Points: ", userPoints, "\n", "Machine Points: ", machinePoints);
}else if(userPoints == machinePoints){
    console.log("It\'s a Draw! User Points: ", userPoints ,"\n", "Machine Points: ", machinePoints);
}else if(machinePoints > userPoints){
    console.log("Machine Wins!\nMachine Points: ", machinePoints, "\n", "User Points: ", userPoints);
}   
    
}
gameRound()