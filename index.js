class RockPaperScissors {
    CHOICES = ['rock', 'paper', 'scissors']

    MAX_ROUNDS = 5

    BUTTON_ELEMENTS = {
        ROCK: document.getElementById('rock'),
        PAPER: document.getElementById('paper'),
        SCISSORS: document.getElementById('scissors')
    }

    SCORE_OUTPUT_ELEMENTS = {
        PLAYER: document.getElementById('playerScore'),
        COMPUTER: document.getElementById('computerScore')
    }

    playerScore
    computerScore
    currentRound

    constructor() {
        this.initializeGame()

        this.BUTTON_ELEMENTS.ROCK.addEventListener('click', () => this.playGame('rock'))
        this.BUTTON_ELEMENTS.PAPER.addEventListener('click', () => this.playGame('paper'))
        this.BUTTON_ELEMENTS.SCISSORS.addEventListener('click', () => this.playGame('scissors'))
    }

    initializeGame() {
        this.playerScore = 0
        this.computerScore = 0
        this.currentRound = 0
        this.updateScoreOutputElements()
    }

    getComputerChoice() {
        const RANDOM_INDEX = Math.floor(Math.random() * 3)
        return this.CHOICES[RANDOM_INDEX]
    }

    playGame(userChoice) {
        let computerChoice = this.getComputerChoice()
        this.currentRound++

        let result
        if (userChoice == computerChoice) {
            result = "It's a tie!"
        } else {
            if (
                (userChoice == 'rock' && computerChoice == 'paper') ||
                (userChoice == 'paper' && computerChoice == 'scissors') ||
                (userChoice == 'scissors' && computerChoice == 'rock')
            ) {
                this.computerScore++
                result = `You lose - ${computerChoice} beats ${userChoice}.`
            } else {
                this.playerScore++
                result = `You win - ${userChoice} beats ${computerChoice}.`
            }
        }
        this.updateUI(userChoice, computerChoice, result)
    }

    getGameResult() {
        if (this.playerScore > this.computerScore) {
            return "Congratulations, you win this game! "
        } else if (this.computerScore > this.playerScore) {
            return "Computer wins the game! "
        } else if (this.playerScore === this.computerScore) {
            return "It's a tie game!"
        }
    }

    updateUI(userChoice, computerChoice, result) {
        let title = `Round ${this.currentRound}/${this.MAX_ROUNDS}`
        let description = `You chose ${userChoice}, Computer chose ${computerChoice}.`

        this.updateScoreOutputElements()
        setTimeout(() => {
            alert(`${title} \n\n${description} \n\n${result}`)            
            if (this.currentRound === this.MAX_ROUNDS) {
                title = `Game ended`
                description = `Your final score is ${this.playerScore} and the Computer's final score is ${this.computerScore}.`
                result = this.getGameResult()
                setTimeout(() => {
                    alert(`${title} \n\n${description} \n\n${result}`)
                    this.initializeGame()                
                }, 200);
            }
        }, 200);
    }
    
    updateScoreOutputElements() {
        this.SCORE_OUTPUT_ELEMENTS.PLAYER.textContent = this.playerScore
        this.SCORE_OUTPUT_ELEMENTS.COMPUTER.textContent = this.computerScore
    }
}

new RockPaperScissors
