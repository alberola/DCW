//Seleccionamos todos los divs que contienen imagenes y al clickar llamaremos a la funcón comprobar que se encargará de introducir la lógica
var selector = document.querySelectorAll('.imagen');
for (var i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', comprobar);
    selector[i].setAttribute("src", "img/back.png");
}

function comprobar() {
    console.log("funciona");
}