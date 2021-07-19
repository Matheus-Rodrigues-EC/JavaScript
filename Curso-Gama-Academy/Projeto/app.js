const livros = require('./database.js');

//Pegar o Input
const readline = require("readline-sync");

const EntradaInicial = readline.question("Deseja buscar um livro por categoria ? S/N ")

//Se a resposta for sim.
if(EntradaInicial.toLocaleUpperCase() === 'S'){
    console.log("Essas são as categorias disponíveis: ");
    console.log( "Algoritmos/ Ficcao / Fisica/ Misterio/ Terror/");

    const EntradaCategoria = readline.question('Qual categoria voce escolhe ? ');

    const retorno = livros.filter(livro => livro.categoria === EntradaCategoria);

    console.table(retorno)
}else{
//Se a resposta for não.
    const livrosOdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log("Esses são todos os livros disponiveis: ");
    console.table(livrosOdenados);
}