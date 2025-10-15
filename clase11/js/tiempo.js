let tiempo = document.querySelector("#tiempo");
let segundos = 0;

/*
SET INTERVAL /FUNCION, TIEMPO (ms))

*/

let intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
},1000);

/*SET TIME OUT (FUNCION, TIEMPO (MS))*/

setTimeout(function(){  //Esta metodo para un setInterval
   // clearInterval(intervalo);
   alert("Se acabó el tiempo")
},5000);

