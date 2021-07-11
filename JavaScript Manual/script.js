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
    let idade = 17;
    idade >= 18 ? "Maior de idade" : "Menor de idade";
    // O caso que é verdadeiro aparece a esquerda do dois pontos e o caso falso aparece a direita.
}