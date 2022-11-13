//Importamos los array(objetos) que estan en la carpeta de modelos
import {Empresa} from './MODELOS/empresa.js';
import {Importador} from './MODELOS/importador.js';
import {Solicitudes} from './MODELOS/solicitudes.js';
import {Viajes} from './MODELOS/viajes.js';

let usuarioConectado=undefined; //usuario que esta conectado
let listaDeImportador = new Array ();
let listaDeEmpresas = new Array ();
let listaDeSolicitudes = new Array ();
let listaDeViajes = new Array ();

//TABLA DINAMICA PARA SOLICITUDES PENDIENTES // 
function cargarTablaSP(){
    let tablaspHTML = "<table border=1>";
    tablaspHTML += "<tr><th>Nro. de solicitud</th> <th>Tipo de carga</th><th>Descripción de mercadería</th><th>Puerto de origen</th><th>Cantidad de contenedores</th><th>Estado</th><th></th></tr>"
    for(let solicitudes of listaDeSolicitudes){
        tablaspHTML += "<tr><td>"+solicitudes.id+"</td><td>"+solicitudes.tipoDeMercaderia+
        "</td><td>"+solicitudes.descripcion+"</td><td>"+solicitudes.puertoOrigen+
        "</td><td>"+solicitudes.cantidadContenedores+"</td><td>"+solicitudes.estado+"</td></tr>"
    }
    tablaspHTML += "</table>";
    document.querySelector("#tblSolicitudesPendientes").innerHTML= tablaspHTML;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- ASIGNAR VIAJE A SOLICITUDES PENDIENTES --------------------------------//

// CARGAR COMBO DINAMICO DE ASIGNACION DE VIAJES // 
function cargarComboAsigancionViajes(){
    let comboViajesDisponibles = document.querySelector("#slcViajes");
    comboViajesDisponibles.innerHTML = "";
    for(let viajes of listaDeViajes){
        comboViajesDisponibles.innerHTML+= "<option value='"+viajes.id+"'>"
        +viajes.nombreBuque+", "+
        viajes.cantidadDisponible+" lugares disponibles, "+
        "fecha de llegada: "+viajes.fechaLlegada+"</option>";
    }
    let comboSolicitudesDisponibles = document.querySelector("#slcSolicitudesPendientes");
    comboSolicitudesDisponibles.innerHTML = "";
    for(let solicitudes of listaDeSolicitudes){
        if (solicitudes.estado == "PENDIENTE"){
        comboSolicitudesDisponibles.innerHTML+= "<option value='"+solicitudes.id+"'>"+solicitudes.tipoDeMercaderia+", "+solicitudes.cantidadContenedores+" contenedores"+"</option>";
        }
    }   
}
//VALIDAR DATOS PARA ASIGNAR VIAJE //
document.querySelector("#btnasignar").addEventListener("click", asignarViaje);
function asignarViaje(){
    //asignacion de variables
    let viaje = getContenedoresDisponiblesViaje();
    let solicitud = getSolicitudSeleccionada();
    
    // Validaciones
    if(maxCont < 1){
        alert ("Se debe ingresar al menos 1 contenedor para poder crear el viaje")
    }
    else {
        let id = listaDeViajes.length + 1;
        let viajes = new Viajes(id, nombreBuque, maxCont, nombreEmpresa, fechaLlegada);
        //guarda en el array
        listaDeViajes.push(viajes); 
        alert ("Viaje creado con exito. Dirijase a asignar viajes pendientes para completar su viaje")
    }
}
// encontrar id's y las cantidades

function getContenedoresDisponiblesViaje(){
    let viaje = getViajeSeleccionado

}

//LEVANTAR DATOS DE ASIGANCION // 
function getViajeSeleccionado() {
    return document.querySelector("#slcViajes").value;
}
function getSolicitudSeleccionada() {
    return document.querySelector("#slcSolicitudesPendientes").value;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- CREAR VIAJE --------------------------------//

//CARGAR COMBO DE EMPRESAS DISPONIBLES PARA ELEGIR EN CREAR VIAJE //
function cargarComboEmpresasDisponibles(){
    let comboEmpresasDisponibles = document.querySelector("#slcNombreEmpresa");
    comboEmpresasDisponibles.innerHTML = "";
    for (let empresas of listaDeEmpresas){
        comboEmpresasDisponibles.innerHTML+="<option>"+empresas.nombre+"</option>";
    }
}
//VALIDAR DATOS DE CREAR VIAJE DE BUQUE //
document.querySelector("#btnNewViaje").addEventListener("click", validarCrearViaje);
function validarCrearViaje(){
    //asignacion de variables
    let nombreBuque = getNombreDelBuque();
    let maxCont = getMaximoDeContenedores();
    let nombreEmpresa = getNombreDeEmpresa();
    let fechaLlegada = getFechaDeLlegada();
    // Validaciones 
    if (nombreBuque == "" || maxCont == ""|| nombreEmpresa == "" || fechaLlegada == "" ) {
        alert ("Todos los campos son obligatorios. Por favor vuelve a internarlo.")
    }
    else if(maxCont < 1){
        alert ("Se debe ingresar al menos 1 contenedor para poder crear el viaje")
    }
    else {
        let id = listaDeViajes.length + 1;
        let viajes = new Viajes(id, nombreBuque, maxCont, nombreEmpresa, fechaLlegada);
        //guarda en el array
        listaDeViajes.push(viajes); 
        alert ("Viaje creado con exito. Dirijase a asignar viajes pendientes para completar su viaje")
    }
}
//LEVANTAR DATOS DE CREAR VIAJE DE BUQUE // 
function getNombreDelBuque() {
    return document.querySelector("#txtNombreBuque").value;
}
function getMaximoDeContenedores() {
    return document.querySelector("#txtCantidadMaxContenedores").value;
}
function getNombreDeEmpresa() {
    return document.querySelector("#slcNombreEmpresa").value;
}
function getFechaDeLlegada() {
    return document.querySelector("#txtFechaLlegada").value;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- NUEVA SOLICITUD DE CARGA --------------------------------//

//VALIDAR DATOS DE SOLICITUD //
document.querySelector("#btnConfirmarSolicitud").addEventListener("click", validarSolicitud);
function validarSolicitud(){
    //asignacion de variables
    let tipoMercaderia = getTipoDeMercaderia();
    let descMercaderia = getDescripcionMercaderia();
    let puertoOrigen = getPuertoOrigen();
    let cantiContenedores = getCantidadContenedores();
    // Validaciones 
    if (tipoMercaderia == "" || descMercaderia == ""|| puertoOrigen== "" || cantiContenedores == "" ) {
        alert ("Todos los campos son obligatorios. Por favor vuelve a internarlo.")
    }
    else if(cantiContenedores < 1){
        alert ("Se debe ingresar al menos 1 contenedor para poder realizar la solicitud")
    }
    else {
        let id = listaDeSolicitudes.length + 1;
        let solicitudes = new Solicitudes(id, tipoMercaderia, descMercaderia, puertoOrigen, cantiContenedores, "PENDIENTE")
        //guarda en el array
        listaDeSolicitudes.push(solicitudes); 
        alert ("Solicitud creada con exito. Dirijase a solicitudes pendientes para ver el estado del pedido")
    }
    
}

//LEVANTAR DATOS DE SOLICITUD DE CARGA // 
function getTipoDeMercaderia() {
    return document.querySelector("#slcTipoMercaderia").value;
}
function getDescripcionMercaderia(){
    return document.querySelector("#txtDescripcionMercaderia").value;
}
function getPuertoOrigen(){
    return document.querySelector("#slcPuertos").value;
}
function getCantidadContenedores(){
    return document.querySelector("#txtCantidadContenedores").value;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- INICIO DE SESION (EMPRESA E IMPORTADOR) --------------------------------//

// FORMULARIO INICIO DE SESION - VALIDACIONES - CONFIRMAR INICIO SESION //
function iniciarSesion(){
    //asignacion de variables
    let tipoUsuario = getTipoDeUsuario();
    let usuarioInicio = getUsuarioInicio();
    let claveInicio = getClaveInicio();
    // Validaciones 
    if (tipoUsuario != "e" && tipoUsuario != "i" || usuarioInicio == ""|| claveInicio == "" ) {
        alert ("Todos los campos son obligatorios. Por favor vuelve a internarlo.")
    }
    // llamar la validacion del usuario y de clave por medio del array
    else if (!validarClaveUsuario(tipoUsuario, usuarioInicio, claveInicio)) { 
        alert ("Usuario y/o contraseña incorrecta. Por favor intentelo nuevamente.")
    }
    else{
        loginEoI();
    }
}

// RECORRER ARRAY DE EMPRESA E IMPORTADOR PARA VALIDAR CLAVE Y USUARIO//
function validarClaveUsuario(tipo, usuario, clave) {
    let usuarioCalveValido = false;
    //valido si es empresa y recorro array empresa
    if (tipo == "e") {
        for(let empresa of listaDeEmpresas){
            if (empresa.usuario == usuario && empresa.clave == clave ){
                usuarioCalveValido = true;
            }
        } 
    }
    //valido si es importador y recorro array importador
    else if (tipo == "i"){
        for(let importador of listaDeImportador) { 
            if (importador.usuario == usuario && importador.clave == clave) {
                usuarioCalveValido = true;
            }
        } 
    }
    return usuarioCalveValido;
}

// LEVANTAR DATOS DEL INICIO DE SESION //
function getTipoDeUsuario() {
    return document.querySelector("#slcElegirUsuario").value;
}
function getUsuarioInicio (){
    return document.querySelector("#txtUsuario").value;
}
function getClaveInicio (){
    return document.querySelector("#txtClave").value;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- REGISTRO DE IMPORTADOR --------------------------------//

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
        let importador = new Importador(id, nombreImpo, usuarioImpo, fotoImpo.name);
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
    for(let importador of listaDeImportador) { 
        if (importador.usuario == user || importador.nombre == user) {
            usuarioValido = false;
        }
    }
    for(let empresa of listaDeEmpresas){
        if (empresa.usuario == user || empresa.nombre == user){
            usuarioValido = false;
        }
    }
    return usuarioValido;
}
//----------------------------------------------------------------------------------------------------//
//-------------------------------- PANTALLAS (DIVS) MOSTRAR Y OCULTAR --------------------------------//

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
document.querySelector("#btnInicioSesion").addEventListener("click", iniciarSesion );
document.querySelector("#btnLogout").addEventListener("click", irHome);

function irHome(){
    ocultarTodo()
    inicio()
}
function irRegistrar (){
    ocultarTodo()
    document.querySelector("#divFormRegistro").style.display="block"
}
function loginEoI(){
    if (document.querySelector("#slcElegirUsuario").value == "e") {
        ocultarTodo()
        document.querySelector("#divMenuEmpresa").style.display="block"
        document.querySelector("#divSalir").style.display="block"
    }
    else if (document.querySelector("#slcElegirUsuario").value == "i"){
        ocultarTodo()
        document.querySelector("#divMenuImportador").style.display="block"
        document.querySelector("#divSalir").style.display="block"
    }  
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
    cargarTablaSP()
}

// PANTALLAS EMPRESAS // 
function crearViaje (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divNewViajeBuque").style.display="block"
    let date = document.querySelector("#txtFechaLlegada");
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    today.setDate(today.getDate() + 1)
    date.min = today.toISOString().split("T")[0];
    cargarComboEmpresasDisponibles()
}
function asignarSolicitud (){
    ocultarTodo()
    document.querySelector("#divSalir").style.display="block"
    document.querySelector("#divMenuEmpresa").style.display="block"
    document.querySelector("#divAsignacionViaje").style.display="block"
    cargarComboAsigancionViajes()
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

//----------------------------------------------------------------------------------------------------//
//-------------------------------- PRE CARGA DE DATOS SEGUN LETRA --------------------------------//

//Precarga de datos de viajes
let Viaje1= new Viajes (1, "Buque1", "10", "rapido", "02/02/2023");
let Viaje2= new Viajes (2, "Buque2", "7", "facil", "15/01/2023");
let Viaje3= new Viajes (1, "Buque3", "8", "pediloya", "05/03/2023");
let Viaje4= new Viajes (2, "Buque4", "15", "eficaz", "19/01/2023");
listaDeViajes.push(Viaje1,Viaje2,Viaje3,Viaje4);

//Precarga de solicitudes (hacer 5 como pide la letra)
let Solicitud1= new Solicitudes (1, "CARGA_GENERAL", "Juguetes de niños de 3 a 5 años", "Puerto de China", "3","PENDIENTE");
let Solicitud2= new Solicitudes (2, "CARGA_GENERAL", "Ropa de hombres y mujeres", "Puerto de Estados Unidos", "4","CONFIRMADO");
let Solicitud3= new Solicitudes (3, "CARGA_PELIGROSA", "Armas", "Puerto de Estados Unidos", "1","PENDIENTE");
let Solicitud4= new Solicitudes (4, "REFIGERADO", "Pollo congelado", "Puerto de Brasil", "2","CONFIRMADO");
let Solicitud5= new Solicitudes (5, "CARGA_GENERAL", "Articulos varios de limpieza", "Puerto de China", "6","CONFIRMADO");
listaDeSolicitudes.push(Solicitud1,Solicitud2,Solicitud3,Solicitud4,Solicitud5);

//Precarga de datos del importador (hacer 5 como pide la letra)
let Impo1= new Importador (1, "administrador", "admi", "Admin22", "img/foto.jpg");
let Impo2= new Importador (2, "crojo", "rojo", "Ort22","img/foto.jpg");
let Impo3= new Importador (3,"cblanco", "blanco", "Ort22","img/foto.jpg");
let Impo4= new Importador (4,"cverde", "verde", "Ort22","img/foto.jpg");
let Impo5= new Importador (5,"cnaranja", "naranja", "Ort22","img/foto.jpg");
listaDeImportador.push(Impo1,Impo2,Impo3,Impo4,Impo5);

//Precarga de datos de las empresas
let Empresa1= new Empresa (1, "administrador", "admin", "Admin22");
let Empresa2= new Empresa (2, "rapido", "arapido", "Ati22");
let Empresa3= new Empresa (3, "pediloya", "apediloya", "Ati22");
let Empresa4= new Empresa (4, "eficaz", "aeficaz", "Ati22");
listaDeEmpresas.push(Empresa1,Empresa2,Empresa3,Empresa4);

