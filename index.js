const choices = ['rock', 'paper', 'scissors']

// Get buttons
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

let playerScore
let computerScore

initialize()

// Event listeners for the buttons
rock.addEventListener('click', () => playRound('rock'))
paper.addEventListener('click', () => playRound('paper'))
scissors.addEventListener('click', () => playRound('scissors'))

function initialize() {
    playerScore = 0
    computerScore = 0
    updateScoreOutput()
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "It's a tie!"
    } else {
        if (
            (userChoice == 'rock' && computerChoice == 'paper') ||
            (userChoice == 'paper' && computerChoice == 'scissors') ||
            (userChoice == 'scissors' && computerChoice == 'rock')
        ) {
            computerScore++
            return `You lose - ${computerChoice} beats ${userChoice}.`
        } else {
            playerScore++
            return `You win - ${userChoice} beats ${computerChoice}.`
        }
    }
}

function updateScoreOutput() {
    const playerScoreOutput = document.getElementById('playerScore')
    const computerScoreOutput = document.getElementById('computerScore')
    playerScoreOutput.textContent = playerScore
    computerScoreOutput.textContent = computerScore
}

function playRound(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    alert(`You chose ${userChoice}, computer chose ${computerChoice}. \n\n${determineWinner(userChoice, computerChoice)}`)
    updateScoreOutput()
}
