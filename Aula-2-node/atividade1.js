// Crie um modulo chamado calculadora e importe ela para o arquivo index.js, depois utilize o modulo minimist para receber do usuario dois numeros, mostre as operaçoes de soma, subtração, multiplicação, e divisão desses dois número.

const calculadora = require('./calculadora')
const minimist = require('minimist')

let numeros = minimist(process.argv.splice(2))

let a = numeros["n1"]
let b = numeros['n2']

calculadora.soma(a,b)
calculadora.subtracao(a,b)
calculadora.multiplicacao(a,b)
calculadora.divisao(a,b)


