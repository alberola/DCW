function categoria(){
    let anio = prompt("Introduzca su año de nacimiento.",);
    if (!isNaN(anio)){
        switch(true){
            case(anio >= 2012 && anio <=2014):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria prebenjamin.";
            break;
            case (anio >= 2010 && anio <=2011):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria benjamin.";
            break;
            case (anio >= 2008 && anio <=2009):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria alevin.";
            break;
            case (anio >= 2006 && anio <=2007):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria infantil.";
            break;
            case (anio >= 2004 && anio <=2005):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria cadete.";
            break;
            case (anio >= 2001 && anio <=2003):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria juvenil.";
            break;
            case (anio < 2001):
                document.getElementById("categoria").innerHTML = "Se encuenta en la categoria senior.";
            break;
        }
    } else {
        alert("Formato de Año no válido.");
    }
}