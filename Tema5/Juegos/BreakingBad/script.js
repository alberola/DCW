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

//Variable de control que pasará todas las pruebas de cada campo
var controlador = false;

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
    } else {

    }

}

//Función para realizar las comprobaciones de los patrones
function patrones(elemento){
    //Variables para capturar nombre y valor para actuar según sus valores
    let nombre  = elemento.name;
    let valor = elemento.value;

    //Variables para ejercer los patrones deseados
    let fechaCreacionTest = /^\d{2}[/]\d{2}[/]\d{2}$/;
    let cocineroTest = /^[W]{2}[$][0-9]{4}$/;
    let destinatarioTest = /^[A-Z]{2,3}[_][a-z]{1,}[0-9]{4}$/;
    let composicionTest = /^[0-9]{1,}[g][A-Z]{1,2}[0-9]{0,}[A-Z]{1,2}[0-9]{0,}$/;
    let numCuentaTest = / /;

    //Según el nombre que me entre nos meteremos en una parte del swtich o no.
    switch(nombre){
        case "fecha":
            if (!fechaCreacionTest.test(valor)){
                //Si no pasa el test pondremos controlador falso 
                controlador = false;
                //Daremos borde rojo (marca de error)
                fechaCreacion.className = ("form-control border-danger");
            } else {
                //En caso de pasar el test daremos por valido al controlador
                controlador = true;
                //Y pondremos borde en verde (marca acertado)
                fechaCreacion.className = ("form-control border-success");
            }
            break;
        
        case "cocinero":
            if (!cocineroTest.test(valor)){
                controlador = false;
                cocinero.className = ("form-control border-danger");
            } else {
                controlador = true;
                cocinero.className = ("form-control border-success");
            }
            break;

        case "destinatario":
            if (!destinatarioTest.test(valor)){
                controlador = false;
                destinatario.className = ("form-control border-danger");
            } else {
                controlador = true;
                destinatario.className = ("form-control border-success");
            }
            break;

        case "gramos":
            if ( valor < 100 || valor >500 ){
                controlador = false;
                gramos.className = ("form-control border-danger");
            } else {
                controlador = true;
                gramos.className = ("form-control border-success");
            }
            break;
        
        case "composicion":
            if (!composicionTest.test(valor)){
                controlador = false;
                composicion.className = ("form-control border-danger");
            } else {
                controlador = true;
                composicion.className = ("form-control border-success");
            }
            break;
        
        case "numCuenta":
            if (!numCuentaTest.test(valor)){
                controlador = false;
                numCuenta.className = ("form-control border-danger");
            } else {
                controlador = true;
                numCuenta.className = ("form-control border-success");
            }
            break;
    }
}