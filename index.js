function getComputerChoice(){
    let guesses = ['rock', 'paper', 'scissors'];
    let guess = Math.floor(Math.random(guesses.length))
    let rand = Math.floor(Math.random()*3)
    let randomNum = guesses[rand]
    console.log(randomNum);
}
