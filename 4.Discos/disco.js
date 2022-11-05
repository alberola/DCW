class Disco {
  nombre;
  grupo;
  anio;
  tipo;
  //Estanteria
  localizacion;
  prestado;
  //Constructor
  constructor(nombre, grupo, anio, tipo, localizacion) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.anio = anio;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.prestado = false;
  }
  //Getters
  getNombre() {
    return this.nombre;
  }
  getGrupo() {
    return this.grupo;
  }
  getAnio() {
    return this.anio;
  }
  getTipo() {
    return this.tipo;
  }
  getLocalizacion() {
    return this.localizacion;
  }
  getPrestado() {
    return this.prestado;
  }
  //Setters
  setNombre(nombre) {
      this.nombre = nombre;
  }
  setGrupo(grupo) {
    this.grupo = grupo;
  }
  setAnio(anio) {
    this.anio = anio;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setLocalizacion(localizacion) {
    this.localizacion = localizacion;
  }
  setPrestado(prestado) {
    this.prestado = prestado;
  }
  toString() {

  }
}

//Escondemos todo el contenido del HTML para ir mostrando cuando queramos
function esconderDatos(){
  errorText.innerHTML = "";
  document.getElementById("mostrar").style.display = 'none';
  document.getElementById("intervaloDiv").style.display = 'none';
  document.getElementById("anadir").style.display = 'none';
  document.getElementById("borrar").style.display = 'none';
  document.getElementById("consultar").style.display = 'none';
}
function limpiarTextoError(){
  errorText.innerHTML = "";
}


//Array de discos donde insertaremos los diferentes discos
var disquera = [];
//Variables para cambiar texto y color de texto de error
var errorText = document.getElementById('error-text');
var mostrarTabla = document.getElementById('mostrarTodo');

//Funcion para insertar Discos al final del array
function insertarDiscosFinal(nombre, grupo, anio, tipo, localizacion){
  let control = false;
  for (let i = 0; i < disquera.length; i++){
    if (disquera[i].localizacion == localizacion){
      errorText.style.color = "red"; 
      errorText.innerHTML = "No se ha podido insertar el Disco porque su localizacion está ocupada.";
      control = true;
      break;
    }
  }
  //Si no encuentra una localizacion igual meterá el disco en el array
  if (!control){
    disquera.push(new Disco(nombre, grupo, anio, tipo, localizacion));
    errorText.style.color = "green"; 
    errorText.innerHTML = "Disco Insertado Correctamente.";
  }
}

//Funcion para insertar Discos del array
function insertarDiscos(nombre, grupo, anio, tipo, localizacion){
  let control = false;
  for (let i = 0; i < disquera.length; i++){
    if (disquera[i].localizacion == localizacion){
      errorText.style.color = "red"; 
      errorText.innerHTML = "No se ha podido insertar el Disco porque su localizacion está ocupada.";
      control = true;
      break;
    }
  }
  //Si no encuentra una localizacion igual meterá el disco en el array
  if (!control){
    disquera.unshift(new Disco(nombre, grupo, anio, tipo, localizacion));
    errorText.style.color = "green"; 
    errorText.innerHTML = "Disco Insertado Correctamente.";
  }
}
//Recogida de datos para insertar Discos
function recogidaDatos(){
  let nombre = document.getElementById("nombre").value;
  let grupo = document.getElementById("grupo").value;
  let anio = document.getElementById("anio").value;
  let tipo = document.getElementById("tipo").value;
  console.log(nombre);
  let localizacion = document.getElementById("localizacion").value;
  if (!nombre || !grupo || !anio || !tipo || !localizacion ){
    errorText.style.color = "red"; 
    errorText.innerHTML = "No puede dejar ningún campo vacio.";
  } else {
    //Con evento de captura leemos que boton pulsamos para meter el disco al inicio o final de la disquera
    document.getElementById('insertaDisco').addEventListener("click", function(){ insertarDiscos(nombre, grupo, anio, tipo, localizacion)});
    document.getElementById('insertaDiscoFinal').addEventListener("click", function(){ insertarDiscosFinal(nombre, grupo, anio, tipo, localizacion)});
  }
}

//Funcion que carga datos de prueba
function testDisco(){
  let auxTamanio = disquera.length;
  insertarDiscosFinal("disco1","cantante1",1000,"rock",1);
  insertarDiscosFinal("disco2","cantante2",2000,"pop",2);
  insertarDiscosFinal("disco3","cantante3",3000,"jazz",3);
  if (disquera.length > auxTamanio){
    errorText.style.color = 'green';
    errorText.innerHTML = "Discos cargados correctamente.";
  } else {
    errorText.style.color = 'red';
    errorText.innerHTML = "No se han podido cargar los discos de prueba o ya están cargados.";
  }
}

