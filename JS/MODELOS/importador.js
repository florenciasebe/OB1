export class Importador{
    constructor(unNombre, unUsuario, unaClave, unaFoto, unEstado){
        this.id=contadorDeImportadores;
        this.nombre= unNombre;
        this.usuario= unUsuario;
        this.clave= unaClave;
        this.foto= unaFoto;
        this.estado= "habilitado";

        contadorDeImportadores++;
    }
}