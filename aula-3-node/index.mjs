import chalk from "chalk"
console.log(chalk.green('Olá mundo'))

const nota = 7
    if(nota >=7){
        console.log(chalk.bgGreen('Você foi aprovado'))
    } else{ 
    console.log(chalk.bgRed('Você foi reprovado'))
}




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Digite a sua nota', (resposta)=>{
    if(resposta >=7){
        console.log('Você foi aprovado')
    } else{ 
    console.log('Você foi reprovado')
}})