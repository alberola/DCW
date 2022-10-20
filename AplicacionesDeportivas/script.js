setTimeout(popUp, 10000);

//Funcion que abre un html que con un ancho y largo determinado
function popUp(){
    window.open('Bienvenido.html',"Bienvenido", "width=300, height=200,left=750, scrollbars=no, resizable=no,menubar=no, top=400");
}
//Función para mostrar la hora en la esquina superior izquierda
function hora(){
    fechaActual = new Date();
    //Creamos fecha y una vez creada mostraremos los datos en una parte del html.
    document.getElementById("anio").innerHTML = fechaActual.getFullYear();
    document.getElementById("dia").innerHTML = fechaActual.getDate();
    document.getElementById("mes").innerHTML = fechaActual.toLocaleDateString('es-ES', {month: 'long'});
} 
//Evento de escucha de un input donde estará la contraseña y analizaremos en tiempo real si la contraseña es valida o no
document.getElementById('password').addEventListener('input', function comprobar() {
        
        let valido = document.getElementById('contrasenia');
        //Variable que contiene una expresión regular para comprobar la contraseña
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;

    if (regex.test(document.getElementById('password').value)) {
        valido.setAttribute("style", "color:green;","font-weight:bold;");
        valido.innerHTML = "Contraseña válida.";
        
    } else {
        valido.setAttribute("style", "color:red;","font-weight:bold;");
        valido.innerHTML = "Contraseña incorrecta.";
    }
});


function cerrar(){
    window.close();
}