//Funcion para mostrar los discos
function mostrarDiscos(){
  esconderDatos();
  document.getElementById('tablaTodo').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
  document.getElementById("mostrar").style.display = 'block';
  for (var i = 0; i < disquera.length; i++){
    document.getElementById('tablaTodo').innerHTML += "<tr>"+
    "<td>"+disquera[i].nombre+"</td>"+
    "<td>"+disquera[i].grupo+"</td>"+
    "<td>"+disquera[i].anio+"</td>"+
    "<td>"+disquera[i].tipo+"</td>"+
    "<td>"+disquera[i].localizacion+"</td>"+
    "</tr>";
  }
}

//Funcion para mostrar los discos segun su nombre en tiempo real
function opcionConsultar(){
  esconderDatos();
  limpiarTextoError()
  document.getElementById("consultar").style.display = 'block';
  inputMostrarNombre.addEventListener("input", generarTablaNombre);
  function generarTablaNombre(){
    //limpiamos la tabla siempre
    document.getElementById('tablaNombre').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
    let nombre = inputMostrarNombre.value;
    for (var i = 0; i < disquera.length; i++){
      if (disquera[i].nombre == nombre){
        document.getElementById('tablaNombre').innerHTML += "<tr>"+
          "<td>"+disquera[i].nombre+"</td>"+
          "<td>"+disquera[i].grupo+"</td>"+
          "<td>"+disquera[i].anio+"</td>"+
          "<td>"+disquera[i].tipo+"</td>"+
          "<td>"+disquera[i].localizacion+"</td>"+
          "</tr>";
      }
    }
    if (nombre == ""){
      errorText.innerHTML = "";
    } else {
      errorText.style.color = 'red';
      errorText.innerHTML = "No se encuentra el disco en la disquera.";
    }
  }
}
//Funcion que borrará discos de la disquera
function borrar(){
  let localizacionBorrar = document.getElementById("inputBorrar").value;
  let auxBooleana = false;
  for (let i = 0; i < disquera.length; i++) {
    //Si encontramos elemento localizacion deseada eliminamos dicho disco
    if (disquera[i].localizacion == localizacionBorrar){
      disquera.splice(i,1);
      auxBooleana = true;
      errorText.style.color = 'green';
      errorText.innerHTML = "Disco eliminado correctamente.";
      break;
    }
  }
  if (!auxBooleana) {
    errorText.style.color = 'red';
    errorText.innerHTML = "No se ha podido borrar dicho disco.";
  }
}
//Funcion que se habilita al Pulsar boton intervalo Discos
function opcionIntervalo(){
  esconderDatos()
  document.getElementById("intervaloDiv").style.display = 'block';
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
    errorText.innerHTML ="";
    document.getElementById('tablaIntervalo').innerHTML = "<tr><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th></tr>";
    //Si cumple el patron deseado y el segundo número introducido no es mayor que la longitud de la disquera imprimira el intervalo
    if (regex.test(intervalo) && numeros[1] < disquera.length) {
      //Imprimimos tabla desde los valores almacenados en numero
      for (var i = numeros[0]; i <= numeros[1]; i++){
        document.getElementById('tablaIntervalo').innerHTML += "<tr>"+
        "<td>"+disquera[i].nombre+"</td>"+
        "<td>"+disquera[i].grupo+"</td>"+
        "<td>"+disquera[i].anio+"</td>"+
        "<td>"+disquera[i].tipo+"</td>"+
        "<td>"+disquera[i].localizacion+"</td>"+
        "</tr>";
      }
        if (numeros[0] < 0 || numeros[0] > disquera.length || numeros[1] > disquera.length || numeros[0] > numeros[1]){
          errorText.style.color = 'red';
          errorText.innerHTML = "El intervalo no está dentro de los parametros de la lista.";
        }
    //Si el input está vacio limpiará el texto de error.
    } else if (intervalo == ""){
        errorText.innerHTML ="";
    //Si no se cumplen la condiciones mostrará el mensaje de error
    } else if (disquera.length == 0){
      errorText.style.color = 'red';
      errorText.innerHTML = "La disquera está vacia.";
    } else if (numeros[1] > disquera.length){
      errorText.style.color = 'red';
      errorText.innerHTML = "El segundo número se sale de rango dentro del array.";
    } else {
        errorText.style.color = 'red';
        errorText.innerHTML = "Formato de intervalo incorrecto recuerda que debes introduces un numero - y otro número.";
    }
  }
}
//Funcion para invertirDisquera
function invertirDisquera(){
  //Invertimos la disquera
  disquera.reverse();
  //Llamamos a la funcion para imprimir todo
  mostrarDiscos();
}
//Funcion para cargar opciones de añadir
function opcionesAnadir(){
  esconderDatos()
  limpiarTextoError()
  document.getElementById("anadir").style.display = 'block';
}
//funcion para cargar opciones de borrado
function opcionBorrar(){
  esconderDatos()
  limpiarTextoError()
  document.getElementById("borrar").style.display = 'block';
}
