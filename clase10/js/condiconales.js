//Condicionales


let a = 10;
let b = 5;

//Escribir un programa en Js el cual tenga que calcular
//si a es mayor que b, o si b es mayor que a o si a y b son iguales

//=,==,== 
//=-> asignación
//== -> comparación débil.
    //5=='5' ->True se convierten automáticamente y por eso es True
    //0==False -> True 
    // null = undefined 

//5==='5' -> False
//0=== False -> False       Es mas recomendable usar el triple =(===)
//5 === 5 -> True


//>,<,>=,<=,==,===,!=,!==,&&, ||

if(a>b){
    console.log("a es mayor que b");
}else if (a==b){
    console.log("a  es lo mismo que b")
}else{
    console.log("a no es lo mismo que b y es menor que b")
}


let dia = "Lunes";
switch(dia){
    case "Lunes":
        console.log("Voy a estudiar JS");
        break;
    case "Martes":
        console.log("Voy a estudiar Java");
        break;
    case "Miercoles":
        console.log("Voy a estudiar SQL");
        break;
    default:
        console.log("Voy a descansar. ")
}