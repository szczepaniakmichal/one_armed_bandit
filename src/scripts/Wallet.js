class Wallet {
    constructor(money) {
        let _money = money;

        // get value of wallet
        this.getWalletValue = function () {
            return _money;
        };

        // check if the user has enough money in the account for play
        this.checkCanPlay = (value) => {
            if ( value <= _money ) {
               return  true;
            } else if ( value > _money) {
               return  false;
            } else {
                throw new Error('incorrect data');
            }
        };

        this.changeWalletValue = (value, type = "-") => {
            if (typeof value === "number" && !isNaN(value) ) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                }
            } else {
                console.log(typeof  value);
                throw new Error("incorrect data")
            }
        }
    }
}
