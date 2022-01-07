const shapes = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

function setPlayerSelection() {
    return prompt('Choose a shape: ')
}

function getComputerSelection() {
    return shapes[Math.floor(Math.random() * 3)]
}

function playRound() {
    const playerSelection = setPlayerSelection()
    const computerSelection = getComputerSelection()

    let winner = undefined
    let result = undefined

    if (playerSelection == computerSelection) {
        result = 'Draw'
    } else {
        if (playerSelection.toLowerCase() == 'rock') {
            if (computerSelection == 'paper') {
                winner = false
            }
        } else if (playerSelection.toLowerCase() == 'paper') {
            if (computerSelection == 'scissors') {
                winner = false
            }
        } else if (playerSelection.toLowerCase() == 'scissors') {
            if (computerSelection == 'rock') {
                winner = false
            }
        } else {
            winner = true
        }
        if (winner) {
            playerScore++
            result = `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            computerScore++
            result = `You lose! ${computerSelection} beats ${playerSelection}.`
        }
    }
    console.log(result)
    return winner
}

// playRound()

function game() {
    let finalResult = undefined

    for (i = 0; i < 5; i++) {
        playRound()
    }

    if (playerScore == computerScore) {
        finalResult = "It's a tie"
    } else {
        if (playerScore > computerScore) {
            finalResult = 'Condragulations! You are the winner of the game.'
        } else {
            finalResult =
                'Better luck next time! Computer is the winner of the game.'
        }
    }
    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log(finalResult)
}

game()

playerScore = 0
computerScore = 0