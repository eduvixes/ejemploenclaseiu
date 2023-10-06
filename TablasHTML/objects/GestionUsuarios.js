datosusuarios = Array(
    {
        "dni": "39489215D",
        "usuario": "Usuario1",
        "contrasena": "3f1308149ab8219e32bf9d91028c4eb4",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "88051587C",
        "usuario": "a",
        "contrasena": "fadfafadfadf",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "35600364k",
        "usuario": "adsada",
        "contrasena": "056f32ee5cf49404607e368bd8d3f2af",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "99999999R",
        "usuario": "ejemplo1",
        "contrasena": "ejemplo1",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "45161969C",
        "usuario": "floroa",
        "contrasena": "1234",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "11111111H",
        "usuario": "root",
        "contrasena": "63a9f0ea7bb98050796b649e85481845",
        "id_rol": {
            "id_rol": "0",
            "rol_name": "Admin",
            "rol_description": "Administrador"
        }
    },
    {
        "dni": "35586957T",
        "usuario": "user123",
        "contrasena": "6ad14ba9986e3615423dfca256d04e3f",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    },
    {
        "dni": "74122589D",
        "usuario": "usuario",
        "contrasena": "asdfadfaf",
        "id_rol": {
            "id_rol": "1",
            "rol_name": "Básico",
            "rol_description": "Usuario Básico"
        }
    }
);


class GestionUsuarios extends GestionEntidad{

    mostrarTitulos(){

        let cabecera = document.createElement('thead');
    
        let textolineatitulos = '<tr>';
    
        for (let atributo in this.columnasamostrar){
    
            textolineatitulos += '<th>'+this.columnasamostrar[atributo]+'</th>';
    
        }
    
        textolineatitulos += '<th>Editar</th><th>Borrar</th><th>Detalle</th><th>Asignar a Grupo</th>';
    
        textolineatitulos += '</tr>';
    
        cabecera.innerHTML = textolineatitulos;
    
        return cabecera;
    
    }
    
    mostrarDatos(){

        let cuerpo = document.createElement('tbody');
    
        let textolineadatos = '';
    
        for (let i=0;i<this.datosfilas.length;i++){
    
            textolineadatos += '<tr>';
    
            //bucle recorra todos los atributos y construya string para pasar como argumento a las funciones de formularios
            let datosfuncion = '';
    
            for (let clave in this.datosfilas[i]){

                if (clave == 'id_rol'){
                    datosfuncion += "'"+this.datosfilas[i][clave]['id_rol']+"',";
                }
                else{
                    datosfuncion += "'"+this.datosfilas[i][clave]+"',";
                }
                
                if (this.columnasamostrar.includes(clave)){

                    if (clave == 'id_rol'){
                        textolineadatos += '<td>'+this.datosfilas[i][clave]['rol_name']+'</td>';
                    }
                    else{
                        textolineadatos += '<td>'+this.datosfilas[i][clave]+'</td>';
                    }
                }
            }
    
            datosfuncion = datosfuncion.substring(0, datosfuncion.length - 1);
    
            // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
            // las funciones deberian llamarse createForm+_ACCION+'_entidad'()
            //let lineaedit = '<td><a onclick="createForm_EDIT_'+entidad+'('+datosfuncion+');">Editar</a></td>';
            //let lineaedit = '<td><a onclick=\"alert();\">Editar</a></td>';
    
            let lineaedit = this.crearboton('EDIT', datosfuncion);
            let lineadelete = this.crearboton('DELETE', datosfuncion);
            let lineashowcurrent = this.crearboton('SHOWCURRENT', datosfuncion);
            let lineaasignacionagrupo = this.crearboton('ASIGNAR_GRUPO', datosfuncion);
    
            textolineadatos += lineaedit+lineadelete+lineashowcurrent+lineaasignacionagrupo;
    
            textolineadatos += '</tr>';
    
        }
        
        cuerpo.innerHTML = textolineadatos;
    
        return cuerpo;
    
    }

}