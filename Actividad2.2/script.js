function tamanoInputs(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let elementTamano = document.getElementById("tamano");
    
    if (nombre == "" || apellidos == ""){
        elementTamano.innerHTML = "Recuerda que no puedes dejar campos vacios."
    } else {
        elementTamano.innerHTML = "";
        elementTamano.innerHTML = "1.-El tamaño del nombre + apellidos es: "+ (nombre.length+apellidos.length) +".<br>";
        elementTamano.innerHTML += "2.-Tu nombre es "+(nombre.toUpperCase())+" y tus apellidos "+ (apellidos.toUpperCase())+".<br>";
        elementTamano.innerHTML += "2.-Tu nombre es "+(nombre.toLowerCase())+" y tus apellidos "+ (apellidos.toLowerCase())+".<br>";
        let separador = apellidos.split(" ");
        elementTamano.innerHTML += "3.-"+nombre+".<br>"+separador[0]+".<br>"+separador[1]+".";
    }
}

var tabla = [
    ["Laura","Santander",50],
    ["Álvaro","Castro",50],
    ["Igor","Castro",60],
    ["Ivan","Santander",40],
    ["Mónica","Zamora",30],
    ["Javi","Bilbao",30],
    ["David","Bilbao",50],
    ["José Luis","Bilbao",60]
];

function mostrarTabla(){
    document.getElementById("tabla").innerHTML = "";
    for (let index = 0; index < tabla.length; index++) {
        document.getElementById("tabla").innerHTML += 
        "<tr>"
            +"<td>"+tabla[index][0]+"</td><td>"+tabla[index][1]+"</td><td>"+tabla[index][2]+"</td>"
        "</tr>";
    }  
}
function mostrarProvincia(){
    document.getElementById("tabla").innerHTML = "";
    for (let index = 0; index < tabla.length; index++) {
        if (tabla[index][1] == document.getElementById("provincia").value)
        document.getElementById("tabla").innerHTML += 
        "<tr>"
            +"<td>"+tabla[index][0]+"</td><td>"+tabla[index][2]+"</td>"
        "</tr>";
    }  
}
function mostrarCuota(){
    document.getElementById("tabla").innerHTML = "";
    for (let index = 0; index < tabla.length; index++) {
        if (tabla[index][2] < document.getElementById("provincia").value)
        document.getElementById("tabla").innerHTML += 
        "<tr>"
            +"<td>"+tabla[index][0]+"</td><td>"+tabla[index][1]+"</td><td>"+tabla[index][2]+"</td>"
        "</tr>";
    }  
}