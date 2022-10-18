function popUp(){
    window.open("Bienvenido.hmtl", width=200,height=100);
}
function hora(){
    fechaActual = new Date();
    document.getElementById("anio").innerHTML = fechaActual.getFullYear();
    document.getElementById("dia").innerHTML = fechaActual.getDate();
    document.getElementById("mes").innerHTML = fechaActual.toLocaleDateString('es-ES', {month: 'long'});
} 

function longitud(password){
        return Boolean(password >= 8 && password <= 16);
}
document.getElementById('password').addEventListener('input', function(evt) {
        
        valido = document.getElementById('contrasenia');
        
        regex = /^/;

    if (regex.test(password.value) && longitud(password.value)) {
        valido.setAttribute("style", "color:green;","font-weight:bold;");
        valido.innerHTML = "Contraseña válida.";
    } else {
        setInterval(valido.setAttribute("style", "color:red;","font-weight:bold;"), 1000);
        valido.innerHTML = "Contraseña incorrecta.";
    }
  });