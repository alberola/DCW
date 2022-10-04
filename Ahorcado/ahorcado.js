var cont = setInterval(contador, 1000);
let num = 60;
let posibilidades = ["Coche", "Moto", "Guagua", "Bicicleta"];
let random = parseInt(Math.random()*3);
function contador(){
    if(num == 500){   
        alert("Juego finalizado.");    
        location.reload();
    } else {
        document.getElementById("contador").innerHTML = num;
    }
    num--;
}
function cargarLongitud(){
    let longitud = (posibilidades[random].length)+1;
    for (let j = 0; j <= longitud; j++) {
        document.getElementById("espacios").innerHTML = "";    
    }
    for (let index = 0; index <= longitud; index++) {
        document.getElementById("espacios").innerHTML += "_"+" ";       
    }
}
function resolver(){
    document.getElementById("palabra").innerHTML = posibilidades[random];
}