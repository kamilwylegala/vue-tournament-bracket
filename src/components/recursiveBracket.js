module.exports = {

    transform(rounds) {
        const totalRounds = rounds.length;

        let currentGames;
        let previousGames = [];

        for (let i = 0; i < totalRounds; i++) {
            currentGames = rounds[i].games.map(game => {
                return {
                    player1: game.player1,
                    player2: game.player2,
                    title: "round " + i,
                    games: []
                }
            });

            if (previousGames.length === 0) {
                previousGames = currentGames;
                continue;
            }


            for (let j = 0; j < previousGames.length; j++) {
                const matchForCurrentGame = Math.floor(j / 2);
                currentGames[matchForCurrentGame].games.push(previousGames[j]);
            }

            previousGames = currentGames;
        }


        return currentGames[0];
    }

};