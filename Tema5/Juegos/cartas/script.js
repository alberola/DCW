//Tenemos un array de imagenes el cual copiamos dos veces y reordenamos aleatoriamente para introducir las cartas;
var imagenes = ["img/img0.png","img/img1.png","img/img2.png","img/img3.png","img/img4.png","img/img5.png"];
var imagenesGeneral = [].concat(imagenes).concat(imagenes);
imagenesGeneral.sort(function() { return Math.random() - 0.5 });
console.log(imagenesGeneral);

//Variables del programa
var contador = 0;
var auxSrc = 0;
var contadorErrores = 0;

//Seleccionamos todos los divs que contienen imagenes y al clickar llamaremos a la función comprobar que se encargará de introducir la lógica
var selector = document.querySelectorAll('.imagen');
for (var i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', function () {comprobar(this);});
    selector[i].setAttribute("src", "img/back.png");
    selector[i].value = i;
}

//Con la función comprobar voltearemos la carta (cambiar src) segun su valor coincidiendo con el array de imagenes, si la ruta de
//esta es igual a la siguiente carta contador general = 1;
function comprobar(imagen)  {
    let valor = imagen.value;
    selector[valor].setAttribute("src", imagenesGeneral[valor]);
    //Comprobaremos meteremos datos en la variables comprobando que no estan escritas
    if (auxSrc == 0) {
        auxSrc = selector[valor];
    } else {
        if (auxSrc.src == selector[valor].src){
            contador++;
            console.log(auxSrc);
            auxSrc = 0;
            console.log(contador);
        } else {
            auxSrc.setAttribute("src","img/back.png");
            selector[valor].setAttribute("src", "img/back.png");
            contadorErrores++;
            auxSrc = 0;
        }
    }
    if (contador == (selector.length)/2){
        alert("JUEGO FINALIZADO<br>ACIERTOS = "+contador+"<br>Errores = "+contadorErrores);
    }
}
