/*EVENTOS DESDE EL DOM */

let recuadro = document.querySelector("#recuadro");
/*
function cambiarColor(){
    recuadro.style.background = "red";
}*/

/*EVENTOS DESDE JAVA SCRIPT*/

let boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);  //Lo que escucha y noombre de la función que debe ejecutar

function moverCaja(){
    recuadro.style.width = "500px";
    recuadro.style.transition ="1s";

}