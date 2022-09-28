function sumar(){
    let num1 = prompt("Introduzca el primer número.",);
    let num2 = prompt("Introduzca el segundo número.",);
    document.getElementById("ejercicio1").innerHTML = (parseInt(num1) + parseInt(num2));       
}
function tipoVariable(){
    let var1, var2, var3;
    document.getElementById("ejercicio2").innerHTML = (typeof(var1) + "<br>" + typeof(var2) + "<br>" + typeof(var3)+"<br> <br>Ahora Las inicializamos y comprobamos:<br><br>");
    var1 = "cadena";
    var2 = 0;
    var3 = 'C';
    document.getElementById("ejercicio2").innerHTML += (typeof(var1) + "<br>" + typeof(var2) + "<br>" + typeof(var3));
}
function mayorMenor(){
    let num1 = parseInt(prompt("Introduzca un número.",));
    let num2 = parseInt(prompt("Introduzca otro número.",));
    if( num1 > num2){
        document.getElementById("ejercicio3").innerHTML = num1 + " es mayor que " + num2;
    } else if (num1 < num2){
        document.getElementById("ejercicio3").innerHTML = num1 + " es menor que " + num2;
    } else {
        document.getElementById("ejercicio3").innerHTML = "Ambos son iguales.";
    }
}
function ejercicio4(){
    let frase = prompt("Introduza una frase","");
    if (frase == ""){
        document.getElementById("ejercicio4").innerHTML = "Hola";
    } else {
        document.getElementById("ejercicio4").innerHTML = frase;
    }
}
function ejercicio5(){
    let N1 = parseInt(prompt ("Primer número","")); 
    let N2 = parseInt(prompt ("Segundo número","")); 
    ( (N1>N2) ? document.getElementById("ejercicio5").innerHTML = (N1 + " > " + N2) : document.getElementById("ejercicio5").innerHTML = (N2 + " > " + N1));
}
function ejercicio6(){
    for (let i = 1 ; i <= 6 ; i++){
        document.getElementById("ejercicio6").innerHTML += ("<h" + i + ">Encabezado de nivel " + i + "</h" + i + ">");
    }
}
function ejercicio7(){
    let i = 1;
    while (i<=6){
        document.getElementById("ejercicio7").innerHTML += ("<h" + i + ">Encabezado de nivel " + i + "</h" + i + ">");
        i++;
    }
}
function ejercicio8(){
    let pregunta = parseInt(prompt("Introduzca un número",));
    document.getElementById("ejercicio8").innerHTML = "<h4>Cuenta atrás</h4>";
    for (let i = pregunta; i >= 0; i--) {
        document.getElementById("ejercicio8").innerHTML += i + "<br>";      
    }
    document.getElementById("ejercicio8").innerHTML += "<h4>Cuenta hacia delante</h4>";
    for (let z = 0; z <= pregunta; z++) {
        document.getElementById("ejercicio8").innerHTML += z + "<br>";      
    }
}
function ejercicio9(){
    let pregunta = parseInt(prompt("Introduzca un número",));
    document.getElementById("ejercicio9").innerHTML = "<h4>Cuenta atrás</h4>";
    let i = pregunta;
    while (i >= 0) {
        document.getElementById("ejercicio9").innerHTML += i + "<br>";      
        i--;
    }
    document.getElementById("ejercicio9").innerHTML += "<h4>Cuenta hacia delante</h4>";
    let z = 0;
    while ( z <= pregunta) {
        document.getElementById("ejercicio9").innerHTML += z + "<br>";  
        z++;    
    }
}
function ejercicio10(){
    for (let i = 1; i <= 50; i++) {
        for (let z = 0; z < i; z++) {
            document.getElementById("ejercicio10").innerHTML += i;
        }
        document.getElementById("ejercicio10").innerHTML += "<br>";
    }
}
function ejercicio11(){
    for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById("ejercicio11").innerHTML += j;
        }
        document.getElementById("ejercicio11").innerHTML += "<br>";
    }
}
