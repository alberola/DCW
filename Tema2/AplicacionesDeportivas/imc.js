function imcEjemplo(){
    let altura = parseFloat(prompt("Introduzca su altura en M",)).toFixed(2);
    let peso = parseFloat(prompt("Introduzca su peso en KG",)).toFixed(2);    
    let imc = (peso / Math.pow(altura,2));
    if(isNaN(altura) || isNaN(peso)){
        alert("Altura o peso incorrectos, vuelva a insertarlos.");
    } else {
        let p = document.getElementById("imc");
        if(imc < 16.00){
           p.setAttribute("style", "color:red;","font-weight:bold;");
           document.getElementById("imc").innerHTML += "Infrapeso (delgadez severa).<br>"+"IMC = " + imc;
        } else if (imc >= 16.00 && imc <= 16.99){
            p.setAttribute("style", "color:#FC7337;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Infrapeso (delgadez moderada).<br>"+"IMC = " + imc;
        } else if (imc >= 17.00 && imc <= 17.49){
            p.setAttribute("style", "color:#FCDC37;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Infrapeso (delgadez aceptable).<br>"+"IMC = " + imc;
        } else if (imc >= 18.50 && imc <= 24.99){
            p.setAttribute("style", "color:#80F800;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Peso normal.<br>"+"IMC = " + imc;
        } else if (imc >= 25.00 && imc <= 29.99){
            p.setAttribute("style", "color:#008FF8;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Sobrepeso.<br>"+"IMC = " + imc;
        } else if (imc >= 30.00 && imc <= 34.99){
            p.setAttribute("style", "color:##000FF8;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Obeso (Tipo I).<br>"+"IMC = " + imc;
        } else if (imc >= 35.00 && imc <= 40.00){
            p.setAttribute("style", "color:##ED00F8;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Obeso (Tipo II).<br>"+"IMC = " + imc;
        } else {
            p.setAttribute("style", "color:red;","font-weight:bold;");
            document.getElementById("imc").innerHTML += "Obeso (Tipo III).<br>"+"IMC = " + imc;
        }
    }
}