<template>
    <bracket :rounds="rounds">
        <template slot="player" slot-scope="{ player }">
            {{ player.name }}
        </template>
    </bracket>
</template>

<script>
    import Bracket from "./Bracket";

    const rounds = [
        //Quarter
        {
            games: [
                {
                    player1: { id: "1", name: "Competitor 1", winner: true },
                    player2: { id: "2", name: "Competitor 2", winner: false }
                },
                {
                    player1: { id: "3", name: "Competitor 3", winner: false },
                    player2: { id: "4", name: "Competitor 4", winner: true },
                },
                {
                    player1: { id: "5", name: "Competitor 5", winner: true },
                    player2: { id: "6", name: "Competitor 6", winner: false }
                },
                {
                    player1: { id: "7", name: "Competitor 7", winner: false },
                    player2: { id: "8", name: "Competitor 8", winner: true },
                }
            ],
        },
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
    ];

    export default {
        name: "app",
        components: {
            Bracket
        },
        data() {
            return {
                rounds: rounds
            }
        }
    };
</script>
