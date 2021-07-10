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