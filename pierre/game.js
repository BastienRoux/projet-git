class Game {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 20) + 1;
        this.attempts = 0;
        this.found = false;
    }

    checkNumber(number) {
        if (number === this.randomNumber) {
            this.found = true;
            return `Félicitations, vous avez trouvé le nombre en ${this.attempts} tentative(s)!`;
        } else if (number > this.randomNumber) {
            return 'Le nombre est plus petit';
        } else {
            return 'Le nombre est plus grand';
        }
    }

    resetGame() {
        this.attempts = 0;
        this.found = false;
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}

export default Game;
