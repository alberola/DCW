
//captura de eventos cuando se escriba por pantalla
var input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function () {validar(this)});
}
document.getElementById("nombre").addEventListener("blur", function () {document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();});
document.getElementById("apellidos").addEventListener("blur", function () {document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();});


var control = false;

//Función generica para determinar objetivo a validar y salte el error correspondiente.
function validar(parametro){
    let nombreInput = parametro.name;
    let valorInput = parametro.value;
    //Parametro para validar nif
    const nifPattern = /^\d{8}-[A-Z]$/;
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const fechaPattern = /^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/;
    const telefonoPattern = /^\d{8}$/; 
    let horaPattern = /\d+:\d+/;
    switch (nombreInput){
        case "nombre":
            let nombre = document.getElementById("nombreError");
            if (valorInput == ""){
                nombre.innerHTML = "";   
            } else {
                if (!isNaN(valorInput)){
                    control = true;
                    nombre.style.color = "red";
                    nombre.innerHTML = "Recuerda que el nombre tiene que ser una cadena."
                }  
            }                     
            break;
        case "apellidos":
            let apellidos = document.getElementById("apellidosError");
            if (valorInput == ""){
                apellidos.innerHTML = "";
            } else {
                if (!isNaN(valorInput)){
                    control = true;
                    apellidos.style.color = "red";
                    apellidos.innerHTML = "Recuerda que los apellidos tienen que ser una cadena."
                }
            }
            break;
        case "edad":
            let edad = document.getElementById("edadError");
            if (valorInput == ""){
                edad.innerHTML = "";
            } else {
                if (isNaN(valorInput) || nombreInput > 0 || nombreInput < 105){
                    control = true;
                    edad.style.color = "red";
                    edad.innerHTML = "La edad tiene que estar comprendida entre 1 y 104."
                }
            }
            break;
        case "nif":
            let nif = document.getElementById("nifError");
            if (valorInput == ""){
                nif.innerHTML = "";
            } else {
                if (!nifPattern.test(valorInput)){
                    control = true;
                    console.log("entrada a nif");
                    console.log(control);
                    nif.style.color = "red";
                    nif.innerHTML = "Formato de nif incorrecto";
                }
            }
            break;
        case "email":
            let email = document.getElementById("emailError");
            if (valorInput == ""){
                email.innerHTML = "";
            } else {
                if (!emailPattern.test(valorInput)){
                    control = true;
                    email.style.color = "red";
                    email.innerHTML = "Formato de email incorrecto";
                }  
            } 
            break;
        case "provincia":
            let provincia = document.getElementById("provinciaError");
            if (valorInput == ""){
                provincia.innerHTML = "";
            } else {
                if (valorInput == 0){
                    control = true;
                    provincia.style.color = "red";
                    provincia.innerHTML = "Debe seleccionar una Provincia.";
                }
            }
            break;
        case "fecha":
            let fecha = document.getElementById("fechaError");
            if (valorInput == ""){
                fecha.innerHTML = "";
            } else {
                if (!fechaPattern.test(valorInput)){
                    control = true;
                    fecha.style.color = "red";
                    fecha.innerHTML = "Formato de fecha incorrecto";
                }
            }
            break;
        case "telefono":
                let telefono = document.getElementById("telefonoError");
                if (valorInput == ""){
                    telefono.innerHTML = "";
                } else {
                    if (!telefonoPattern.test(valorInput)){
                        control = true;
                        telefono.style.color = "red";
                        telefono.innerHTML = "Formato de telefono incorrecto";
                    }
                }
                break;
        case "hora":
            let hora = document.getElementById("horaError");
            if (valorInput == ""){
                hora.innerHTML = "";
            } else {
                hora.innerHTML = "";
                if (!horaPattern.test(valorInput)){
                    control = true;
                    hora.style.color = "red";
                    hora.innerHTML = "Formato de hora incorrecto";
                }
            }
            break;
    }
}