
const userChoiceDisplay = document.createElement('h3')
const computerChoiceDisplay = document.createElement('h2')
const resultChoiceDisplay = document.createElement('h4')

const gameGrid = document.getElementById('game');

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultChoiceDisplay)

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let userChoice;

const iClicked = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = 'player: '+userChoice;
    computerChoice();
    Results();
}

const computerChoice = () =>{
    const randCh = choices[Math.floor(Math.random() * choices.length)];
    compChoice = randCh;
    computerChoiceDisplay.innerHTML = 'Computer: ' + compChoice;
}

for(let i = 0; i < choices.length; i++){
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', iClicked);
    gameGrid.appendChild(button);
}

const Results = () => {
    switch(userChoice + compChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultChoiceDisplay.innerHTML = "YOU WIN!"
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultChoiceDisplay.innerHTML = "YOU LOSE!"
            break;
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            resultChoiceDisplay.innerHTML = "DRAW!"
            break;
    }
}