inicio()

function inicio (){
    ocultarTodo();
    document.querySelector("#divInicioSesion").style.display="block"
}

function ocultarTodo(){
    document.querySelector("#botonInicio").style.display="none"

divFormRegistro
divInicioSesion
divMenuEmpresa
divMenuImportador
divNewSolicitud
divSolicitudesPendientes
divNewViajeBuque
divAsignacionViaje
divRollover
divManifiesto
dviCargasPeligrosas
}

//escuchas de botones
document.querySelector("#btnHomero").addEventListener("click", mostrarHomero);
document.querySelector("#btnLisa").addEventListener("click", mostrarLisa);
document.querySelector("#btnBart").addEventListener("click", mostrarBart);
document.querySelector("#btnVolver").addEventListener("click", volver);

function mostrarHomero(){
    ocultarTodo()
    document.querySelector("#sectorHomero").style.display="block"
    document.querySelector("#botonInicio").style.display="block"
}

function volver(){
    inicio()
}

function mostrarLisa(){
    ocultarTodo()
    document.querySelector("#sectorLisa").style.display="block"
    document.querySelector("#botonInicio").style.display="block"
}

function mostrarBart(){
    ocultarTodo()
    document.querySelector("#sectorBart").style.display="block"
    document.querySelector("#botonInicio").style.display="block"
}