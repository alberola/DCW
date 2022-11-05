function Edificio(calle,numero,codigo){
    // Sólo requiere tres parámetros que pasamos a inicializar
    this.calle=calle;
    this.numero=numero;
    this.codigo=codigo;
    // El número de plantas y puertas puede variar pero no hacen falta
    // indicarlo cuando se crea la clase
    this.numplantas=0;
    this.puertas=new Array();
    // Los propietarios tendrán asignado un piso de una planta, pero
    // no tiene por qué indicarlos al crear la clase, aunque al igual que
    // las plantas y puertas, se ha de inicializar su contenedor.
    // Utilizo un array bidimensional para que el primer índice recoja el
    // nº de la planta y el segundo el número del piso
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

    // Setters 
    function setNumero(numero){
        this.numero=numero;
    }
    function setCalle(calle){
        this.calle=calle;
    }
    function setCodigoPostal(codigo){
        this.codigo=codigo;
    }
    // Getters
    function getCalle(){
        return this.calle;
    }
    function getNumero(){
        return this.numero;
    }
    function getCodigoPostal(){
        return this.codigo;
    }


    // función para insertar número de plantas y puertas que tendrá el edificio
    function agregarPlantasYPuertas(numplantas,puertas){
        if(numplantas<=0){
            document.write("No puede agregar un numero nulo o negativo de plantas<br />");
        // Si el número de plantas es correcto
        }else{
            // Almacenamos la longitud del primer índice del array 'propietario'
            var cuantos = this.propietario.length;
            if(puertas>0){
                for(var i=this.numplantas+1;i<=this.numplantas+numplantas;i++)
                    this.puertas[i]=puertas;
            }else{
                for(var i=this.numplantas+1;i<=this.numplantas+numplantas;i++)
                    this.puertas[i]=this.puertas[this.numplantas];
                
                document.write("NO se pueden introducir número de puertas negativos o nulos.<br />Añadidas las mismas que las anteriores.<br />");
            }
            // añadimos a las plantas existentes las que le pasamos al método como parámetro
            this.numplantas+=numplantas;
            // Se crea un nuevo array del tamaño del número de puertas para cada planta.
            for(var i=cuantos;i<=this.numplantas;i++){
                this.propietario[i] = new Array();
                // Las puertas de la planta creada se inicializan sin propietarios
                for(var e=1;e<=this.puertas[i];e++)
                    this.propietario[i][e]="VACÍO";
            }
        }
    }
    // Método para agregar propietarios a cada una de las puertas
    // Utilizo los parámetros planta y puerta como clave del índice para almacenar
    // los nombres de los propietarios
    function agregarPropietario(nombre,planta,puerta){
        // Comprobamos si hemos introducido un número de planta erróneo
        if(planta>this.propietario.length-1 || planta<1){
            textoError(nombre,puerta,planta);
        // Comprobamos si hemos introducido un número de puerta erróneo
        }else if(puerta>this.propietario[planta].length-1 || puerta<1){
            textoError(nombre,puerta,planta);
        // Si no se han producido errores
        }else{
            this.propietario[planta][puerta]=nombre;
            // Imprimimos el mensaje de propietario creado cada vez que se asigne
            // un piso a un propietario
            document.write(this.propietario[planta][puerta]+" es ahora el propietario de la puerta "+puerta+" de la planta "+planta+"<br />");
        }
    }
    
    // Función que recorre el array de propietarios mostrando todos sus datos.
    // En this.numplantas tenemos el tamaño del array, y en this.puertas tenemos
    // almacenado el número de pisos por planta. Los índices de 'this.propietario'
    // coinciden con la planta y la puerta.
    // Comenzaremos indicando la dirección del edificio al que pertenece
    function imprimePlantas(){
        document.write("<b>Listado de propietarios del edificio calle "+this.imprimeCalle()+" nº: "+this.imprimeNumero()+"</b><br />");
        for(var i=1;i<=this.numplantas;i++){
            for(var e=1;e<=this.puertas[i];e++){
                document.write("El propietario del piso "+e+" de la planta "+i+" es: "+this.propietario[i][e]+"<br />");
            }
        }
    }
    // Método que recibe los parámetros del error que deseamos imprimir
    // No tenemos que declararlo al principio de la clase porque sólo se llamará desde su interior
    function textoError(nomb,nume,piso){
            document.write("PROPIETARIO ("+nomb+") NO ASIGNADO <b>La puerta ("+nume+"ª) del piso ("+piso+"º) no existe</b><br />");
    }
    // Cada objeto creado con esta clase hará que nos muestre el mensaje de
    // Construido nuevo edificio en calle: tal nº: cual C.P.: sea
    document.write("Construido nuevo edificio en calle: "+this.imprimeCalle()+" nº: "+this.imprimeNumero()+", C.P.: "+this.imprimeCodigoPostal()+"<br />");
}