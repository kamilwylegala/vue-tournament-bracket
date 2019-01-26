# vue-tournament-bracket

Vue component for rendering single elemination tournament brackets.

Based on: https://codepen.io/sdudnyk/pen/bWbqMb

Rendering is based on **flex**, see [browser support](https://caniuse.com/#feat=flexbox).

![Example](https://github.com/kamilwylegala/vue-tournament-bracket/raw/master/docs/example.png)

## Installation and component usage

Install component via:
```
npm install vue-tournament-bracket
```

Example:
```html
<template>
    <bracket :rounds="rounds">
        <template slot="player" slot-scope="{{ player }}">
            {{ player.name }}
        </template>
    </bracket>
<template>

<script>
    import Bracket from "vue-tournament-bracket";

    const rounds = [
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
        components: {
            Bracket
        },
        data() {
            return {
                rounds: rounds
            }
        }
    }
</script>
```

### Player object

Player object requires: `id` property, `winner` is optional, rest is up to you - rendering is customizable via scoped slot.

- `id` is being used for highlighting
- `winner` property applies color for player accordingly, can be also `null` - player's color will be gray

### Styling

Apply your custom style by overriding `Bracket` component CSS. See [BracketNode.vue](./src/components/BracketNode.vue) for all styles being used.

## Development

Checkout repository and:
```
npm install
npm run serve
```

Then open browser and test your changes using `App.vue` main component for development purposes.

See `package.json` to discover available commands.

## License

MIT