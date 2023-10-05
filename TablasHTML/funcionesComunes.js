function inicializa_pagina(){
    cerrar_div_mensajes();
    cerrar_div_formulario();
    mostrartabla('personas',datospersonas, Array('apellidos_persona','fechaNacimiento_persona', 'telefono_persona'));
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
