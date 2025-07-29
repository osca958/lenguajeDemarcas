//VARIABLES-> let + nombre 

//Variables numéricas:
let numero = 20;
console.log ("Numero: ",numero)

//Variables de texto:
let palabra = "palabras"
console.log ("Palabra: ",palabra);

//Variables booleanas

let booleana = true;

console.log("Booleana: ", booleana);

// Varibales de tipo Array

let colores = ["Rojo", "Amarillo","Azul"];
console.log("Color: ",colores[2])

//Variables de tipo objeto (Object: propiedad:valor)

let zumo = {
    ingrediente1:"Fresa",
    ingrediente2:"Naranaja",
    ingrediente3: "Plátano"
};

console.log ("Zumo lleva: ", zumo.ingrediente1, zumo.ingrediente2, "y", zumo.ingrediente3)


//Variables DOM: Modelo de objetos del documento
/*El dom es la estructura de objetos que genera el navegor cuando se carga un documento y se pueda alterrar mediante js
para cambiar dinamicamente los contenidos y aspecto de la página*/

let caja = document.querySelector("#caja"); //# para referirnos al id
console.log ("Caja es: ",caja);

caja.style.width = "220px";
caja.style.height = "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas") //. para referirnos a la class
console.log("Cajas es: ",cajas);

