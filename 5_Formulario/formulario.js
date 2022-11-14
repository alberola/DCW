
//Generador de evento en cada posición en la que se encuentre un input para posteriorme comprobarlos
var input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
    //Se insertaria cad input en un array el cual leeremos y crearemos un evento de escucha a la esperade la funcion validar
    input[i].addEventListener("input", function () {validar(this)});
    //Creamos el elemnto que queramos insertar
    var crearP = document.createElement('p');
    //Depués de cada input meteremos un p previamente definido
    var pNuevos = input[i].insertAdjacentElement('afterend', crearP);
    //Introducimos un id a cada p
    pNuevos.setAttribute("id", 'p'+i);
}
//Como no reconoce el select tenemos que meterle el elemento a mano
document.querySelector('select').insertAdjacentElement('afterend', (document.createElement('p'))).setAttribute("id", 'selectError');
document.getElementById('provincia').addEventListener('change', function () {validar(this)});

//Eventos para convertir texto de dos primeros inputs en mayusculas cuando pierden el focus
document.getElementById("nombre").addEventListener("blur", function () {document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();});
document.getElementById("apellidos").addEventListener("blur", function () {document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();});

//variable de control para poder enviar el formulario posteriormente
var control = true;

//Función generica para determinar objetivo a validar y salte el error correspondiente.
function validar(parametro){
    let nombreInput = parametro.name;
    let valorInput = parametro.value;
    //Parametro para validar nif
    const nifPattern = /^\d{8}[A-Z]{1}$/;
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const fechaPattern = /^\d{2}-\d{2}-\d{2}$/;
    const telefonoPattern = /^\d{9}$/; 
    let horaPattern = /\d{2}:\d{2}/;
    switch (nombreInput){

        case "nombre":
            let nombre = document.getElementById("p0");
            if (valorInput == ""){
                nombre.innerHTML = ""; 
                control = true;  
            } else {
                nombre.innerHTML = "";
                control = false;
                if (!isNaN(valorInput)){
                    control = true;
                    nombre.style.color = "red";
                    nombre.innerHTML = "Recuerda que el nombre tiene que ser una cadena."
                }  
            }                    
            break;

        case "apellidos":
            let apellidos = document.getElementById("p1");
            if (valorInput == ""){
                apellidos.innerHTML = "";
                control = true;
            } else {
                apellidos.innerHTML = "";
                control = false;
                if (!isNaN(valorInput)){
                    control = true;
                    apellidos.style.color = "red";
                    apellidos.innerHTML = "Recuerda que los apellidos tienen que ser una cadena."
                }
            }
            break;

        case "edad":
            let edad = document.getElementById("p2");
            if (valorInput == ""){
                edad.innerHTML = "";
                control = true;
            } else {
                edad.innerHTML = "";
                control = false;
                if (isNaN(valorInput) || valorInput < 0 || valorInput > 104){
                    control = true;
                    edad.style.color = "red";
                    edad.innerHTML = "La edad tiene que estar comprendida entre 1 y 104."
                }
            }
            break;

        case "nif":
            let nif = document.getElementById("p3");
            if (valorInput == ""){
                nif.innerHTML = "";
                control = true;
            } else {
                nif.innerHTML = "";
                control = false;
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
            let email = document.getElementById("p4");
            if (valorInput == ""){
                email.innerHTML = "";
                control = true;
            } else {
                email.innerHTML = "";
                control = false;
                if (!emailPattern.test(valorInput)){
                    control = true;
                    email.style.color = "red";
                    email.innerHTML = "Formato de email incorrecto";
                }  
            } 
            break;

        case "provincia":
            let provincia = document.getElementById("selectError");
                if (valorInput == 0){
                    control = true;
                    provincia.style.color = "red";
                    provincia.innerHTML = "Debe seleccionar una Provincia.";
                } else {
                    provincia.innerHTML = "";
                    control = false;
                }
            break;

        case "fecha":
            let fecha = document.getElementById("p5");
            if (valorInput == ""){
                fecha.innerHTML = "";
                control = true;
            } else {
                fecha.innerHTML = "";
                control = false;
                if (!fechaPattern.test(valorInput)){
                    control = true;
                    fecha.style.color = "red";
                    fecha.innerHTML = "Formato de fecha incorrecto (DD-MM-YY)";
                }
            }
            break;

        case "telefono":
            let telefono = document.getElementById("p6");
            if (valorInput == ""){
                telefono.innerHTML = "";
                control = true;
            } else {
                telefono.innerHTML = "";
                control = false;
                if (!telefonoPattern.test(valorInput)){
                    control = true;
                    telefono.style.color = "red";
                    telefono.innerHTML = "Formato de telefono incorrecto (ej: 648428535)";
                }
            }
            break;

        case "hora":
            let hora = document.getElementById("p7");
            if (valorInput == ""){
                hora.innerHTML = "";
                control = true;
            } else {
                hora.innerHTML = "";
                control = false;
                if (!horaPattern.test(valorInput)){
                    control = true;
                    hora.style.color = "red";
                    hora.innerHTML = "Formato de hora incorrecto (XX:XX)";
                }
            }
            break;
    }
}

//Cuando se envia el formulario comprobaremos
formulario.onsubmit = function (){
    if (control || provincia.value == 0) {
        alert ("Cuidado tiene campos incorrectos o vacios en el formulario");
        return false;
    } else {
        window.confirm("¿Seguro que desea enviar el formulario?");
    }
}
