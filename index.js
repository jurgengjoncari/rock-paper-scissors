shapes = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

function playRound(playerSelection) {
    let result = undefined

    const computerSelection = shapes[Math.floor(Math.random() * 3)]

    if (playerSelection == computerSelection) {
        result = 'Draw.'
    } else {
        if (
            (playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
            result = `You lose! ${computerSelection} beats ${playerSelection}.`
            computerScore++
            computer.textContent = computerScore
        } else {
            result = `You win! ${playerSelection} beats ${computerSelection}.`
            playerScore++
            player.textContent = playerScore
        }
    }
    resultLine.textContent = result
}

const resultLine = document.getElementById('result')

const player = document.getElementById('player')
const computer = document.getElementById('computer')

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => playRound('rock'))
paper.addEventListener('click', () => playRound('paper'))
scissors.addEventListener('click', () => playRound('scissors'))
