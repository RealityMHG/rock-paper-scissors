
//Initializing Scores
let humanScore = 0;
let computerScore = 0;


//Start the Game
function playGame () {

    //Resetting Scores
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i<=5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log("The scores are: " + humanScore + " : " + computerScore);

    }

    if(humanScore > computerScore) console.log("YOU WIN!") 
        else console.log("Oof better luck next time :/");

}

//Single Round of the Game
function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock") {

        if(computerChoice == "rock")
            console.log("It's a Tie!, Rock with Rock");
        
        if(computerChoice == "paper") {
            computerScore++;
            console.log("You Lose!, Paper beats Rock");
        }

        if(computerChoice == "scissors") {
            humanScore++;
            console.log("You Win!, Rock beats Scissors");
        }

    }

    if(humanChoice == "paper") {
        
        if(computerChoice == "rock") {
            humanScore++;
            console.log("You Win!, Paper beats Rock");
        }

        if(computerChoice == "paper")
            console.log("It's a Tie!, Paper with Paper");

        
        if(computerChoice == "scissors") {
            computerScore++;
            console.log("You Lose!, Scissors beats Paper");
        }

    }

    if(humanChoice == "scissors") {
        
        if(computerChoice == "rock") {
            computerScore++;
            console.log("You Lose!, Rock beats Scissors");
        }

        if(computerChoice == "paper") {
            humanScore++;
            console.log("You Win!, Scissors beats Paper");
        }

        if(computerChoice == "scissors")
            console.log("It's a Tie!, Scissors with Scissors");

    }
}

//Get the Computer Choice
function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
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
