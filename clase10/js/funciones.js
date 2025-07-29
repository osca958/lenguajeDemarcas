//Funciones: bloque de código que se ejecuta solo cuando es llamado

//var y let 

//Funciones sin parámetros
function saludo(){
    console.log("Hola mundo");
}

saludo();

//Funciones con parámetros
function operacion(num1,num2){
    let resultado = num1 + num2;
    console.log("Resultado: ",resultado);
}

operacion(10,10);
operacion(20,50);

//Funciones con return sin parametros

function retorno1(){
    let numero = 5;
    return numero;
}
console.log(retorno1());

//Funciones con return y con parámetros

function retorno2(numero){
    return numero;
}
console.log (retorno2(20));



function testScope(){
    if(true){
        var x =10;
        let y = 20;
    }
    console.log(x) //x=10
    console.log(y) //y= ReferenceError y no está definido porque está fuera de las llaves
}


console.log(a);
var a =5;


console.log(b);
let b =10;

var x=1;
var x=2; // Permitido en var en let no se pueden repetir
