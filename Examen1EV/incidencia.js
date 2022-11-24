class Incidencia {
    //Atributos que tendrá la clase Incidencia
    fecha;
    usuario;
    telefono;
    correo;
    responsable;
    incidencia;
    prioridad;
    estado;
    observaciones;

    coleccion = [];
    //Constructor para crear objetos Incidencia
    constructor(fecha, usuario, telefono, correo, tipoIncidencia, prioridad,  observaciones) {
        this.fecha = new Date(fecha);
        this.usuario = usuario;
        this.telefono = telefono;
        this.correo = correo;
        this.responsable = "sin asignar";
        this.incidencia = tipoIncidencia;
        this.prioridad = prioridad;
        this.estado = "tramitada";
        this.observaciones = observaciones;
    }


    //Metodo para introducir dentro del arary colección que no pude implementar porque me confundi y me faltó tiempo
    crearIncidencia(fecha, usuario,telefono,correo,responsable,incidencia,prioridad,estado,observaciones){
        for (let i = 0; i < this.coleccion.length; i++) {
            if (this.coleccion[i] == null){
                this.coleccion[i] = new Incidencia(fecha, usuario,telefono,correo,responsable,incidencia,prioridad,estado,observaciones);
            }
        }
    }

}