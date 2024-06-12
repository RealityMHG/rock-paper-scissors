
//Initializing Scores
let humanScore = 0;
let computerScore = 0;


const gameBtn = document.querySelector("#game-start");
gameBtn.addEventListener("click", () => {
    playGame();
});

//Game Variables
let choiceBtn = document.querySelector(".choices");
let gameText = document.querySelector(".game");
let gameScore = document.querySelector(".scores");

let computerSelection = "";

//Choice Buttons
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let eventFiredAlready = false;
//Play the Game
function playGame () {

    //Change buttons
    buttonLayout("game","");

    computerSelection = getComputerChoice();
    
    rockBtn.addEventListener("click", function() {
        if(!eventFiredAlready) {
            buttonLayout("rock",computerSelection);
            eventFiredAlready = true;
        }  
    });

    paperBtn.addEventListener("click", function() {
        if(!eventFiredAlready) {
            buttonLayout("paper",computerSelection);
            eventFiredAlready = true;
        }  
    });

    scissorsBtn.addEventListener("click", function() {
        if(!eventFiredAlready) {
            buttonLayout("scissors",computerSelection);
            eventFiredAlready = true;
        }  
    });

    eventFiredAlready = false;
}

//Single Round of the Game
function playRoundPrompt(humanChoice, computerChoice) {
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

//Get the Human Choice With Prompt
function getHumanChoicePrompt() {
    let choice = "";
    while(choice != "rock" && choice != "paper"
         && choice != "scissors") {

        try {
            choice = prompt("What's your choice?");
        choice = choice.toLowerCase();
        } catch(err) {
            console.log("No Choice Made!")
        }
    }

    return choice;
}

function buttonLayout(layout, computerSelection) {
    if (layout === "game") {
        gameBtn.style.visibility = "hidden";
        choiceBtn = document.querySelector(".choices");
        choiceBtn.style.visibility = "visible";
        gameText = document.querySelector(".game");
        gameText.textContent = "Take Your Pick!"
    } else {
        gameText.textContent = getBattleResult(layout,computerSelection);
        gameBtn.textContent = "Next Round"
        gameBtn.style.visibility = "visible";
        choiceBtn.style.visibility = "hidden";
        gameScore.textContent = (humanScore + " : " + computerScore);
    }
}

//Handle Battle
function getBattleResult(humanChoice,computerChoice) {
    if (humanChoice == "rock") {
        if(computerChoice == "rock") return "It's a Tie!";

        else if(computerChoice == "paper"){
            didIWin(false);
            return "Oof, better luck next time :/";
        } 

        else if(computerChoice == "scissors") {
            didIWin(true);
            return "You Win!";
        }
    } else if (humanChoice == "paper") {
        if(computerChoice == "rock") {
            didIWin(true);
            return "You Win!";
        }

        else if(computerChoice == "paper") return "It's a Tie!";

        else if(computerChoice == "scissors") {
            didIWin(false);
            return "Oof, better luck next time :/";
        }
    } else {
        if(computerChoice == "rock") {
            didIWin(false);
            return "Oof, better luck next time :/";
        }

        else if(computerChoice == "paper") {
            didIWin(true);
            return "You Win!";
        }

        else if(computerChoice == "scissors") return "It's a Tie!";
    }
    return "ERROR";
}

function didIWin(champion) {
    if(champion) humanScore++;
    else computerScore++;
}

//Get a random number between 0 and 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
