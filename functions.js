function getComputerChoice () {
    switch (getRandomInt(3)) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

function getHumanChoice () {
    let choice = "";
    while(choice != "Rock" && choice != "Paper"
         && choice != "Scissors") {
            
        choice = prompt("What's your choice?");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
