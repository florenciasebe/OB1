import {Empresa} from './MODELOS/empresa.js';
import {Importador} from './MODELOS/importador.js';

let usuarioConectado=undefined; //usuario que esta conectado
let listaDeImportador = new Array ();
let listaDeEmpresas = new Array ();

//Precarga de datos del importador (hacer 5 como pide la letra)
let Impo1= new Importador (1, "cazul", "azul", "Ort22", "img/foto.jpg");
let Impo2= new Importador (2, "crojo", "rojo", "Ort22","img/foto.jpg");
let Impo3= new Importador (3,"cblanco", "blanco", "Ort22","img/foto.jpg");
let Impo4= new Importador (4,"cverde", "verde", "Ort22","img/foto.jpg");
let Impo5= new Importador (5,"cnaranja", "naranja", "Ort22","img/foto.jpg");

listaDeImportador.push(Impo1,Impo2,Impo3,Impo4,Impo5);

//Precarga de datos de las empresas
let Empresa1= new Empresa ()

// FORMULARIO DE REGISTRO - VALIDACIONES - CONFIRMAR REGISTRO //
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
    else if(!validarClave(claveImpo)){
        alert ("la clave debe contener minimo 5 caracteres, 1 mayuscula, 1 minuscula y 1 numero")
    } 
    else if(!esUsuarioValido(usuarioImpo)){
        alert ("Usuario ya registrado. Por favor, intentelo con otro nombre de usuario.")
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

// VALIDACION DE CLAVE //
function validarClave(unaClave){
    // mínimo de 5 caracteres, al menos una mayúscula, una minúscula y un número. 
    let valida= true;
    if (unaClave.length <5){
        valida= false
    }
    if (contarMayusculas(unaClave)<1){
        valida= false
    }
    if (contarMinusculas(unaClave)<1){
        valida= false
    }
    if (contarNumeros(unaClave)<1){
        valida= false
    }
    return valida
}
function contarMayusculas(texto){
    texto=texto.replaceAll(" ", "");
    let cantidadMayusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toUpperCase())
         && (isNaN(texto.charAt(i)))) {
            cantidadMayusculas++
        }
    }
    return cantidadMayusculas
}
function contarMinusculas(texto){
    texto=texto.replaceAll(" ", "");
    let cantidadMinusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toLowerCase()) 
        && (isNaN(texto.charAt(i)))){
            cantidadMinusculas++
        }
    }
    return cantidadMinusculas
}
function contarNumeros(texto){
    texto=texto.replaceAll(" ", "");
    let cantidadNumeros=0
    // recorro todo el string
    // !isNaN  es evaluar SI es número
    for (let i=0;i<texto.length;i++){
        if (!isNaN(texto.charAt(i))) {
            cantidadNumeros++
        }
    }
    return cantidadNumeros   
}

// VALIDACION DE USUARIO VS USUARIOS Y NOMBRE // 
function esUsuarioValido(user) {
    let usuarioValido = true;
    for(let importador of listaDeImportador) { // NOTAS FALTA VALIDARLO CONTRA EL ARRAY DE EMPRESA
        if (importador.usuario == user || importador.nombre == user) {
            usuarioValido = false;
        }
    }
    return usuarioValido;
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
