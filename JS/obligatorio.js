inicio()

function inicio (){
    ocultarTodo();
    document.querySelector("#divInicioSesion").style.display="block"
}

//ocultamos todos los divs (cada pantalla)
function ocultarTodo(){
    document.querySelector("#divFormRegistro").style.display="none"
    document.querySelector("#divInicioSesion").style.display="none"
    document.querySelector("#divMenuEmpresa").style.display="none"
    document.querySelector("#divMenuImportador").style.display="none"
    document.querySelector("#divNewSolicitud").style.display="none"
    document.querySelector("#divSolicitudesPendientes").style.display="none"
    document.querySelector("#divNewViajeBuque").style.display="none"
    document.querySelector("#divAsignacionViaje").style.display="none"
    document.querySelector("#divRollover").style.display="none"
    document.querySelector("#divManifiesto").style.display="none"
    document.querySelector("#divCargasPeligrosas").style.display="none"
}

//escuchas de botones
document.querySelector("#btnCrearViaje").addEventListener("click", crearViaje);
document.querySelector("#btnAsignarSolicitud").addEventListener("click", asiganSolicitud);
document.querySelector("#btnRollover").addEventListener("click", rollover);
document.querySelector("#btnManifiesto").addEventListener("click", manifiesto);
document.querySelector("#btnHabilitarImportadores").addEventListener("click", habilitarImportadores);
document.querySelector("#btnCargaPeligrosa").addEventListener("click", cargaPeligrosa);
document.querySelector("#btnLogoutEmpresa").addEventListener("click", logoutEmpresa);
document.querySelector("#btnInicioSesion").addEventListener("click", iniciarSesionEmpresa);

function iniciarSesionEmpresa(){
    ocultarTodo()
    document.querySelector("#divMenuEmpresa").style.display="block"
}

function crearViaje (){
    ocultarTodo()
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divCrearViaje").style.display="block"
}