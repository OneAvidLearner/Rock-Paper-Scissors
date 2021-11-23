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
    result.style.fontSize = "30px"; 

    if(playerSelection == computerSelection){
        result.textContent = `It's a draw
        The current score is ${winCounter} - ${lossCounter}`;
    }

    else if (playerSelection == "rock"){
        switch (computerSelection){
            case "paper":
                lossCounter++;
                result.textContent = `You Lose! Paper beats Rock
                The current score is ${winCounter} - ${lossCounter}`;
    
                break;
            case "scissors":
                winCounter++;
                result.textContent = `You Win! Rock beats Scissors
                The current score is ${winCounter} - ${lossCounter}`;

                break;
        }
    }
    else if(playerSelection == "paper"){
        switch (computerSelection){
            case "rock":
                winCounter++;
                result.textContent = `You Win! Paper beats Rock
                The current score is ${winCounter} - ${lossCounter}`;

                break;
            case "scissors":
                lossCounter++;
                result.textContent = `You Lose! Scissors beats Paper
                The current score is ${winCounter} - ${lossCounter}`;
                
                break;
        }
    }
    else {
        switch (computerSelection){
            case "rock":
                lossCounter++;
                result.textContent = `You Lose! Rock beats Scissors
                The current score is ${winCounter} - ${lossCounter}`;
                
                break; 
            case "paper":
                winCounter++;
                result.textContent = `You Win! Scissors beats Paper
                The current score is ${winCounter} - ${lossCounter}`;
                
                break;
        }
        
    }
    game();


}
const rck = document.querySelector('#rck');
rck.addEventListener('click', function(e){
    playRound('rock', computerPlay());
});

const ppr = document.querySelector('#ppr');
ppr.addEventListener('click', function(e){
    playRound('rock', computerPlay());
});

const scs = document.querySelector('#scs');
scs.addEventListener('click', function(e){
    playRound('rock', computerPlay());
});

result = document.querySelector('#result')


function game(){
    if(winCounter==5){
        result.style.fontSize = "50px"; 
        result.textContent = `You Won!
        The Final score is ${winCounter} - ${lossCounter}`;
        winCounter=0;
        lossCounter=0;
        
    }
    else if (lossCounter==5){
        result.style.fontSize = "50px"; 
        result.textContent = `You Lost!
        The Final score is ${winCounter} - ${lossCounter}`;
        winCounter=0;
        lossCounter=0;
        
    }


}

game();
