function abrirVentana(){
    window.open('index2.html','' ,"width=800, height=600, scrollbars=no, resizable=no, menubar=no" );
}
function datosVentana(){
    titulo.innerHTML = "<h3>Ejemplo de Ventana Nueva</h3>"+
    "<br>URL Completa: " + window.document.URL+
    ".<br>Protocolo utilizado: "+ window.location.protocol+
    ".<br>Nombre en código del navegador: "+ navigator.appCodeName+
    ".<br> Java : "+ (navigator.javaEnabled())?'Si':'No'+
    ".<br><iframe src='www.google.es' width='800px' height='600px'></iframe>";
}

function escribirDatos(){
    let nombre = prompt("Introduce tu nombre", "");
    let dia = parseInt(prompt("Introduce tu dia de nacimiento", ));
    let mes = parseInt(prompt("Introduce tu mes de nacimiento", )-1);
    let anio = parseInt(prompt("Introduce tu año de nacimiento", ));
    let fechaIntroducida = new Date(anio,mes,dia);
    let fechaActual = new Date();

    datos.innerHTML = "Buenos días "+ nombre+
    ".<br>Tu nombre tiene "+nombre.length+" caracteres, incluidos espacios"+
    ".<br>La primera letra "+(nombre.charAt(0)).toLocaleUpperCase()+" de tu nombre está en la posición:" + nombre.indexOf((nombre.charAt(0)))+
    ".<br>La última letra "+(nombre.charAt(nombre.length-1)).toLocaleUpperCase()+" de tu nombre está en la posición:" +nombre.lastIndexOf(((nombre.charAt(nombre.length-1))))+ 
    ".<br>Tu nombre menos las 3 primeras letras es: "+nombre.substring(3, nombre.length)+
    ".<br>Tu nombre todo en mayúsculas es: "+nombre.toUpperCase()+
    ".<br>Tu edad es: "+(fechaActual.getFullYear() - fechaIntroducida.getFullYear()) +" años"+
    ".<br>Naciste un feliz "+fechaIntroducida.getDate() +" del año "+fechaIntroducida.getFullYear()+
    ".<br>El coseno de 180 es: "+Math.cos(180)+
    ".<br>El número mayor de (34,67,23,75,35,19) es: "+Math.max(34,67,23,75,35,19)+
    "<br>Ejemplo de número al azar: "+Math.random()+".";
}