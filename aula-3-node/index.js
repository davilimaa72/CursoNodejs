/* 
console.log('Olá,mundo!')

const { error } = require('console')
 const calculadora = require('./meu_modulo')

 calculadora.soma(5,8)
 calculadora.subtracao(8,5)

 const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Digite a sua nota', (resposta)=>{
    if(resposta >=7){
        console.log('aprovado')
    } else{ 
         console.log('reprovado')
    }
    readline.close()
})*/

const { constants } = require('buffer')
const inquirer = require('inquirer')

const prompt =inquirer.createPromptModule()


prompt([
    {name: 'nota1', message:'Qual a sua primeira nota ?'},
    {name: 'nota2', message: 'Qual a sua segunda nota ?'}
]).then((resposta)=>{

   let media = parseInt(resposta.nota1)+parseInt(resposta.nota2)/2

    if (media >=7){
        console.log('aprovado')
    }else{
        console.log('reprovado')
    }
   
}).catch((err)=>{
    console.log(err)
})


const x = '10'
if(!Number.isFinite(x){
    throw new Error('O vlaor de x não é inteiro')
})