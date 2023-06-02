const choices = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0
let result


const playerScoreOutput = document.getElementById('playerScore')
const computerScoreOutput = document.getElementById('computerScore')

const resultLine = document.getElementById('result')

// Get buttons
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

// Event listeners for the buttons
rock.addEventListener('click', () => playRound('rock'))
paper.addEventListener('click', () => playRound('paper'))
scissors.addEventListener('click', () => playRound('scissors'))

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        result += "It's a tie!"
    } else {
        if (
            (userChoice == 'rock' && computerChoice == 'paper') ||
            (userChoice == 'paper' && computerChoice == 'scissors') ||
            (userChoice == 'scissors' && computerChoice == 'rock')
        ) {
            result += `You lose! ${computerChoice} beats ${userChoice}.`
            computerScore++
            computerScoreOutput.textContent = computerScore
        } else {
            result += `You win! ${userChoice} beats ${computerChoice}.`
            playerScore++
            playerScoreOutput.textContent = playerScore
        }
    }
}

function playRound(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    result = `You chose ${userChoice}, computer chose ${computerChoice}. `
    determineWinner(userChoice, computerChoice)
    resultLine.textContent = result
}
