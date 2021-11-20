let winCounter=0;
let lossCounter=0;
function computerPlay(){
    let result = Math.floor(Math.random()*3);

    switch (result){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return "It's a Draw";
    }

    else if (playerSelection == "rock"){
        switch (computerSelection){
            case "paper":
                lossCounter++;
                return "You Lose! Paper beats Rock";
            case "scissors":
                winCounter++;
                return "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection == "paper"){
        switch (computerSelection){
            case "rock":
                winCounter++;
                return "You Win! Paper beats Rock";
            case "scissors":
                lossCounter++;
                return "You Lose! Scissors beats Paper";
        }
    }
    else {
        switch (computerSelection){
            case "rock":
                lossCounter++;
                return "You Lose! Rock beats Scissors";
            case "paper":
                winCounter++;
                return "You Win! Scissors beats Paper";
        }

    }


}
function game(){
    let choice = prompt("Make a choice");

    for (let i = 0; i<5; i++){
        
        console.log(playRound(choice,computerPlay(choice)));
    }
    console.log(`The final score is ${winCounter} - ${lossCounter} ${(winCounter>lossCounter)?"You win":(winCounter==lossCounter)?"It's a draw":"You lose"}`)
}

game();
