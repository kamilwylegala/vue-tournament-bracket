<template>
    <div class="vtb-item">

        <div :class="getBracketNodeClass(bracketNode)"
            
             >
            
            
            <game-players 
                :bracket-node="bracketNode"
                :highlighted-player-id="highlightedPlayerId"
                @onSelectedPlayer="highlightPlayer"
                @onDeselectedPlayer="unhighlightPlayer"
                
            >
                <template slot="player" slot-scope="{ player }">
                    <slot   name="player" :player="player"/>
                </template>
            </game-players>
            
        </div>

        <div v-if="bracketNode.games[0] || bracketNode.games[1]" class="vtb-item-children">
            <div class="vtb-item-child" v-if="bracketNode.games[0]">
                <bracket-node
                    :bracket-node="bracketNode.games[0]"
                    :highlighted-player-id="highlightedPlayerId"
                    @onSelectedPlayer="highlightPlayer"
                    @onDeselectedPlayer="unhighlightPlayer"
                >
                    <template slot="player" slot-scope="{ player }">
                        <slot name="player" :player="player"/>
                    </template>
                </bracket-node>
            </div>
            <div class="vtb-item-child" v-if="bracketNode.games[1]">
                <bracket-node
                    :bracket-node="bracketNode.games[1]"
                    :highlighted-player-id="highlightedPlayerId"
                    @onSelectedPlayer="highlightPlayer"
                    @onDeselectedPlayer="unhighlightPlayer"
                >
                    <template slot="player" slot-scope="{ player }">
                        <slot name="player" :player="player"/>
                    </template>
                </bracket-node>
            </div>
        </div>

    </div>
</template>

<script>
    import GamePlayers from "./GamePlayers";

    export default {
        name: "bracket-node",
        components: {GamePlayers},
        props: ["bracketNode", "highlightedPlayerId"],
        methods: {

            test(playerId){
                console.log(playerId);
            },
            getBracketNodeClass(bracketNode) {
                if (bracketNode.games[0] || bracketNode.games[1]) {
                    return "vtb-item-parent";
                }

                if (bracketNode.hasParent) {
                    return "vtb-item-child";
                }

                return "";
            },
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

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    /* The tournament */
    .vtb-item {
        display: flex;
        flex-direction: row-reverse;
    }

    .vtb-item p {
        padding: 20px;
        margin: 0;
        background-color: #999999;
    }

    .vtb-item-parent {
        position: relative;
        margin-left: 50px;
        display: flex;
        align-items: center;
    }

    /* css for both players */
    .vtb-item-players {
        flex-direction: column;
        background-color: #999999;
        margin: 0;
        color: white;
        /* text-shadow: -3px 3px 2px black; */
    }

    .vtb-item-players div {
        padding: 10px;
	min-width: 100px;
	text-align: center;
    }

    .vtb-item-players .winner {
        background-color: #66e666;
        
    }

    .vtb-item-players .defeated {
        background-color: #c44444;
    }

    .vtb-item-players .winner.highlight {
        background-color: #88f888;
    }

    .vtb-item-players .defeated.highlight {
        background-color: #f66666;
    }
    .vtb-item-players .waiting{
        background-color: #abbccd;
	    color: black;
    }
     .vtb-item-players .waiting.highlight {
        background-color: #abcdef;
    }


    .vtb-item-parent:after {
        position: absolute;
        content: '';
        width: 25px;
        height: 2px;
        left: 0;
        top: 50%;
        background-color: gray;
        transform: translateX(-100%);
    }

    .vtb-item-children {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .vtb-item-child {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
    }
    
   

    .vtb-item-child:before {
        content: '';
        position: absolute;
        background-color: gray;
        right: 0;
        top: 50%;
        transform: translateX(100%);
        width: 25px;
        height: 2px;
    }

    .vtb-item-child:after {
        content: '';
        position: absolute;
        background-color: gray;
        right: -25px;
        height: calc(50% + 22px);
        width: 2px;
        top: 50%;
    }

    .vtb-item-child:last-child:after {
        transform: translateY(-100%);
    }

    .vtb-item-child:only-child:after {
        display: none;
    }

</style>
