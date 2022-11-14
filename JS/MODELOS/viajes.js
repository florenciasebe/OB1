//ESTO ES UN OBJETO VIAJES

export class Viajes{
    //PARA CREAR viajes DEBO HACER NEW viajes(id, nombre, usuario....)
    constructor(id, Nbuque, maxContenedores, NombreE, Fllegada, cantidadDisponible=maxContenedores){
        this.id = id;
        this.nombreBuque = Nbuque;
        this.maximoContenedores = maxContenedores;
        this.nombreEmpresa = NombreE;
        this.fechaLlegada = Fllegada;
        this.cantidadDisponible = cantidadDisponible;
    }
}