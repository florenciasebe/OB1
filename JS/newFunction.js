//VALIDAR INICIO DE SESION 
// escucho slc , usuario y clave cuando apreto btnIniciarSesion 
//
// si slc == "" Entonces alert ("Se debe elegir un tipo de usuario")
//
//Ver como esamblar esto con la funcion de Iniciar sesion
// si slc == "e" Entonces validar usuario y clave vs el array de empresa
//              si usuario o clave NO existe en el array Entonces alert ("usuario o clave incorrecta, intentelo nuevamete")
//              sino inicioSesionEmpresa (armar function y borrar la funcition genreal - ver donde afecta antes de hacer los cambios)
//
// si slc == "i" Entonces validar usuario y clave vs el array de importador
//              si usuario o clave NO existe en el array Entonces alert ("usuario o clave incorrecta, intentelo nuevamete")
//              sino inicioSesionImportador (armar function y borrar la funcition genreal - ver donde afecta antes de hacer los cambios)



// LEVANTAR DATOS DEL INICIO DE SESION //

function getTipoDeUsuario() {
    if (document.querySelector("#slcElegirUsuario").value == "e") {
    	return document.querySelector("#slcElegirUsuario").value;
    }
    else if (document.querySelector("#slcElegirUsuario").value == "i"){
       	return document.querySelector("#slcElegirUsuario").value;
    } 
    else {
    	alert ("Debe seleccionar un tipo de usuario");
    }
}
function getUsuarioInicio (){
    return document.querySelector("#txtUsuario").value;
}
function getClaveInicio (){
    return document.querySelector("#txtClave").value;
}
