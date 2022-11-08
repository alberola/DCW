
document.getElementById("nombre").addEventListener("input", function () {validar(this)});
document.getElementById("nombre").addEventListener("blur", function () {document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();});
document.getElementById("apellidos").addEventListener("input", function () {validar(this)});
document.getElementById("apellidos").addEventListener("blur", function () {document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();});
document.getElementById("edad").addEventListener("input", function () {validar(this)});
document.getElementById("nif").addEventListener("input", function () {validar(this)});



function validar(parametro){
    let nombreInput = parametro.name;
    let valorInput = parametro.value;
    //Parametro para validar nif
    let nif = /^\d{8}-[A-Z]$/;
    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let fecha = /^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/;
    let hora = /\d+:\d:/;
    switch (nombreInput){
        case "nombre":
            let nombre = document.getElementById("nombreError");
            if (valorInput == ""){
                nombre.innerHTML = "";   
            } else {
                if (!isNaN(valorInput)){
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
                if (isNaN(valorInput) || nombreInput < 0 || nombreInput > 105){
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
                if (!nif.test(valorInput)){
                    document.getElementById("nifError").innerHTML = "Formato de nif incorrecto";
                }
            }
            break;
        case "email":
            if (!email.test(valorInput)){
                document.getElementById("emailError").innerHTML = "Formato de email incorrecto";
            }   
            break;
        case "provincia":
                if (valorInput == 0){
                    document.getElementById("provinciaError").innerHTML = "Debe seleccionar una Provincia.";
                }
            break;
        case "fecha":
                if (!fecha.test(valorInput)){
                    document.getElementById("fechaError").innerHTML = "Formato de fecha incorrecto";
                }
            break;
        case "hora":
                if (!hora.test(valorInput)){
                    document.getElementById("horaError").innerHTML = "Formato de hora incorrecto";
                }
            break;
    }
}
