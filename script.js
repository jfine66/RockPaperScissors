
// Generates Cpu guess
function computerPlay(){
    let guess = Math.floor(Math.random() * 3);

    if(guess === 0){
        return 'rock'
    } else if(guess === 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}


// Plays one round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'Draw'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Player wins the round!'
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Cpus wins the round!'
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Player wins the round!'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Cpus wins the round!'
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Player wins the round!'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'Cpus wins the round!'
    }
}

// gets buttons and para elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const winner = document.getElementById('winner');
const player = document.getElementById('playerscore');
const cpu = document.getElementById('cpuscore');

// Keeps score 
let playerScore = 0;
let cpuScore = 0;

// buttons listeners
rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click',game);


function game(){
    let result = playRound('scissors', computerPlay());
    if(result === 'Player wins the round!'){
        playerScore++;
    } else if(result === 'Cpus wins the round!'){
        cpuScore++;
    } 

    winner.innerText = result;
    player.innerText = `Player Score: ${playerScore}`;
    cpu.innerHTML = `Computer Score: ${cpuScore}`;

    if(playerScore === 5){
        alert('Player Wins!!!!')
        winner.innerText = 'Who will win?';
        player.innerText = `Player Score: 0`;
        cpu.innerHTML = `Computer Score: 0`;

    } else if(cpuScore === 5){
        alert('Cpu Wins! Better Luck Next Time!')
        winner.innerText = 'Who will win?';
        player.innerText = `Player Score: 0`;
        cpu.innerHTML = `Computer Score: 0`;
    }
}






