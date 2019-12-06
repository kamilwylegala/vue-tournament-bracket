<template>
    <div class="vtb-item-players">
        <div>
            <div
                :class="['vtb-player', 'vtb-player1', getPlayerClass(bracketNode.player1)]"
                @mouseover="highlightPlayer(bracketNode.player1.id)"
                @mouseleave="unhighlightPlayer"
            >
                <slot :player="bracketNode.player1" name="player" />
            </div>

            <div
                :class="['vtb-player', 'vtb-player2', getPlayerClass(bracketNode.player2)]"
                @mouseover="highlightPlayer(bracketNode.player2.id)"
                @mouseleave="unhighlightPlayer"
            >
                <slot :player="bracketNode.player2" name="player" />
            </div>
        </div>
        <slot name="player-extension-bottom" :match="matchProperties" />
    </div>
</template>

<script>
    export default {
        name: "game-players",
        props: ["bracketNode", "highlightedPlayerId"],
        computed: {
            matchProperties() {
                return Object.assign({}, this.bracketNode, { games: undefined, hasParent: undefined });
            }
        },
        methods: {
            getPlayerClass(player) {
                if (player.winner === null || player.winner === undefined) {
                    return "";
                }

                let clazz = player.winner ? "winner" : "defeated";

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
    };
</script>
