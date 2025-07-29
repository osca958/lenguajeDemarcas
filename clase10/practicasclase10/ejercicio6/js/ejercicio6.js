function leerMensaje(){
    let mensaje = prompt("Introduce un texto, por favor: ");
    document.getElementById("parrafo2").innerHTML = ("El texto que has introducido es: ") + mensaje;
}
leerMensaje()