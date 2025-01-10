const minimist = require("minimist")
console.log(process.argv)

// let argumentos = process.argv.splice(2)
// console.log(argumentos)

// let chave = argumentos[0].split('=')[0]

// let valor = argumentos[0].split('=')[1]
// console.log(chave,valor)


let argumentosM = minimist(process.argv.splice(2))
console.log(argumentosM)

let nome = argumentosM['nome']
let idade = argumentosM['idade']
console.log(`Olá ${nome}, sua idade é ${idade}`)