function potencia(){
    let base = parseInt(prompt("Introduzca una base.", ));
    let exponente = parseInt(prompt("Introduce un exponente.", ));
    alert("La potencia de " + base + " eleveado a " + exponente + " es : "+ Math.pow(base,exponente));
}
function raiz(){
    let numero = prompt("Introduzca un número.", );
    if (numero <= 0){
        alert("Por favor introduce un numero positivo.");
    }
        alert ("La raiz de " + numero + " es " + Math.sqrt(numero));
}
function redondeo(){
    let numero = parseFloat(prompt("Introduce un número decimal.", ));
    alert ("El redonde al entero más próximo al alta = "+ Math.ceil(numero) + " y a la baja = "+ Math.floor(numero));
}
function trigonometria(){
    let numero = parseInt(prompt("Introduce un número para calcular su Sen,Cos y Tan", ));
    if ( numero >= 0 && numero <=360){
        alert ("Los valores del numero " + numero + " son: \nSen = " + Math.sin(numero) + "\nCos = " + Math.cos(numero) + "\nTan = " + Math.tan(numero));
    } else {
        alert("Introduce un número entre 0 y 360.");
    }
}

function circulo(){
    let radio = parseFloat(prompt("Introduce el valor del radio.", ));
    document.getElementById("circulo").innerHTML = "";
    document.getElementById("circulo").innerHTML += "El valor del radio es: "+ radio+" cm.";
    document.getElementById("circulo").innerHTML += "<br>El valor del diametro es: "+radio*2+" cm.";
    document.getElementById("circulo").innerHTML += "<br>El valor del perímetro de la circunferencia es: "+ (2*Math.PI*radio).toFixed(2)+" cm.";
    document.getElementById("circulo").innerHTML += "<br>El valor del área del circulo es: "+(Math.PI*(Math.pow(radio,2))).toFixed(2)+" cm^2.";
    document.getElementById("circulo").innerHTML += "<br>El valor del area de la esfera es: "+((4)*(Math.PI)*(Math.pow(radio,2))).toFixed(2)+" cm^2."
    document.getElementById("circulo").innerHTML += "<br>El valor del volumen de la esfera e: "+((4/3)*(Math.PI)*(Math.pow(radio,3))).toFixed(2)+" cm^3."
}