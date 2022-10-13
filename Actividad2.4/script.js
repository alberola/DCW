function finCurso(){
    const hoy = new Date(Date.now());
    const fechaTope = new Date ('6/24/2023');
    const diferenciaTiempo = Math.abs(fechaTope-hoy);
    const diferenciaDias = Math.ceil( diferenciaTiempo / (1000*60*60*24));
    document.getElementById("finCurso").innerHTML = "Desde hoy hasta el 24 de Junio quedan: "+diferenciaDias;
}
function domingos(){
    let dias = parseInt(prompt("Introduce el dia de tu cumpleaños"));
    let mes = parseInt(prompt("Ahora introduce el mes en formato numérico")-1);
    let anio = parseInt(prompt("Introduce el Año desde donde quiere calcular"));
    let fechaIntroducida = new Date(anio,mes,dias);

    console.log(fechaIntroducida);

    document.getElementById("domingos").innerHTML = "";

    for( let i = fechaIntroducida.getFullYear(); i <= 2100 ; i++){
        let fechaComparar = new Date(i,fechaIntroducida.getMonth(),fechaIntroducida.getDate());
        if(fechaComparar.getDay() == 0){
            console.log(fechaComparar);
            document.getElementById("domingos").innerHTML += "Tu cumpleaños cae domingo en: "+i+".<br>";
        }
    }
}
function formatoFechas(){
    let escribir = document.getElementById("formatoFechas");
    let dias = parseInt(prompt("Introduce el dia del año."));
    let mes = parseInt(prompt("Ahora introduce el mes en formato numérico.")-1);
    let anio = parseInt(prompt("Introduce el año."));
    let fechaIntroducida = new Date(anio,mes,dias);
    escribir.innerHTML = "";
    //Forma ya definida 
    escribir.innerHTML += fechaIntroducida.toLocaleDateString()+"<br>";
    const opciones = { weekday: 'long', day: 'numeric',  month: 'long', year: 'numeric' };
    //Forma de hacerlo con variable opciones
    escribir.innerHTML += fechaIntroducida.toLocaleDateString('es-ES',opciones)+"<br>";
    //Forma insertando funcion dentro de los parentesis
    escribir.innerHTML += fechaIntroducida.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' , year: 'numeric' });
}

//Parte del codigo que se ejecuta al entrar en contacto con los elementos input radio del HTML
const diaHoy = new Date();
document.getElementById("opcion").addEventListener("input", (e) => {
    document.getElementById("formatoHoras").innerHTML = diaHoy.getHours()+":"+diaHoy.getMinutes()+":"+diaHoy.getSeconds();
});
document.getElementById("opcion1").addEventListener("input", (e) => {
    document.getElementById("formatoHoras").innerHTML =   diaHoy.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })+" AM.";
});
document.getElementById("opcion2").addEventListener("input", (e) => {
    document.getElementById("formatoHoras").innerHTML = diaHoy.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })+".";
});