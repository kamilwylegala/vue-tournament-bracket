# vue-tournament-bracket

Vue component for rendering single elemination tournament brackets.

Based on: [https://codepen.io/sdudnyk/pen/bWbqMb](https://codepen.io/sdudnyk/pen/bWbqMb).

Rendering is based on **flex**, see [browser support](https://caniuse.com/#feat=flexbox).

![Example](https://github.com/kamilwylegala/vue-tournament-bracket/raw/master/docs/example.png)

Real life example can be found here: [martialmatch.com](https://martialmatch.com/).
 
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
        //Semi finals
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

#### Third place play-off

Here is the way to represent third place play-off:
```javascript
const rounds = [
        //Semi finals
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
    ];
```

![Third place play-off](https://github.com/kamilwylegala/vue-tournament-bracket/raw/master/docs/thirdplaceplayoff.png)

#### Bottom slot

There is slot with whole match props, use it in following way:
```html
<bracket :rounds="rounds">
    <template #player="{ player }">
        {{ player.name }}
    </template>
    <template #player-extension-bottom="{ match }">
        Extra info: {{ match.title }}
    </template>
</bracket>
```
May be useful for example for showing tooltips etc.

![Bottom slot for match](https://github.com/kamilwylegala/vue-tournament-bracket/raw/master/docs/bottom-slot.png)

### Game object

Game object requires `player1` and `player2` objects. You can also add your own and e.g. reuse it in `players-extension-bottom` slot.

Following properties are forbidden and are going to be replaced with `undefined`:
- `games`
- `hasParent`

See `matchProperties` in `GamePlayers` for details.

### Alternative input - flat tree

Version 2.1 introduces option to build bracket tree from flat tree structure where child node points to its parent node. Structure is a bit simple but requires two additional properties on each game object: `id`, `next`. It might be helpful in generating double elimination brackets with repechages. Example:

```
 const rounds = [
        //Repechage 1 of 3
        {
            id: 1,
            next: 5, //Will be connected to game with id 5
            player1: { id: "4", name: "Competitor 4", winner: true },
            player2: { id: "5", name: "Competitor 5", winner: false },
        },
        {
            id: 2,
            next: 6,
            player1: { id: "7", name: "Competitor 7", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },

        //Repechage 2 of 3
        {
            id: 5,
            next: 7,
            player1: { id: "1", name: "Competitor 1", winner: false },
            player2: { id: "4", name: "Competitor 4", winner: true },
        },
        {
            id: 6,
            next: 7,
            player1: { id: "3", name: "Competitor 3", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },
        
        //Repechage 3 of 3 - 3rd place match
        {
            id: 7,
            player1: { id: "4", name: "Competitor 4", winner: false },
            player2: { id: "8", name: "Competitor 8", winner: true },
        },
    ];
```

Initialize bracket with `flatTree` props:
```html
<bracket :flat-tree="rounds">
```

It generates following bracket:

![Repechage](https://github.com/kamilwylegala/vue-tournament-bracket/raw/master/docs/flat-tree.png)


### Player object

Player object requires: `id` property, `winner` is optional, rest is up to you - rendering is customizable via scoped slot.

- `id` is being used for highlighting
- `winner` property applies color for player accordingly, can be also `null` - player's color will be gray

### Styling

Apply your custom style by overriding `Bracket` component CSS. See [BracketNode.vue](./src/components/BracketNode.vue) for all styles being used.

## Development

Required Node.js version is **14.0.0** (eslint).

Checkout repository and:
```
npm install
npm run serve
```

Then open browser and test your changes using `App.vue` main component for development purposes.

See `package.json` to discover available commands.

## Releasing

```
npm test
npm run eslint
npm run build
git commit
npm version <version>
git push
npm publish --access=public
```

## License

MIT
