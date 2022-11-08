function obtenerDatosForm(){
    const seleccionElemento = document.querySelector("form");
    seleccionElemento.addEventListener("submit", e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        alert(JSON.stringify(data));
    });
}

const asd = document.querySelectorAll("input");

asd.addEventListener("input", function () {validar(parametro)});

function validar(parametro){
    let nombreInput = parametro.value;
    //Parametro para validar nif
    let nif = /^\d{8}-[A-Z]$/;
    let email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let fecha = /^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/;
    let hora = /\d+:\d:/;
    switch (nombreInput){
        case "nombre":
            if (isNaN(nombreInput)){
                document.getElementById("nombre").innerHTML = "Recuerda que el nombre tiene que ser una cadena."
            }
            break;
        case "apellidos":
            if (isNaN(nombreInput)){
                document.getElementById("apellidos").innerHTML = "Recuerda que los apellidos tienen que ser una cadena."
            }
            break;
        case "edad":
            if (!isNaN(nombreInput) || nombreInput > 0 || nombreInput < 105){
                document.getElementById("edad").innerHTML = "La edad tiene que estar comprendida entre 1 y 104."
            }
            break;
        case "nif":
            if (!nif.test(nombreInput)){
                document.getElementById("nif").innerHTML = "Formato de nif incorrecto";
            }
            break;
        case "email":
            if (!email.test(nombreInput)){
                document.getElementById("email").innerHTML = "Formato de email incorrecto";
            }   
            break;
        case "provincia":
                if (nombreInput == 0){
                    document.getElementById("provincia").innerHTML = "Debe seleccionar una Provincia.";
                }
            break;
        case "fecha":
                if (!fecha.test(nombreInput)){
                    document.getElementById("fecha").innerHTML = "Formato de fecha incorrecto";
                }
            break;
        case "hora":
                if (!hora.test(nombreInput)){
                    document.getElementById("hora").innerHTML = "Formato de hora incorrecto";
                }
            break;
    }
}
