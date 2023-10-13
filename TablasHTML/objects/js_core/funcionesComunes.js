
// aqui todos las funciones de modificaciones html sobre la pagina
// puede transformarse en una clase
// se pueden hacer metodos que reciben id para hacer alguno de estos

function inicializa_pagina(){
    cerrar_div_mensajes();
    cerrar_div_formulario();
}

function cerrar_div_mensajes(){
    document.getElementById("texto_mensaje").innerHTML = '';
    document.getElementById("div_mensajes_pagina").style.display = "none";
}

function mostrardivmensajes(){
    document.getElementById("div_mensajes_pagina").style.display = "block";
}

function cerrar_div_formulario(){
    document.getElementById('id_div_pruebaform').style.display = 'none';
}