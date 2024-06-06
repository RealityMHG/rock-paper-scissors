
//Initializing Scores
let humanScore = 0;
let computerScore = 0;


//Single Round of the Game
function playRound() {

}

//Get the Computer Choice
function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

//Get the Human Choice
function getHumanChoice() {
    let choice = "";
    while(choice != "rock" && choice != "paper"
         && choice != "scissors") {

        choice = prompt("What's your choice?");
        choice = choice.toLowerCase();
    }

    return choice;
}

//Get a random number between 0 and 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
