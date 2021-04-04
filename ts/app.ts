let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento){
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color="navy";
    evento.preventDefault();
});

function limpiarDatos(){
    document.getElementById("formulario").reset();
}