let numeroAleatorio = document.querySelector("#aleatorio");
let num = 0;

/*
El objeto Math permite realizar tareas matemáticas en los números
Math.random =  Devuelve un número aleatorio entre 0 (inclusive) y n (exclusive)
Math.floor = redondea al número menor del decimal
Math.ceil = redondea al número mayor del decimal
Math.round = devuelve el valor de x redondeado a su número entero más próximo
*/

num = Math.random()*(100-5)+5; //Esto me hace random de 5 - 99
numeroAleatorio.innerHTML = num;
