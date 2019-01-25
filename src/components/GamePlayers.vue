<template>
    <div class="vtb-item-players">

        <div
            :class="getPlayerClass(bracketNode.player1)"
            @mouseover="highlightPlayer(bracketNode.player1.id)"
            @mouseleave="unhighlightPlayer"
        >
            <slot :player="bracketNode.player1" name="player"/>
        </div>

        <div
            :class="getPlayerClass(bracketNode.player2)"
            @mouseover="highlightPlayer(bracketNode.player2.id)"
            @mouseleave="unhighlightPlayer"
        >
            <slot :player="bracketNode.player2" name="player"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "game-players",
        props: ["bracketNode", "highlightedPlayerId"],
        methods: {
            getPlayerClass(player) {
                if (player.winner === null || player.winner === undefined) {
                    return "";
                }

                let clazz = player.winner
                    ? "winner"
                    : "defeated";

                if (this.highlightedPlayerId === player.id) {
                    clazz += " highlight";
                }

                return clazz;
            },
            highlightPlayer(playerId) {
                this.$emit("onSelectedPlayer", playerId);
            },
            unhighlightPlayer() {
                this.$emit("onDeselectedPlayer");
            }
        }
    }
</script>