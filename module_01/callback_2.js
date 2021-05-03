const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'mock/dados.txt')

function exibirConteudoAsync(err,conteudo) {
    console.log('Async Result');
    console.log(conteudo.toString())
    console.log('Fim Async Result\n');
}

console.log('Inicio Async')
fs.readFile(caminho, {}, exibirConteudoAsync)
fs.readFile(caminho, exibirConteudoAsync) // midlle param optional
console.log('Fim Async\n')

console.log('Inicio Sync')
let conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString());
console.log('Fim Sync\n')

//And this is to go even further beyond

let exibirConteudoSync = (path) => console.log('Sync Reading Function Result:\n',fs.readFileSync(path).toString())

exibirConteudoSync(caminho)