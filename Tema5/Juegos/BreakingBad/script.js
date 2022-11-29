//Añadimos evento de escucha
formulario.addEventListener('submit', comprobacion);

var select = document.querySelectorAll('input');
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener('blur', function () {patrones(this)});
}


//Variables para movernos mas rápido por el programa
var fecha = document.getElementById('fechaCreacion');
var cocinero = document.getElementById('cocinero');
var destinatario = document.getElementById('destinatario');
var gramos = document.getElementById('gramos');
var composicion = document.getElementById('composicion');
var numCuenta = document.getElementById('numCuenta');


function comprobacion(e) {
    e.preventDefault();
    //Comprobacion de que entran todos los patrones
    if (fecha.value == "" || cocinero.value == "" || destinatario.value == "" || gramos.value == "" || composicion.value == "" || numCuenta.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'No has contestado todos los campos!',
            html:'Vuelve a intentarlo nuevamente cuando lo hayas hecho',
            confirmButtonColor: "#2b2b2a", 
        })
    }

}

//Función para realizar las comprobaciones de los patrones
function patrones(elemento){
    //Variables para capturar nombre y valor para actuar según sus valores
    let nombre  = elemento.name;
    let valor = elemento.value;

    //Variables para ejercer los patrones deseados
    let fechaCreacionTest = / /;
    let cocineroTest = / /;
    let destinatarioTest = / /;
    let composicionTest = / /;
    let numCuentaTest = / /;

    //Según el nombre que me entre nos meteremos en una parte del swtich o no.
    switch(nombre){
        case "fecha":
            console.log("entrada Efectiva");
            break;
        
        case "cocinero":

            break;

        case "destinatario":

            break;

        case "gramos":

            break;
        
        case "composicion":

            break;
        
        case "numCuenta":

            break;
    }
}