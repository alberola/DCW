function popUp(){
    window.open("Bienvenido.hmtl", width=200,height=100);
}
function hora(){
    fechaActual = new Date();
    document.getElementById("anio").innerHTML = fechaActual.getFullYear();
    document.getElementById("dia").innerHTML = fechaActual.getDate();
    document.getElementById("mes").innerHTML = fechaActual.toLocaleDateString('es-ES', {month: 'long'});
}