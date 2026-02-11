CHOICES = ['rock', 'paper', 'scissors']

MAX_ROUNDS = 5

BUTTONS = {
    ROCK: document.getElementById('rock'),
    PAPER: document.getElementById('paper'),
    SCISSORS: document.getElementById('scissors')
}

OUTPUTS = {
    PLAYER: document.getElementById('player-score'),
    COMPUTER: document.getElementById('computer-score'),
    ROUND: document.getElementById('round-number'),
}

class RockPaperScissors {
    playerScore
    computerScore
    currentRound

    constructor() {
        this.initializeGame()

        BUTTONS.ROCK.addEventListener('click', () => this.playGame('rock', this.computerChoice))
        BUTTONS.PAPER.addEventListener('click', () => this.playGame('paper', this.computerChoice))
        BUTTONS.SCISSORS.addEventListener('click', () => this.playGame('scissors', this.computerChoice))
    }

    get computerChoice() {
        const RANDOM_INDEX = Math.floor(Math.random() * 3)
        return CHOICES[RANDOM_INDEX]
    }

    get gameResult() {
        if (this.playerScore > this.computerScore) {
            return "Congratulations, you won the game! "
        } else if (this.computerScore > this.playerScore) {
            return "Computer won the game! "
        } else if (this.playerScore === this.computerScore) {
            return "The game is a tie!"
        }
    }

    playGame(userChoice, computerChoice) {
        let result

        if (userChoice === computerChoice) {
            result = "It's a tie!"
        }
        else {
            if (
                (userChoice === 'rock' && computerChoice === 'paper') ||
                (userChoice === 'paper' && computerChoice === 'scissors') ||
                (userChoice === 'scissors' && computerChoice === 'rock')
            ) {
                this.computerScore++
                result = `You lose — ${computerChoice} beats ${userChoice}.`
            }
            else {
                this.playerScore++
                result = `You win — ${userChoice} beats ${computerChoice}.`
            }
        }

        this.showAlerts(userChoice, computerChoice, result)

        this.currentRound++
    }

    showAlerts(userChoice, computerChoice, result) {
        let title = `Round ${this.currentRound}`

        let description = `You chose ${userChoice}, Computer chose ${computerChoice}.`

        setTimeout(() => {
            alert(`${title} \n\n${description} \n\n${result}`)

            this.updateOutputs()

            if (this.currentRound > MAX_ROUNDS) {
                title = `Game over`
                description = `Your final score is ${this.playerScore} and the Computer's final score is ${this.computerScore}.`
                result = this.gameResult
                setTimeout(() => {
                    alert(`${title} \n\n${description} \n\n${result}`)
                    this.initializeGame()                
                }, 500);
            }
        }, 200);
    }

    initializeGame() {
        this.playerScore = 0
        this.computerScore = 0
        this.currentRound = 1
        this.updateOutputs()
    }

    updateOutputs() {
        OUTPUTS.PLAYER.textContent = this.playerScore
        OUTPUTS.COMPUTER.textContent = this.computerScore
        OUTPUTS.ROUND.textContent = this.currentRound
    }
}

new RockPaperScissors
