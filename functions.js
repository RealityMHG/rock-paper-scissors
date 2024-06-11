
//Initializing Scores
let humanScore = 0;
let computerScore = 0;


const gameBtn = document.querySelector("#game-start");
gameBtn.addEventListener("click", () => {
    playGame();
});

//Play the Game
function playGame () {

    //Change buttons
    gameBtn.style.visibility = "hidden";
    const choiceBtn = document.querySelector(".choices");
    choiceBtn.style.visibility = "visible";
    const gameText = document.querySelector(".game");
    gameText.textContent = "Take Your Pick!"

    //Choice Buttons
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    let computerSelection = getComputerChoice();

    let gameScore = document.querySelector(".scores");
    
    rockBtn.addEventListener("click", () => {
        gameText.textContent = getBattleResult("rock",computerSelection);

        gameBtn.textContent = "Next Round"
        gameBtn.style.visibility = "visible";
        choiceBtn.style.visibility = "hidden";

        gameScore.textContent = (humanScore + " : " + computerScore);
    });

    paperBtn.addEventListener("click", () => {
        gameText.textContent = getBattleResult("paper",computerSelection);

        gameBtn.textContent = "Next Round"
        gameBtn.style.visibility = "visible";
        choiceBtn.style.visibility = "hidden";

        gameScore.textContent = (humanScore + " : " + computerScore);
    });

    scissorsBtn.addEventListener("click", () => {
        gameText.textContent = getBattleResult("scissors",computerSelection);

        gameBtn.textContent = "Next Round"
        gameBtn.style.visibility = "visible";
        choiceBtn.style.visibility = "hidden";

        gameScore.textContent = (humanScore + " : " + computerScore);
    });

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

//Handle Battle
function getBattleResult(humanChoice,computerChoice) {
    if (humanChoice == "rock") {
        if(computerChoice == "rock") return "It's a Tie!";

        if(computerChoice == "paper"){
            computerScore++;
            return "Oof, better luck next time :/";
        } 

        if(computerChoice == "scissors") {
            humanScore++;
            return "You Win!";
        }
    } else if (humanChoice == "paper") {
        if(computerChoice == "rock") {
            humanScore++;
            return "You Win!";
        }

        if(computerChoice == "paper") return "It's a Tie!";

        if(computerChoice == "scissors") {
            computerScore++;
            return "Oof, better luck next time :/";
        }
    } else {
        if(computerChoice == "rock") {
            computerScore++;
            return "Oof, better luck next time :/";
        }

        if(computerChoice == "paper") {
            humanScore++;
            return "You Win!";
        }

        if(computerChoice == "scissors") return "It's a Tie!";
    }
    return "ERROR";
}

//Get a random number between 0 and 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
