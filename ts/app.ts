let formulario=document.getElementById("formulario");

let nombres:any=document.getElementById("nombres");
let apellido:any=document.getElementById("apellidos");
let mensaje:any=document.getElementById("mensaje");

formulario.addEventListener("submit", function(evento){
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensaje.style.color="navy";

    evento.preventDefault();
});