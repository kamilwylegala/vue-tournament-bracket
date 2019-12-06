const should = require("should");
const recursiveBracket = require("../../src/components/recursiveBracket");

describe("recursive bracket", () => {

    it("should provide all properties for game object from input so it's available in players-extension slot", () => {
        const result = recursiveBracket.transform([
            {
                games: [
                    {
                        player1: { id: "4", name: "Competitor 4", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                        matchResult: "Winner by points"
                    }
                ]
            }
        ]);

        result.should.be.eql({
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
            matchResult: "Winner by points",
            title: "round 0",
            hasParent: false,
            games: []
        });
    });

    it("should transform one game bracket", () => {
        const result = recursiveBracket.transform([
            {
                games: [
                    {
                        player1: { id: "4", name: "Competitor 4", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                    }
                ]
            }
        ]);

        result.should.be.eql({
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
            title: "round 0",
            hasParent: false,
            games: []
        });
    });

    it("should transform game with semifinals and final", () => {
        const result = recursiveBracket.transform([
            //Semi
            {
                games: [
                    {

                        player1: { id: "1", name: "Competitor 1", winner: false },
                        player2: { id: "4", name: "Competitor 4", winner: true },
                    },
                    {

                        player1: { id: "5", name: "Competitor 5", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                    }
                ]
            },
            //Final
            {
                games: [
                    {
                        player1: { id: "4", name: "Competitor 4", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                    }
                ]
            }
        ]);

        result.should.be.eql({
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
            title: "round 1",
            hasParent: false,
            games: [
                {
                    games: [],
                    hasParent: true,
                    player1: {
                        id: "1",
                        name: "Competitor 1",
                        winner: false
                    },
                    player2: {
                        id: "4",
                        name: "Competitor 4",
                        winner: true
                    },
                    title: "round 0"
                },
                {
                    games: [],
                    hasParent: true,
                    player1: {
                        id: "5",
                        name: "Competitor 5",
                        winner: false
                    },
                    player2: {
                        id: "8",
                        name: "Competitor 8",
                        winner: true
                    },
                    title: "round 0"
                }
            ]
        });
    });

    it("should transform game with semifinals, consolidation round and final", () => {
        const result = recursiveBracket.transform([
            //Semi
            {
                games: [
                    {

                        player1: { id: "1", name: "Competitor 1", winner: false },
                        player2: { id: "4", name: "Competitor 4", winner: true },
                    },
                    {

                        player1: { id: "5", name: "Competitor 5", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                    }
                ]
            },
            //Third place play off
            {
                games: [
                    {
                        player1: { id: "1", name: "Competitor 1", winner: false },
                        player2: { id: "5", name: "Competitor 5", winner: true },
                    }
                ]
            },
            //Final
            {
                games: [
                    {
                        player1: { id: "4", name: "Competitor 4", winner: false },
                        player2: { id: "8", name: "Competitor 8", winner: true },
                    }
                ]
            }
        ]);

        result.should.be.eql({
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
            title: "round 2",
            hasParent: false,
            games: [
                {
                    player1: {
                        id: "1",
                        name: "Competitor 1",
                        winner: false
                    },
                    player2: {
                        id: "5",
                        name: "Competitor 5",
                        winner: true
                    },
                    hasParent: true,
                    title: "round 1",
                    games: [
                        {
                            player1: {
                                id: "1",
                                name: "Competitor 1",
                                winner: false
                            },
                            player2: {
                                id: "4",
                                name: "Competitor 4",
                                winner: true
                            },
                            hasParent: true,
                            title: "round 0",
                            games: []
                        },
                        {
                            player1: {
                                id: "5",
                                name: "Competitor 5",
                                winner: false
                            },
                            player2: {
                                id: "8",
                                name: "Competitor 8",
                                winner: true
                            },
                            hasParent: true,
                            title: "round 0",
                            games: []
                        }
                    ]
                }
            ]
        });
    });

    it("should return null output for empty rounds array", () => {
        const result = recursiveBracket.transform([]);

        should(result).be.null();
    });

    it("should return null output for empty null rounds", () => {
        const result = recursiveBracket.transform(null);

        should(result).be.null();
    });

});
