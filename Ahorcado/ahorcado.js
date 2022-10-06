var cont = setInterval(contador, 1000);
let num = 60;
let posibilidades = ["COCHE", "MOTO", "GUAGUA", "BICICLETA"];

let errores = 5;
let aciertos;

let random = parseInt(Math.random()*3);
let auxVar = posibilidades[random];

console.log(auxVar);

function contador(){
    if(num == 500){   
        alert("Se ha agotado el tiempo...");    
        location.reload();
    } else {
        document.getElementById("contador").innerHTML = num;
        if (num <= 20){
            document.getElementById("contador").setAttribute("style", "color:red;");
            document.getElementById("contador").innerHTML = num;
        }
    }
    num--;
}
//Funcion la cual se encargar de editas el elemento del HTML y meter los espacios necesarios
function cargarLongitud(){
    for (let index = 0; index < auxVar.length; index++) {
        document.getElementById("espacios").innerHTML += "<span id='span"+index+"'>_</span>"+" ";       
    }
}
//Funcion que se encarga de meter la palabra en los espacios asignados previamente para los guion bajo
function resolver(){
    for (let index = 0; index < auxVar.length; index++) { 
        document.getElementById("espacios").innerHTML = posibilidades[random];
    }
}
//Funcion que implementa el método para comprobar si el caracter introducido es válido
function probar(){

    let valorInput = document.getElementById("texto").value.toUpperCase();
    let booleana = false;

    for (let index = 0; index < auxVar.length; index++) {
        if (valorInput == auxVar[index]){
            booleana = true;
            aciertos++;
            document.getElementById("span"+index).innerHTML = valorInput;
            if((document.getElementById("span"+index)).value != "_"){
                alert("Felicidades a ganado el juego.");
                clearInterval(cont);
            }
        } 
    }
    if (!booleana) {
        errores--;
        alert("Cuidado te quedan "+errores+" errores.");
        if (errores == 0){
            alert("Lo sentimos has perdido el juego.");
            clearInterval(cont);
        }
    }

}

function recargar(){
    location.reload();
}