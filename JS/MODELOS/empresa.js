export class Empresa {
    constructor (unNombre, unUsuario, unaClave){

        this.id=contadorDeEmpresas;
        this.nombre=unNombre;
        this.usuario=unUsuario;
        this.clave=unaClave;

        contadorDeEmpresas++;
    }
}