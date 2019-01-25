<template>
    <div class="vtb-wrapper">
        <bracket-node
            :bracket-node="recursiveBracket"
            @onSelectedPlayer="highlightPlayer"
            @onDeselectedPlayer="unhighlightPlayer"
            :highlighted-player-id="highlightedPlayerId"
        >
            <template slot="player" slot-scope="{ player }">
                <slot name="player" :player="player"/>
            </template>
        </bracket-node>
    </div>
</template>

<script>
    import BracketNode from "./components/BracketNode";
    import recursiveBracket from "./components/recursiveBracket";

    export default {
        name: "bracket",
        components: {
            "bracket-node": BracketNode
        },
        props: ["rounds"],
        data() {
            return {
                highlightedPlayerId: null,
            };
        },
        computed: {
            recursiveBracket() {
                return recursiveBracket.transform(this.rounds);
            }
        },
        methods: {
            highlightPlayer(id) {
                this.highlightedPlayerId = id;
            },
            unhighlightPlayer() {
                this.highlightedPlayerId = null;
            }
        }
    };
</script>

<style>
    .vtb-wrapper {
        display: flex;
        height: 100%;
    }
</style>