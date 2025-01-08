
console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]
const idade = args[1].slipt('=')[1]

console.log(`olá ${nome} você tem ${idade}`)