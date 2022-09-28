function imcEjemplo(){
    let altura = parseFloat(prompt("Introduzca su altura en cm",));
    let peso = parseFloat(prompt("Introduzca su peso en KG",));    
    let imc = (peso / (altura*altura));
    if(isNaN(altura) || isNaN(peso)){
        alert("Altura o peso incorrectos, vuelva a insertarlos.");
    } else {
        let p = document.getElementById("imc");
        console.log(imc);
        if(imc < 16.00){
            p.setAttribute("style", "color:red;","font-weight:bold;");
            document.getElementById("imc").innerHTML = "Infrapeso (delgadez severa).";
        } else if (imc >= 16.00 || imc <= 16.99){

            document.getElementById("imc").innerHTML = "Infrapeso (delgadez moderada).";
        } else if (imc >= 17.00 || imc <= 17.49){

            document.getElementById("imc").innerHTML = "Infrapeso (delgadez aceptable).";
        } else if (imc >= 18.50 || imc <= 24.99){

            document.getElementById("imc").innerHTML = "Peso normal.";
        } else if (imc >= 25.00 || imc <= 29.99){

            document.getElementById("imc").innerHTML = "Sobrepeso.";
        } else if (imc >= 30.00 || imc <= 34.99){

            document.getElementById("imc").innerHTML = "Obeso (Tipo I).";
        } else if (imc >= 35.00 || imc <= 40.00){

            document.getElementById("imc").innerHTML = "Obeso (Tipo II).";
        } else {
            p.setAttribute("style", "color:red;","font-weight:bold;");
            document.getElementById("imc").innerHTML = "Obeso (Tipo III).";
        }
    }
}