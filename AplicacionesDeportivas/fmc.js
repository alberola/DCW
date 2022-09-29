function fmcEjemplo(){
    let edad = parseInt(prompt("Introduzca su edad",));
    let sexo = prompt("Introduzca su sexo",);
    if (isNaN(edad) || !isNaN(sexo)){
        alert("Debe introducir un formato de Edad-Sexo valido.");
    } else {
        let fmc;
        if (sexo.toLowerCase() == "hombre"){
            fmc = (206 - (0.88 * edad));
            zonaValores(fmc);
        } else if (sexo.toLocaleLowerCase() == "mujer"){
            fmc = (208 - (0.7 * edad));
            zonaValores(fmc);
        } else {
            alert("Sexo introducido no valido.");
        }
    }
}
function zonaValores(fmc){
    let zona1 = (fmc*0.6).toFixed(2);
    let zona2 = (fmc*0.7).toFixed(2);
    let zona3 = (fmc*0.8).toFixed(2);
    let zona4 = (fmc*0.9).toFixed(2);
    document.getElementById("fmc").innerHTML += "Su zona de recuperación está entre "+zona1+" y "+zona2;
    document.getElementById("fmc").innerHTML += "<br>Su zona aeróbica está entre "+zona2+" y "+zona3;
    document.getElementById("fmc").innerHTML += "<br>Su zona anaeróbica está entre "+zona3+" y "+zona4;
    document.getElementById("fmc").innerHTML += "<br>Su Línea roja está entre "+zona4+" y "+fmc;
}