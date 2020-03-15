class Statistics {
    constructor() {
        this.resultGame = [];
    }

    // add current statistics of game
    addGameStatistic(win, bid) {
        const gameResult = {
            win,
            bid
        };

        this.resultGame.push(gameResult);
    }

    // show game statistics
    showGameStatistic() {
        let howManyGames = this.resultGame.length;
        let wins = this.resultGame.filter(game => game.win).length;
        let loss = this.resultGame.filter(game => !game.win).length;

        return [howManyGames, wins, loss];
    }

}