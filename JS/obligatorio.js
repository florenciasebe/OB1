//import {Empresa} from './MODELOS/empresa.js';
import {Importador} from './MODELOS/importador.js';

let usuarioConectado=undefined; //usuario que esta conectado, es muy importande
let listaDeImportador = new Array ();


// Cargar IMG en el FORMULARIO DE REGISTRO //
document.querySelector("#btnRegistrar").addEventListener("click", registrarImpo);
function registrarImpo(){
    //asignacion de variables
    let nombreImpo = getNombreImportador();
    let usuarioImpo = getUsuarioImportador();
    let fotoImpo = getFotoImportador();
    let claveImpo = getClaveImportador();
    // Validaciones 
    if (nombreImpo == "" || usuarioImpo == ""|| !fotoImpo || claveImpo == "" ) {
        alert ("Todos los campos son obligatorios. Por favor vuelve a internarlo.")
    } 
    
    else {
        let id = listaDeImportador.length + 1;
        let importador = new Importador(id,nombreImpo,
            usuarioImpo, 
            fotoImpo.name,
            nombreImpo);
            //guarda en el array
        listaDeImportador.push(importador); 
        alert ("usuario registrado correctamente")
        irHome();
    }
}

//Precarga de datos del importador (hacer 5 como pide la letra)
let Impo1= new Importador ("cazul", "azul", "Ort22", "img/foto.jpg");
let Impo2= new Importador ("crojo", "rojo", "Ort22","img/foto.jpg");
let Impo3= new Importador ("cblanco", "blanco", "Ort22","img/foto.jpg");
let Impo4= new Importador ("cverde", "verde", "Ort22","img/foto.jpg");
let Impo5= new Importador ("cnaranja", "naranja", "Ort22","img/foto.jpg");

listaDeImportador.push(Impo1,Impo2,Impo3,Impo4,Impo5);


// LEVANTAR DATOS DEL FORMULARIO DE REGISTRO //
function getNombreImportador() {
    return document.querySelector("#nombreImportador").value
}
function getUsuarioImportador() {
    return document.querySelector("#usuarioImportador").value
}
function getFotoImportador() {
    return document.querySelector("#txtFoto").files[0]
}
function getClaveImportador() {
    return document.querySelector("#txtClaveImpo").value
}


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
document.querySelector("#btnLogout").addEventListener("click", irHome);

// PANTALLAS GENERALES//

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

function irHome(){
    ocultarTodo()
    inicio()
}

function irRegistrar (){
    ocultarTodo()
    document.querySelector("#divFormRegistro").style.display="block"
}


// PANTALLAS IMPORTADORES//

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

// PANTALLAS EMPRESAS // 
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
