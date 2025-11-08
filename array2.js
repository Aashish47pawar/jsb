const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel.push(dc)
//console.log(marvel)
//console.log(marvel[3][1])

//const allhero = marvel.concat(dc)
//console.log(allhero)

const allheros = [...marvel,...dc]
console.log(allheros)

const aa = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const reale = aa.flat(Infinity)
console.log(reale)

console.log(Array.isArray("Aashish"))
console.log(Array.from("Aashish"))

console.log(Array.from({name:"hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); 