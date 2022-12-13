//Añadimos evento escuchar segun demos a enviar formulario
formulario.addEventListener('submit', comprobarDatos);

function comprobarDatos(e){
    //Funcion para que el formulario no refresque la página
    e.preventDefault();
    //Almacenamos en una variable todas las clases toppings para luego comprobar si están checkeadas o no
    let toppings = document.querySelectorAll('.toppings');
    for (let i = 0; i < toppings.length; i++) {
        if(toppings[i].checked){
            console.log(toppings[i].value);
        }
    }
    //En este caso como tenemos inputs radio con el mismo nombre, simplemente nos iremos al formulario y a cada elemento para comprobar si está checked
    let crust = formulario.crust;
    for (let i = 0; i < crust.length; i++) {
        if(crust[i].checked){
            console.log(crust[i].value);
        }
    }

}