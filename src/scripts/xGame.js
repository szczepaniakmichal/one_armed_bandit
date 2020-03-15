class XGame {
    constructor(startMoney) {
        this.stats = new Statistics();
        this.wallet = new Wallet(startMoney);

        document.querySelector("#start").addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }

    render(colors = ['silver', 'silver', 'silver'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}$`;
        } else if (!result && result !== '') {
            result = `Przegrałeś ${bid}$`
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.inputBid.value = '';
    }

    startGame() {
        if (this.inputBid.value < 1) {
            return alert('Kwota jest niepoprawna');
        }
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert('masz za malo srodkow lub jest to nie prawidlowa wartosc');
        }

        this.wallet.changeWalletValue(bid, '-');

        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWalletValue(wonMoney, '+');
        this.stats.addGameStatistic(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistic(), bid, wonMoney);

    }
}


