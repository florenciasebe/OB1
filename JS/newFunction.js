//VALIDAR INICIO DE SESION 




// VALIDACION DE SLC //

// VALIDACION DE USUARIO Y CLAVE // 

// FORMULARIO DE REGISTRO - VALIDACIONES - CONFIRMAR REGISTRO //


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
