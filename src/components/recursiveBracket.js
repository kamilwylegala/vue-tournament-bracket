module.exports = {
    transform(rounds) {
        if (!rounds) {
            return null;
        }

        const totalRounds = rounds.length;

        let currentRound = [];
        let previousRound = [];

        for (let i = 0; i < totalRounds; i++) {
            currentRound = rounds[i].games.map((game) => {
                return {
                    ...game,
                    title: "round " + i,
                    games: [],
                    hasParent: !!rounds[i + 1],
                };
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

        return currentRound[0] || null;
    },
    transformFlatTree(games) {
        const mapOfGamesPerParent = {};
        let root = null;

        games.forEach((game) => {
            if (!game.next && !root) {
                root = game;
                return;
            }

            if (!mapOfGamesPerParent[game.next]) {
                mapOfGamesPerParent[game.next] = [];
            }

            mapOfGamesPerParent[game.next].push(game);
        });

        const tree = {
            ...root,
            title: "round",
            games: [],
            hasParent: false,
        };

        return constructTree(tree, mapOfGamesPerParent, Object.keys(mapOfGamesPerParent).length);
    },
};

function constructTree(tree, mapOfChildren, processedRound) {
    const totalChildren = mapOfChildren[tree.id] || [];

    tree.title = "round " + processedRound;

    for (let i = 0; i < totalChildren.length; i++) {
        const childGame = totalChildren[i];

        const treeChild = {
            ...childGame,
            title: `round ${[processedRound]}`,
            hasParent: true,
            games: [],
        };

        constructTree(treeChild, mapOfChildren, processedRound - 1);

        tree.games.push(treeChild);
    }

    return tree;
}
