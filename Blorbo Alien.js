/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Blorbo Alien
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

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
................` ]
)

setSolids([])

let level = 0
const levels = [
  map`
p.
..`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})