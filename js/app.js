var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color = "navy";
    evento.preventDefault();
});
function limpiarDatos() {
    document.getElementById("formulario").reset();
}

