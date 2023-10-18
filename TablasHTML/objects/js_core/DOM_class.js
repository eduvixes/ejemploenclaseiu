class DOM_class{
// aqui todos las funciones de modificaciones html sobre la pagina
// puede transformarse en una clase
// se pueden hacer metodos que reciben id para hacer alguno de estos

    static inicializa_pagina(){
        DOM_class.cerrar_div_mensajes();
        DOM_class.cerrar_div_formulario();
    }

    static cerrar_div_mensajes(){
        document.getElementById("texto_mensaje").innerHTML = '';
        document.getElementById("div_mensajes_pagina").style.display = "none";
    }

    static mostrardivmensajes(id,codigoerror){
        //cambiar color bordes por el id
        document.getElementById('texto_mensaje').innerText = traduccion[codigoerror];
        document.getElementById("div_mensajes_pagina").style.display = "block";
    }

    static mostrardivmensajeserrordebajo(id,codigoerror){
        //cambiar color bordes por el id
        document.getElementById('error_'+id).innerText = traduccion[codigoerror];
        document.getElementById("div_error_"+id).style.display = "block";
    }

    static quitardivmensajeserrordebajo(id) {
        document.getElementById('error_'+id).innerText = '';
        document.getElementById("div_error_"+id).style.display = "none";
    }

    static mostrarexitovalor(id){
        //cambiar color bordes por el id a verde
       
    }

    static mostrarerrorvalor(id){
        //cambiar color bordes por el id a rojo
        
    }

    static cerrar_div_formulario(){
        document.getElementById('div_IU_form').style.display = 'none';
    }

}