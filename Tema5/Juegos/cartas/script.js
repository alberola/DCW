const SCRIPT = document.createElement('script');
SCRIPT.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js';
document.head.prepend(SCRIPT);

//Seleccionamos todos los divs que contienen imagenes y al clickar llamaremos a la funcón comprobar que se encargará de introducir la lógica
var selector = document.querySelectorAll('.imagen');
for (var i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', function () {comprobar(this);});
    selector[i].setAttribute("src", "img/back.png");
}
var imagenes = ["img/img0.png","img/img1.png","img/img2.png","img/img3.png","img/img4.png","img/img5.png"];
var reordenarArray = _.shuffle(imagenes);
    console.log(imagenes);
    console.log(reordenarArray);
function comprobar(imagen)  {
    let x = imagen.id;    
    selector[x].setAttribute("src", "img/img"+x+".png");
}

