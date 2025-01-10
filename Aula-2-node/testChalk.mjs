import chalk from "chalk";
const nota = 7;
if(nota >=7){
    console.log(chalk.green.bold("Parabéns, você passou"))
}else{
    console.log(chalk.bgRed.black("Você precisa fazer recuperação"))
}