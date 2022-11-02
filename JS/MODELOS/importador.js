//ESTO ES UN OBJETO IMPORTADOR

export class Importador{
    //PARA CREAR EL IMPORTADOR DEBO HACER NEW Importador(id, nombre, usuario....)
    constructor(id, unNombre, unUsuario, unaClave, unaFoto){
        this.id = id;
        this.nombre = unNombre;
        this.usuario = unUsuario;
        this.clave = unaClave;
        this.foto = unaFoto;
        this.estado = "habilitado";
    }
}