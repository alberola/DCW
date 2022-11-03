//Lista de paises metidos en un array, todos estos nombre se han obtenido de internet.
//No se muestra de color por ahorro de memora en vsc
var paises = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda","Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados","Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana","Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde","Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic","Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark","Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea","Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana","Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong","Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan","Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia","Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar","Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia","Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand","Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru","Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome","Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia","Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden","Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago","Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States","Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];


//Mostramos la cantidad de elementos del array
function numeroPaises(){
numPaises.innerHTML = "Número de paises = "+paises.length+".";
}

//For each para meter dentro del select opciones
function select(){
    listaPaises.innerHTML = "<option value='inicio' selected disabled>Lista de paises</option>";
    paises.forEach(element => {
        listaPaises.innerHTML += "<option value="+element+">"+element+"</option>";
    });
}

//For each para meter dentro del select opciones de paises en orden inverso
function selectInverso(){
    //Copiamos la lista original a una nueva lista invertida
    let paisesInversa = paises.slice();
    listaPaisesInversa.innerHTML = "<option value='inicio' selected disabled>Lista de paises Inversa</option>";
    paisesInversa.reverse().forEach(element => {
        listaPaisesInversa.innerHTML += "<option value="+element+">"+element+"</option>";
    });
}

//Función que agregará un elemento a la lista de paises
function agregarElemento(){
    let elementoInput = document.getElementById("anadirPais").value;
    if(elementoInput == ""){
        errorTexto.innerHTML = "<span style='color:red;'>No puede dejar el input vacio</span>";
    } else {
        //Pasaremos el primer caracter del input a mayuscula y comprobaremos con los paises a ver si coincide
        if(paises.indexOf(elementoInput.charAt(0).toUpperCase() + elementoInput.slice(1)) === -1){
            //Si se cumple la condicion metemos en el array e imprimiremos la comprobacion
            paises.unshift(elementoInput);
            if (paises[0] == elementoInput){
                errorTexto.innerHTML = "<span style='color:green;'>Pais añadido correctamente</span>";
                console.log(paises[0]);
                document.getElementById("anadirPais").value = "";
                select();
                selectInverso();
                numeroPaises();
            }else {
                "<span style='color:red;'>Error al introducir el Pais</span>";
                errorTexto.innerHTML = "<span style='color:red;'>Error al introducir el Pais</span>";
            }
            //Si el país que intentamos meter ya se encuentra imprimiremos el error correspondiente.
        } else {
            errorTexto.innerHTML = "<span style='color:red;'>El pais que intenta introducir ya se encuentra en la lista</span>";
        }
    }

}
//Función que agregará un elemento a la lista de paises
function agregarElementoFinal(){
    let elementoInput = document.getElementById("anadirPaisFinal").value;
    if(elementoInput == ""){
        errorTextoFinal.innerHTML = "<span style='color:red;'>No puede dejar el input vacio</span>";
    } else {
        //Pasaremos el primer caracter del input a mayuscula y comprobaremos con los paises a ver si coincide
        if(paises.indexOf(elementoInput.charAt(0).toUpperCase() + elementoInput.slice(1)) === -1){
            //Si se cumple la condicion metemos en el array e imprimiremos la comprobacion
            paises.push(elementoInput);
            if (paises[paises.length - 1] == elementoInput){
                errorTextoFinal.innerHTML = "<span style='color:green;'>Pais añadido correctamente</span>";
                document.getElementById("anadirPaisFinal").value = "";
                select();
                selectInverso();
                numeroPaises();
            } else {
                "<span style='color:red;'>Error al introducir el Pais</span>";
                errorTextoFinal.innerHTML = "<span style='color:red;'>Error al introducir el Pais</span>";
            }
            //Si el país que intentamos meter ya se encuentra imprimiremos el error correspondiente.
        } else {
            errorTextoFinal.innerHTML = "<span style='color:red;'>El pais que intenta introducir ya se encuentra en la lista</span>";;
        }
    }
}
//Funcion para borrar 1º elemento de un array
function borrarElemento(){
    let primerElementoBorrado = paises.shift();;
    borradoTexto.innerHTML = "Se ha eliminado a <strong>" +primerElementoBorrado+"</strong>";
    select();
    selectInverso();
    numeroPaises();
}
//Funcion para eliminar último elemento de un array
function borrarUltimoElemento(){
    let ultimoElementoBorrado = paises.pop();
    borradoTexto.innerHTML = "Se ha eliminado a <strong>" +ultimoElementoBorrado+"</strong>";
    select();
    selectInverso();
    numeroPaises();
}

//Evento para escuchar input sobre posicion de un elemento
posicionArray.addEventListener("input", valorInputPosicion);

//Función para habilitar evento de escucha
function valorInputPosicion(){
    let posicion = (document.getElementById("posicionArray").value);

    //Si es un string 
    if (isNaN(posicion)){
        if (paises.indexOf(posicion) != -1){
            //En caso de que se encuentre el pais mostrará la posición
            datosArray.innerHTML = "<span style='color:green'>La posicion de dicho pais es : "+paises.indexOf(posicion)+"</span>";
        } else {
            //En caso de que no se encuentre el pais
            datosArray.innerHTML = "<span style='color:red'>Dicho pais no se encuentra en la lista...</span>";
        }
    //Si es un numero se ejecuta esta parte del código
    } else {
        if ( paises[posicion] != null){
            //En caso de que se encuentre un elemento en dicha posicion
            datosArray.innerHTML = "<span style='color:green'>El elemento de esta posición es : "+paises[posicion]+"</span>";
        } else if (posicion == ""){
            datosArray.innerHTML = "";
        } else {
            //En caso de que no se encuentre
            datosArray.innerHTML = "<span style='color:red'>No hay ningún pais en dicha posición.</span>";
        }
    }
}

//Funcion para habilitar evento de escuchad e intervalo
intervalo.addEventListener("input", eventoIntervalo);

//Funcion para habilitar evento de escucha
function eventoIntervalo(){
    //capturamos valor de input
    let intervalo = (document.getElementById("intervalo").value);
    //Separamos valores
    let numeros = intervalo.split("-");
    //Regex para capturar intervalo
    let regex = /\d+-\d+/;
    //Si cumple el patron deseado imprimira el intervalo deseado
    if (regex.test(intervalo)) {
        intervaloArray.innerHTML = "<span style='color:green;'>"+paises.slice(numeros[0], numeros[1])+"</span>";
        if (numeros[0] < 0 || numeros[0] > paises.length || numeros[1] > paises.length){
            intervaloArray.innerHTML = "<span style='color:red;'>El intervalo no está dentro de los parametros de la lista.</span>";
        }
    //Si el input está vacio limpiará el texto de error.
    } else if (intervalo == ""){
        intervaloArray.innerHTML ="";
    //Si no se cumplen la condiciones mostrará el mensaje de error
    } else {
        intervaloArray.innerHTML = "<span style='color:red;'>Formato de intervalo incorrecto<br>Recuerda que debes introduces un numero - y otro número.</span>";
    }
}