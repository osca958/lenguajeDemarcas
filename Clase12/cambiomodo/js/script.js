const boton = document.getElementById("toggleTema");

boton.addEventListener("click", oscuro);

function oscuro(){
    document.body.classList.toggle("oscuro") /*Añade la clase oscuro si no está presente. */
}