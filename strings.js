const name = "aashish"
const repocount = 400


console.log(name + " " + repocount)
console.log(`My name is ${name} and My repo count is ${repocount}`)

const gamename = new String('Aashish')

console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase());
console.log(gamename.charAt(6))
console.log(gamename.indexOf('i'))

const newString = gamename.substring(0,5)
console.log(newString)

const aString = gamename.slice(-6,5)
console.log(aString)

const abstring = " dthrr  "
console.log(abstring.trim())

const ist = "aashish@123"
console.log(ist.replace('@','#'))
console.log(ist.includes('123'))
console.log(ist.split('@'))