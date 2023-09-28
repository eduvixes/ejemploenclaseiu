function inicializa_pagina(){
    cerrar_div_mensajes();
}

function cerrar_div_mensajes(){
    document.getElementById("texto_mensaje").innerHTML = '';
    document.getElementById("div_mensajes_pagina").style.display = "none";
}

function mostrardivmensajes(){
    document.getElementById("div_mensajes_pagina").style.display = "block";
}

function inicializa_pagina_js(){

    crear_estructura_body();

    cerrar_div_mensajes();
}

function crear_estructura_body(){

    let primerdiv = document.createElement('div');
    primerdiv.id = 'div_titulo_pagina';
    primerdiv.className = 'formato_titulo_pagina';
    document.body.appendChild(primerdiv);
    
    let parrafo = document.createElement('p');
    let nombreamostrar = 'Javi';
    let textoamostrar = 'saludar("'+nombreamostrar+'")'
    parrafo.setAttribute('onclick',textoamostrar);
    parrafo.innerText = 'pagina de prueba practica 2 iu';
    primerdiv.appendChild(parrafo);

    let segundodiv = document.createElement('div');
    segundodiv.id = 'div_mensajes_pagina';
    segundodiv.className = 'formato_mensajes_pagina';
    segundodiv.innerHTML = '<p id="texto_mensaje"></p><p onclick="cerrar_div_mensajes();">Cerrar</p>';
    document.body.appendChild(segundodiv);

    let form_div = document.createElement('div');
    form_div.id = 'id_div_pruebaform';
    let formbase = document.createElement('form');
    formbase.id = 'pruebaform';
    formbase.name = 'name_pruebaform';
    formbase.action = 'http://193.147.87.202/procesaform.php';
    formbase.method = 'POST';
    formbase.setAttribute('onsubmit','return comprobar_pruebaform()');
    form_div.appendChild(formbase);
    document.body.appendChild(form_div);

    let elementoa1 = document.createElement('a');
    elementoa1.id = 'label1';
    elementoa1.innerText = 'Selecciona fichero : ';
    formbase.appendChild(elementoa1);

    let campofile1 = document.createElement('input');
    campofile1.type = 'file';
    campofile1.id = 'id_fichero';
    campofile1.name="fichero";
    campofile1.setAttribute('onchange','comprobar_fichero("id_fichero");comprobar_fichero_vacio("id_fichero");');
    formbase.appendChild(campofile1);

    let elementoa2 = document.createElement('a');
    elementoa2.id = 'status_fichero';
    formbase.appendChild(elementoa2);

    let saltolinea = document.createElement('br');
    formbase.appendChild(saltolinea);

    let texto1 = document.createTextNode('Selecciona otro fichero :');
    formbase.appendChild(texto1);

    
    let listaeventos = {'onchange':'comprobar_fichero(/"id_fichero1/");comprobar_fichero_vacio(/"id_fichero1/");'};
    let campofile2 = crearInput('file', 'id_fichero1', 'fichero1', listaeventos, Array, '');
    formbase.appendChild(campofile2);

    let saltolinea1 = document.createElement('br');
    formbase.appendChild(saltolinea1);

    let texto2 = document.createTextNode('Dime tu año de nacimiento : ');
    formbase.appendChild(texto2);

    listaeventos = {'onblur':'comprobar_birthday()'};
    let campotext1 = crearInput('text','id_birthday','birthday',listaeventos, Array, '');
    formbase.appendChild(campotext1);
    
    let saltolinea2 = document.createElement('br');
    formbase.appendChild(saltolinea2);

    let texto3 = document.createTextNode('Send these files:');
    formbase.appendChild(texto3);

    let saltolinea3 = document.createElement('br');
    formbase.appendChild(saltolinea3);

    let campofile3 = crearInput('file', '', 'userFile[]', Array, Array, '');
    formbase.appendChild(campofile3);

    let saltolinea4 = document.createElement('br');
    formbase.appendChild(saltolinea4);

    let campofile4 = crearInput('file', '', 'userFile[]', Array, Array, '');
    formbase.appendChild(campofile4);

    let saltolinea5 = document.createElement('br');
    formbase.appendChild(saltolinea5);

    let camposubmit = document.createElement('input');
    camposubmit.type = 'submit';
    camposubmit.name="submit_pruebaform";
    camposubmit.value = 'enviar';
    formbase.appendChild(camposubmit);


}

function crearInput(type, id, name, listaeventos, listaclases, valor){
    miinput = document.createElement('input');
    miinput.type = type;
    miinput.id = id;
    miinput.name = name;
    miinput.value = valor;

    for (let claveevento in listaeventos){
        miinput.setAttribute(claveevento, listaeventos[claveevento]);
    }

    if (listaclases.length == 0){}
    else{
        let misclases = '';
        for (let i=0;i<listaclases.length;i++){
            misclases = misclases + listaclases[i] + ' ';
        }

        miinput.className = misclases;
    }
    return miinput;

}
    
