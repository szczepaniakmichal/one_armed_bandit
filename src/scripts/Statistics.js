class Statistics {
    constructor() {
        this.resultGame = [{win: true, bid: 4}, {win: false, bid: -6}, {win: true, bid: 12}, {win: false, bid: 3},  {win: false, bid: 7} ]
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

// const stats = new Statistics();