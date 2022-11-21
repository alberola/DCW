//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let banderas = ["panama.svg", "bolivia.svg", "andorra.svg", "reinoUnido.svg", "namibia.svg"];

//arreglo que guardara la opcion correcta
let correcta = [2,2,1,1,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["SUDAFRICA", "SINGAPUR", "PANAMA"]);
opciones.push(["PERU", "ITALIA", "BOLIVIA"]);
opciones.push(["TUNEZ", "ANDORRA", "ANTIGUA Y BARBUDA"]);
opciones.push(["UCRANIA", "REINO UNIDO", "MADAGASCAR"]);
opciones.push(["NAMIBIA", "OMAN", "ETIOPIA"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("cajaInicio").style.display = "none";
    document.getElementById("cajaJuego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imagenBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    //Limpiamos las opciones y le damos parámetros de bootstrap a cada opcion para que se ajusten a nuestras necesidades sin utilizar css
    document.getElementById("n0").className = "nombre button-55 bg-dark text-white rounded mb-5";
    document.getElementById("n1").className = "nombre button-55 bg-dark text-white rounded mb-5";
    document.getElementById("n2").className = "nombre button-55 bg-dark text-white rounded mb-5";

    document.getElementById("l0").className = "letra button-55 bg-dark text-white rounded mb-5";
    document.getElementById("l1").className = "letra button-55 bg-dark text-white rounded mb-5";
    document.getElementById("l2").className = "letra button-55 bg-dark text-white rounded mb-5";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //introducimos las clases definiendo bootstrap color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada button-55 rounded mb-5";
        document.getElementById("l" + opElegida).className = "letra letraAcertada button-55 rounded mb-5";
        cantidadAcertadas++;
    }else{  //no acierta
        //modificamos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada button-55 rounded mb-5";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada button-55 rounded mb-5";

        //opcion que era correcta en caso de fallar
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada button-55 rounded mb-5";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada button-55 rounded mb-5";
    }
    posActual++;
    //Esperamos 1,5 segundos y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,1500);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("cajaJuego").style.display = "none";
    document.getElementById("pantallaFin").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantallaFin").style.display = "none";
    document.getElementById("cajaInicio").style.display = "block";
    document.getElementById("cajaJuego").style.display = "none";
}