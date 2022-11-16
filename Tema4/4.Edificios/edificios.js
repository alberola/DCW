function Edificio(calle,numero,codigo){
    // Sólo requiere tres parámetros que pasamos a inicializar
    this.calle=calle;
    this.numero=numero;
    this.codigo=codigo;
    // El número de plantas y puertas puede variar pero no hacen falta
    this.numplantas=0;
    this.puertas=new Array();
    // Los propietarios tendrán asignado un piso de una planta, pero
    this.propietario=new Array();
    this.propietario[0]=new Array();
    // Indicamos cuáles serán los métodos que podrá gestionar la clase
    this.agregarPlantasYPuertas=agregarPlantasYPuertas;
    this.agregarPropietario=agregarPropietario;
    this.modificarCalle=modificarCalle;
    this.modificarNumero=modificarNumero;
    this.modificarCodigoPostal=modificarCodigoPostal;
    this.imprimeCalle=imprimeCalle;
    this.imprimeNumero=imprimeNumero;
    this.imprimeCodigoPostal=imprimeCodigoPostal;
    this.imprimePlantas=imprimePlantas;

    // Creamos el método encargado de indicarle a la clase el número de
    function agregarPlantasYPuertas(numplantas,puertas){
        // Comprobamos que no hayamos introducido un número nulo o negativo de plantas
        if(numplantas<=0){
            errorText.innerHTML += ("No puede agregar un numero nulo o negativo de plantas<br />");
        // Si el número de plantas es correcto
        }else{
            // Almacenamos la longitud del primer índice del array 'propietario'
            var cuantos = this.propietario.length;
            // Si hemos introducido un número de puertas por plantas, lo insertamos en cada una
            if(puertas>0){
                for(var i=this.numplantas+1;i<=this.numplantas+numplantas;i++)
                    this.puertas[i]=puertas;
            }else{
                for(var i=this.numplantas+1;i<=this.numplantas+numplantas;i++)
                    this.puertas[i]=this.puertas[this.numplantas];
                
                errorText.innerHTML += ("No se pueden introducir número de puertas negativos o nulos.<br />Añadidas las mismas que las anteriores.<br />");
            }
            // añadimos a las plantas existentes las que le pasamos al método como parámetro
            this.numplantas+=numplantas;
            // Se crea un nuevo array del tamaño del número de puertas para cada planta.
            for(var i=cuantos;i<=this.numplantas;i++){
                this.propietario[i] = new Array();
                // Las puertas de la planta creada se inicializan sin propietarios
                for(var e=1;e<=this.puertas[i];e++)
                    this.propietario[i][e]= "";
            }
        }
    }
    // Método para agregar propietarios a cada una de las puertas
    function agregarPropietario(nombre,planta,puerta){
        // Comprobamos si hemos introducido un número de planta erróneo
        if(planta>this.propietario.length-1 || planta<1){
            textoError(nombre,puerta,planta);
        // Comprobamos si hemos introducido un número de puerta erróneo
        }else if(puerta>this.propietario[planta].length-1 || puerta<1){
            textoError(nombre,puerta,planta);
        }else{
            this.propietario[planta][puerta]=nombre;
            // Imprimimos el mensaje de propietario creado cada vez que se asigne
            errorText.innerHTML += (this.propietario[planta][puerta]+" es ahora el propietario de la puerta "+puerta+" de la planta "+planta+"<br>");
        }
    }
    // Tres métodos que nos permitirá cambiar los datos del edificio
    function modificarNumero(numero){
        this.numero=numero;
    }
    function modificarCalle(calle){
        this.calle=calle;
    }
    function modificarCodigoPostal(codigo){
        this.codigo=codigo;
    }
    // Tres métodos que nos imprime los datos del edificio
    function imprimeCalle(){
        return this.calle;
    }
    function imprimeNumero(){
        return this.numero;
    }
    function imprimeCodigoPostal(){
        return this.codigo;
    }
    // Función que recorre el array de propietarios mostrando todos sus datos.
    function imprimePlantas(){
        errorText.innerHTML += ("<strong>Listado de propietarios del edificio calle "+this.imprimeCalle()+" nº: "+this.imprimeNumero()+"</strong><br>");
        for(var i=1;i<=this.numplantas;i++){
            for(var e=1;e<=this.puertas[i];e++){
                errorText.innerHTML += ("El propietario del piso "+e+" de la planta "+i+" es: "+this.propietario[i][e]+"<br>");
            }
        }
    }
    // Método que recibe los parámetros del error que deseamos imprimir
    // No tenemos que declararlo al principio de la clase porque sólo se llamará desde su interior
    function textoError(nomb,nume,piso){
        errorText.innerHTML += ("PROPIETARIO ("+nomb+") NO ASIGNADO <strong>La puerta ("+nume+"ª) del piso ("+piso+"º) no existe</strong><br>");
    }
    // Cada objeto creado con esta clase hará que nos muestre el mensaje de
    // Construido nuevo edificio en calle: tal nº: cual C.P.: sea
    errorText.innerHTML += ("Construido nuevo edificio en calle: "+this.imprimeCalle()+" nº: "+this.imprimeNumero()+", C.P.: "+this.imprimeCodigoPostal()+"<br>");
}
var errorText = document.getElementById("error-text");
//Funcion que ejecuta pruebas para mostrar resultados al pulsar el boton
function cargarPruebas(){
    errorText.innerHTML = "";
    //Insertamos 3 edificios e mprimimos datos de los mismos
    var edificioA = new Edificio("García Prieto","58","15706");
    var edificioB = new Edificio("Camino Caneiro","29","32004");
    var edificioC = new Edificio("San Clemente","s/n","15705");
    errorText.innerHTML += "El código postal del edificio A es: "+edificioA.imprimeCodigoPostal()+"<br>";
    errorText.innerHTML += "La calle del edificio C es: "+edificioC.imprimeCalle()+"<br>";
    errorText.innerHTML += "El edificio B está situado en la calle "+edificioB.imprimeCalle()+" número "+edificioB.imprimeNumero()+"<br>";
    // Agregamos dos plantas con tres puertas cada una
    edificioA.agregarPlantasYPuertas(2,3);
    // Añadimos varios propietarios
    edificioA.agregarPropietario("José Antonio López",1,1);
    edificioA.agregarPropietario("Luisa Martínez",1,2);
    edificioA.agregarPropietario("Marta Castellón",1,3);
    edificioA.agregarPropietario("Antonio Pereira",2,2);
    // Listamos los propietarios de cada una de las viviendas, comenzando con
    edificioA.imprimePlantas();
    // Agregamos una nueva planta con su número de puertas
    edificioA.agregarPlantasYPuertas(1,1);
    // Añadimos un nuevo propietario para la puerta 2 del piso 3º
    edificioA.agregarPropietario("Pedro Meijide",2,3);
    // Volvemos a imprimir un listado de propietarios, pero en esta ocasión tendrá un
    edificioA.imprimePlantas();
}