var formulario = document.getElementById("formulario");
var nombres = document.getElementById("nombres");
var apellido = document.getElementById("apellidos");
var mensaje = document.getElementById("mensaje");
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color = "navy";
    evento.preventDefault();
});
