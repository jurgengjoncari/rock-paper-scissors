const shapes = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

function playRound() {
    let winner = undefined
    let result = undefined

    const playerSelection = prompt('Choose a shape: ', 'rock')
    const computerSelection = shapes[Math.floor(Math.random() * 3)]

    if (playerSelection == computerSelection) {
        result = 'Draw'
    } else {
        if (
            (playerSelection.toLowerCase() == 'rock' &&
                computerSelection == 'paper') ||
            (playerSelection.toLowerCase() == 'paper' &&
                computerSelection == 'scissors') ||
            (playerSelection.toLowerCase() == 'scissors' &&
                computerSelection == 'rock')
        ) {
            result = `You lose! ${computerSelection} beats ${playerSelection}.`
            playerScore++
            winner = 'Computer'
        } else {
            result = `You win! ${playerSelection} beats ${computerSelection}.`
            computerScore++
            winner = 'Player'
        }
    }
    console.log(result)
    return winner
}

;(function game() {
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

    playerScore = 0
    computerScore = 0
})()
