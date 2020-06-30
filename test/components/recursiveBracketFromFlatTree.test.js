const recursiveBracket = require("../../src/components/recursiveBracket");

describe("recursive bracket with parent/child marker", () => {
    it("should transform flat tree", () => {
        const result = recursiveBracket.transformFlatTree([
            //Semi
            {
                id: 1,
                next: 3,
                player1: { id: "1", name: "Competitor 1", winner: false },
                player2: { id: "4", name: "Competitor 4", winner: true },
            },
            {
                id: 2,
                next: 3,
                player1: { id: "5", name: "Competitor 5", winner: false },
                player2: { id: "8", name: "Competitor 8", winner: true },
            },

            //Final
            {
                id: 3,
                player1: { id: "4", name: "Competitor 4", winner: false },
                player2: { id: "8", name: "Competitor 8", winner: true },
            },
        ]);

        result.should.be.eql({
            id: 3,
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
            title: "round 1",
            hasParent: false,
            games: [
                {
                    id: 1,
                    next: 3,
                    games: [],
                    hasParent: true,
                    player1: {
                        id: "1",
                        name: "Competitor 1",
                        winner: false,
                    },
                    player2: {
                        id: "4",
                        name: "Competitor 4",
                        winner: true,
                    },
                    title: "round 0",
                },
                {
                    id: 2,
                    next: 3,
                    games: [],
                    hasParent: true,
                    player1: {
                        id: "5",
                        name: "Competitor 5",
                        winner: false,
                    },
                    player2: {
                        id: "8",
                        name: "Competitor 8",
                        winner: true,
                    },
                    title: "round 0",
                },
            ],
        });
    });
});
