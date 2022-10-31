



























// PANTALLAS // 

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
    document.querySelector("#divSalir").style.display="none"
    document.querySelector("#divEstadisticas").style.display="none"
    document.querySelector("#divHabilitarImpo").style.display="none"
}

//escuchas de botones
document.querySelector("#btnCrearViaje").addEventListener("click", crearViaje);
document.querySelector("#btnAsignarSolicitud").addEventListener("click", asignarSolicitud);
document.querySelector("#btnRollover").addEventListener("click", rollover);
document.querySelector("#btnManifiesto").addEventListener("click", manifiesto);
document.querySelector("#btnHabilitarImportadores").addEventListener("click", habilitarImportadores);
document.querySelector("#btnCargaPeligrosa").addEventListener("click", cargaPeligrosa);
document.querySelector("#btnEstadisticas").addEventListener("click", mostrarEstadisticas);
document.querySelector("#btnNuevaSolicitud").addEventListener("click", nuevaSolicitud);
document.querySelector("#btnSolicitudespendientes").addEventListener("click", solicitudesPendientes);
document.querySelector("#btnregistrarImportador").addEventListener("click", irRegistrar);
document.querySelector("#btnInicioSesion").addEventListener("click", iniciarSesion);
document.querySelector("#btnLogout").addEventListener("click", logout);
document.querySelector("#btnRegistrar").addEventListener("click", logout);


function iniciarSesion(){
    if (document.querySelector("#slcElegirUsuario").value == "e") {
        ocultarTodo()
        document.querySelector("#divMenuEmpresa").style.display="block"
        document.querySelector("#divSalir").style.display="block"
    }
    else {
        ocultarTodo()
        document.querySelector("#divMenuImportador").style.display="block"
        document.querySelector("#divSalir").style.display="block"
    }
}

function logout (){
    ocultarTodo()
    inicio()
}

function irRegistrar (){
    ocultarTodo()
    document.querySelector("#divFormRegistro").style.display="block"
}

// FPANTALLAS IMPORTADORES//

function mostrarEstadisticas (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuImportador").style.display="block"
    document.querySelector("#divEstadisticas").style.display="block"
}
function nuevaSolicitud (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuImportador").style.display="block"
    document.querySelector("#divNewSolicitud").style.display="block"
}
function solicitudesPendientes (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuImportador").style.display="block"
    document.querySelector("#divSolicitudesPendientes").style.display="block"
}

// FPANTALLAS EMPRESAS // 
function crearViaje (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divNewViajeBuque").style.display="block"
}
function asignarSolicitud (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divAsignacionViaje").style.display="block"
}
function rollover (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divRollover").style.display="block"
}
function manifiesto(){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divManifiesto").style.display="block"
}
function habilitarImportadores (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divHabilitarImpo").style.display="block"
}
function cargaPeligrosa (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divCargasPeligrosas").style.display="block"
}
