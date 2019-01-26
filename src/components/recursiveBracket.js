module.exports = {

    transform(rounds) {
        const totalRounds = rounds.length;

        let currentRound;
        let previousRound = [];

        for (let i = 0; i < totalRounds; i++) {
            currentRound = rounds[i].games.map(game => {
                return {
                    player1: game.player1,
                    player2: game.player2,
                    title: "round " + i,
                    games: [],
                    hasParent: !!rounds[i+1]
                }
            });

            if (previousRound.length === 0) {
                previousRound = currentRound;
                continue;
            }


            for (let j = 0; j < previousRound.length; j++) {
                const matchForCurrentGame = Math.floor(j / 2);
                currentRound[matchForCurrentGame].games.push(previousRound[j]);
            }

            previousRound = currentRound;
        }


        return currentRound[0];
    }

};