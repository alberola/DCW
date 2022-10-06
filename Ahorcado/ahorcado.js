//Variable que ejecuta la función contador cada 1 seg.
var cont = setInterval(contador, 1000);
//Variables de la aplicación
let num = 60;
let posibilidades = ["COCHE", "MOTO", "GUAGUA", "BICICLETA", "MOTOCICLETA", "PATINETA"];

let errores = 5;
let aciertos = 0;

let random = parseInt(Math.random()*6);
let auxVar = posibilidades[random];

//Impresión en consola para facilitar el acierto o fallo de las distintas palabras (para pruebas).
console.log(auxVar);

//Función que implementa un contador cada.
function contador(){
    if(num == 0){   
        alert("Se ha agotado el tiempo...");    
        recargar();
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
    alert("No seas tramposo he intentalo por ti mismo...");
    recargar();
}
//Funcion que implementa el método para comprobar si el caracter introducido es válido
function probar(){

    //Variable que recibira el valor del input del html
    let valorInput = document.getElementById("texto").value.toUpperCase();
    //Variable booleana que indicará cuando no se encuentre caracter.
    let booleana = false;

    for (let index = 0; index < auxVar.length; index++) {
        if (valorInput == auxVar[index]){
            booleana = true;
            aciertos++;
            document.getElementById("span"+index).innerHTML = valorInput;
            console.log(aciertos);
        } 
    }
    //Comprobación para ver número de errores permitidos
    if (!booleana) {
        errores--;
        alert("Cuidado te quedan "+errores+" errores.");
        //Switch para ir modificando la imagen dependiendo de los errores.
        switch (errores) {
            case 4:
                document.getElementById("img").src="ahorcadoBase.png";
                break;
            case 3:
                document.getElementById("img").src="ahorcado.png";
                break;
            case 2:
                document.getElementById("img").src="ahorcado2.png";
                break;
            case 1:
                document.getElementById("img").src="ahorcado3.png";
                break;
        } 
        //Comprobación de que el juego ha finalizado.
        if (errores == 0){
            document.getElementById("img").src="ahorcado4.png";
            alert("Lo sentimos has perdido el juego.");
            clearInterval(cont);
        }
        //Si el número de aciertos es igual a la longitud 
    } else if (aciertos == auxVar.length){
        alert("Felicidades ha ganado el juego.");
        clearInterval(cont);
    }

}

function recargar(){
    location.reload();
}