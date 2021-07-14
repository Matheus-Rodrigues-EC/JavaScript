console.log("Hello World")

//formas de declarar variáveis
var Myname = "Matt";
let language = "JavaScript";
const pattern = "ECMAScript"; // Esse tipo de variável sempre deve ser inicializada.
/*
    Disponibilidade das variáveisno código       var     let     const

        Escopo global                             V       X        X
        Escopo de função                          V       V        V
        Escopo bloqueado                          X       V        V
        Pode ser ressignificado ?                 V       V        X
        Pode ser redeclarado                      V       X        X
        Pode ser hospedado                        V       X        X
*/
//esses comandos o é para printar um valor no terminal
console.log(Myname);
console.log(language);
console.log(pattern);

//Objetos, Arrays e Function

//Para declarar um objeto faz se o seguinte comando
var Person = {
    //aqui você coloca os atributos do seu objeto
    //chave, valor
    "nome": "Matt",
    "Idade": 23
}

//Para declarar Arrays, usa-se o seguinte comando
var students = ["Matt", "Stefane", "Andreina", "Jeimison"];

//Para declarar functions, usa-se o seguinte comando
function Sum(a, b){
    return a + b;
}

//O operador Typeof retorna o tipo da variável
console.log(typeof Myname);


//Declarando Condicionais
{
    //declarando If.
{
    let a = 23;
    if (a > 23){
        console.log("é maior");
    }else if(a == 23){
        console.log("é igual");
    }else{
        console.log("é menor");
    }
}

//declarando switch/case
{
    let a = 15;
    switch(a){
        case 0:
            console.log("é zero");
            break;
        case 10:
            console.log("é 10");
            break;
        case 20:
            console.log("é 20");
            break;
        
        default:
            console.log("é " + a);
            break;
    }
}
}


//Declarando estruturas de repetição
{

     let colors = ["black", "red", "blue", "gray", "green"];
    {
        for (let i = 0; i < colors.length; i++){
            console.log(colors[i]);
        }
    }

    {
        let j = 0;
        while(j < colors.length){
            console.log(colors[j]);
            j++;

        }
    }

    {
        let k = 0;
        do{
            console.log(colors[k]);
            k++;
        } while(k < colors.length);
    }


}


//Declarando Functions
{
    function sum(a, b){
        return a + b;
    }

    console.log(sum(9, 8));

    function sayHello(name, lastName){
        console.log("Hello " + name + " " + lastName);
    }

    sayHello("Matt", "Rodrigues");
}

//Declarando Classe
{
    class book{
        constructor(title, author, pages){
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

        read(){
            return `Estou lendo ${this.title}`
        }
    }

    class TiBook extends book{
        constructor(title, author, pages, tecnologhy){
            super(title, author, pages);
            this.tecnologhy = tecnologhy;
        }
    }

    class Pessoa{
        constructor(name){
            this.Name = name;
        }

        get name(){
            return this.Name;
        }

        set name(value){
            this.Name = value;
        }
    }

    let livro = new book('Algoritimos', 'Brian', 500);
    //console.log(livro);
    console.log(livro.read());
} 

//Usando Interpolação
{
    "Matt é";
    let role = "esforçado"

    console.log(`Matt é ${role}`);
}

//Operador Ternário If..Else
{
    // O caso que é verdadeiro aparece a esquerda do dois pontos e o caso falso aparece a direita.
    function MIdade() {
        let idade = 17;
        return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
    }
    console.log(MIdade())
}

//Arrow Functions
{
    //A expressão que fica após a seta já o retorno da função
    let soma = (num1, num2) => num1 + num2;

    let sayHello = (name) => `Hello ${name}`;
    console.log(sayHello('Stef'));
}

//Operador Spread (...) e metodos de iteração
{
    //Operador Spread
    {
        const alunasGama = ["Stefane", "Andreina", "Sarah"];
        console.log(alunasGama[2]);

        var alunasXp = [...alunasGama, "Talia"];
        console.log(alunasXp);
    }
    //Métodos de iteração
    {
        alunasXp.map(aluna => console.log(aluna))
    }

    //filter
    {
        var numeros = [15,13,22,46,16,84,09];

        numerosImpares = numeros.filter(numero => numero%2 != 0);
        console.log(numerosImpares);
    }

    //metodos de ordenação
    {
        const numerosCrescente = numeros.sort((a, b) => a-b);
        console.log(numerosCrescente);

        const numerosDecrescente = numeros.sort((a, b) => b-a);
        console.log(numerosDecrescente);
    }

    //reduce  -  É um método que reduz o arra a um resultado de operação matematica
    {
        const numbers = [6, 3, 7, 23];
        const soma =numbers.reduce((ValorAnterior, ValorAtual) => {
            return ValorAnterior + ValorAtual;
        }, 0);

        console.log(soma);
    }
}

//Objetos Destructuring
{
    const pessoa = {
        nome: "Matt",
        idade: "23",
        cidade: "QXD"
    }

    //notação de ponto
    console.log(pessoa.nome); //Matt

    //Notação de colchete
    console.log(pessoa['idade']); //23

    //Como desestruturar objetos

    const {nome, idade, cidade} = pessoa;

    console.log(cidade);

    {
        const filmes = [
            {
                id: 10,
                titulo: "Círculo de Fogo",
                descricao: "Robôs versus Monstros alienígenas",
                duracao: "120 min"
            },
            {
                id: 15,
                titulo: "Up - Altas Aventuras",
                descricao: "Animação infantil de aventura e comédia",
                duracao: "94 min"
            },
            {
                id: 17,
                titulo: "Tropa de Elite",
                descricao: "Grupo militar buscando pacificar o Rio de Janeiro",
                duracao: "136 min"
            }]

            const [{id, titulo, descricao, duracao}] = filmes;

            filmes.map(filme => console.log(filme.descricao));
    }
}