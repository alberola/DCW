//Evento que capturará el boton submit del funcionario
formulario.addEventListener('submit', comprobarDatos);

//variables para agilizar codigo que usaremos posteriormente
var fecha = document.getElementById("fecha");
var usuario = document.getElementById("usuario");
var telefono = document.getElementById("telefono");
var correo = document.getElementById("correo");
var incidencia = document.getElementById("incidencia");
var observaciones = document.getElementById("observaciones");

/*
    ESTA VARIABLE SERIA SI HUBIERA IMPLEMENTADO EL ARRAY A TIEMPO

    var arrayIncidencias = new Incidencia();

*/

function comprobarDatos (e) {
    e.preventDefault();
    //Patrones para comprobar datos
    let testTelefono = /^\d{9}$/;
    let testUsuario = /^\D+$/
    //Valor por defecto de input radio
    var prioridad = "";
    //Leida de input radio
    for  (let i=0 ;i <formulario.prioridad.length; i++) {
        if  (formulario.prioridad[i].checked)
            prioridad = (formulario.prioridad[i].value);
    }
    //Comprobacion que todos los datos entran
    if ( fecha.value == "" || usuario.value == "" || telefono.value == "" || correo.value == "" || incidencia.value == "X" || prioridad == "" || observaciones.value == "") {
        alert("ERROR NO HA INTRODUCIDO TODOS LOS DATOS POR FAVOR REVISELOS");
    } else {
        //Si todos los campos están rellanados comprobaremos el usurio y el telefono
        if (!(testTelefono).test(telefono.value) || !(testUsuario).test(usuario.value)){
            alert("TELEFONO O USUARIO INCORRECTO POR FAVOR CORRIGELO");
        } else {
            //Si todo está bien imprimiremos en una tabla los resultados
            var incidenciaRegistro = new Incidencia(fecha.value, usuario.value, telefono.value, correo.value, incidencia.value, prioridad, observaciones.value);
            //Imprimimos la tabla
            document.getElementById("tabla").innerHTML += 
            "<table style='text-align: center;'>"+
             "<tr>"+
                "<th>Fecha</th><th>Usuario</th><th>Telefono</th><th>Correo</th><th>Incidencia</th><th>Prioridad</th><th>Observaciones</th>"
             +"</tr>" +              
             "<tr>"+
                "<td>"+incidenciaRegistro.fecha+"</td><td>"+incidenciaRegistro.usuario+"</td><td>"+incidenciaRegistro.telefono+"</td>"
                +"<td>"+incidenciaRegistro.correo+"</td><td>"+incidenciaRegistro.incidencia+"</td><td>"+incidenciaRegistro.prioridad+"</td>"
                +"<td>"+incidenciaRegistro.observaciones+"</td>"
             +"</tr>"+
            "</table>";
        }
    }
}

/* IMPORTANTE COMO NO ME DIO TIEMPO A SACARLO PONGO LA PARTE DEL CODIGO QUE ME FALTA Y ME DE TIEMPO AQUÍ
    
    PARA INSERTAR UN OBJETO INCIDENCIA DENTRO DEL ARRAY QUE TENDRIAMOS
    arrayIncidencias.crearIncidencia(fecha.value, usuario.value, telefono.value, correo.value, incidencia.value, prioridad, observaciones.value);

    DONDE IMPRIMO EL ARRAY SERIA IGUAL PERO CON UN BUCLE QUE LEA EL TAMAÑO DEL ARRAY QUE DEFINI ARRIBA Y VOY LEYENDO EN CADA POISICÓN DE I

    NO TE LO PONGO PERO LO QUE ME FALTA ESTÁ CASI HECHO, NO LO INTENTE IMPLEMENTAR PARA QUE VISUALMENTE PUEDAS VER ALGO DE LO QUE TENGO
    LO COMENTADO ESTÁ CASI TODO IMPLEMENTADO AUNQUE NO ESTE APLICADO
*/
