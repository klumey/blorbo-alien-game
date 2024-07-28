/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Blorbo Alien
@author: klumey/Kornelia :)
@tags: []
@addedOn: 2024-00-00
*/


//controls
onInput("d", () => {
  // Move the player one tile to the right
  getFirst(player).x += 1
})
onInput("s", () => {
  getFirst(player).y += 1;
});
onInput("a", () => {
  // Move the player one tile to the left
  getFirst(player).x -= 1
})

onInput("w", () => {
  // Move the player one tile up
  getFirst(player).y -= 1
})



//objects
const player = "p"
const grass = "g"
const flower = "f"
setLegend(
  [ player, bitmap`
................
................
................
....4....4......
.....4444.......
.....44444......
....400400D.....
....400400D.....
.....44DDD......
....4444444.....
...44444444D....
...4444444DD....
...444444DDD....
....44DDDDD.....
................
................` ],
  [ grass, bitmap`
2222222222222222
2226622222222222
2266262222222222
2262266262222222
2262226662262222
2262262262662222
2226266226626222
2222222226226622
2222222226262662
2266222226266222
2666222222222222
2626622622222622
2622662662226622
2662266662266662
2262622222262262
2222222222222222`],
  [ flower, bitmap`
................
................
................
................
.....7.3.7......
.....77377......
......7777......
.......F........
....FF.FF.FF....
.....FFFFF......
.......FF.......
........F.......
........F.......
................
................
................`],
  );
//level + map
let level = 0;

const levels = [
  map`
ggggg
gfgfg
ggggg
pgfgg
ggggg`
];
const currentLevel = levels[level];
setMap(currentLevel);

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})
