function comprobar_fichero(id){

    campo_fichero = id.substr(3);
    let tam_maximo = 10000;
    if (tam_maximo < document.getElementById(id).files[0].size){
        document.getElementById("status_"+campo_fichero).innerHTML = 'X';
        document.getElementById("texto_mensaje").innerHTML = 'Tamaño id_'+ campo_fichero + ' excesivo (MAX 10000 bytes)';
        mostrardivmensajes();
        return false;
    }

    document.getElementById("status_"+campo_fichero).innerHTML = 'V';
    return true;

}

function comprobar_fichero_vacio(id){
    
    campo_fichero = id.substr(3);

    if ("" == document.getElementById(id).value){
        document.getElementById("status_"+campo_fichero).innerHTML = 'X';
        document.getElementById("texto_mensaje").innerHTML = 'Tamaño id_'+ campo_fichero + ' vacio no permitido';
        document.getElementById("div_mensajes_pagina").style.display = "block";
        return false;
    }
    else{
        return true;
    }
}


function comprobar_pruebaform(){


    return (
            comprobar_fichero_vacio('id_fichero') &&
            comprobar_fichero_vacio('id_fichero1') &&
            comprobar_fichero('id_fichero') &&
            comprobar_fichero('id_fichero1') &&
            comprobar_birthday()
            );
    
}

function comprobar_birthday(){

    if (document.getElementById("id_birthday").value == ''){
        document.getElementById('texto_mensaje').innerHTML = "La fecha de nacimiento no puede ser vacia";
        document.getElementById('div_mensajes_pagina').style.display = 'block';
        document.getElementById('id_birthday').style.borderBlockColor = 'red';
        return false;
    }
    else{
        document.getElementById('id_birthday').style.borderBlockColor = 'green';
        return true;
    }
}




