//ESTO ES UN OBJETO SOLICITUDES

export class Solicitudes{
    //PARA CREAR lista de solicitudes DEBO HACER NEW viajes(id, nombre, usuario....)
    constructor(id, unTC, unaDescripcion, unPuerto, Ccontenedores, estadoSolicitud, idImportador){
        this.id = id;
        this.tipoDeMercaderia = unTC;
        this.descripcion = unaDescripcion;
        this.puertoOrigen = unPuerto;
        this.cantidadContenedores = Ccontenedores;
        this.estado = estadoSolicitud;
        this.idViaje = null;
        this.idImportador = idImportador;
    }
}