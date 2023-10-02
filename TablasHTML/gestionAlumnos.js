
resConsultaAlumnos = Array(
    {
        "dniAlumno":"11111111A",
        "repetidor":true,
        "nombreAlumno":"javi"
    },
    {
        "dniAlumno":"222222222A",
        "repetidor":false,
        "nombreAlumno":"pepe"
    }
);

AtributosShowAlumnos = Array('dniAlumno','nombreAlumno');

//funcion para conseguir las claves para tener los nombres de los atributo

// para vosotros


function mostrarTitulos(titulos){

    let cabecera = document.createElement('thead');

    let textolineatitulos = '<tr>';

    for (let atributo in titulos){

        textolineatitulos += '<th>'+titulos[atributo]+'</th>';

    }

    textolineatitulos += '<th>Editar</th><th>Borrar</th><th>Detalle</th>';

    textolineatitulos += '</tr>';

    cabecera.innerHTML = textolineatitulos;

    console.log(textolineatitulos);

    return cabecera;

}

function mostrarDatos(entidad, datosamostrar, columnasamostrar){

    let cuerpo = document.createElement('tbody');

    let textolineadatos = '<tr>';

    for (let linea in datosamostrar){

        //bucle recorra todos los atributos y construya string para pasar como argumento a las funciones de formularios

        for (atributo in columnasamostrar){

            textolineadatos += '<td>'+datosamostrar[linea][columnasamostrar[atributo]]+'</td>';

        }

    }

    // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
    // las funciones deberian llamarse createForm+_ACCION+'_entidad'()
    textolineadatos += '</tr>';

    cuerpo.innerHTML = textolineadatos;

    return cuerpo;

}

function mostrartabla(datosamostrar, columnasamostrar){

    clavesAlumnos = Array('dniAlumno','repetidor','nombreAlumno');

    tablaalumnos = document.createElement('table');
    tablaalumnos.id = 'tabladatosalumnos';
    
    document.getElementById('id_tabla_datos').appendChild(tablaalumnos);

    cabeceratabla = mostrarTitulos(columnasamostrar);

    tablaalumnos.appendChild(cabeceratabla);

    let cuerpotabla = mostrarDatos(datosamostrar, columnasamostrar);

}

