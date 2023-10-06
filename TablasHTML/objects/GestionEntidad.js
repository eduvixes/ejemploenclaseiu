class GestionEntidad {

    constructor(entidad, datosfilas, columnasamostrar) {
        this.entidad = entidad;
        this.datosfilas = datosfilas;
        this.columnasamostrar = columnasamostrar;
        this.mostrartabla();
    }

    mostrarTitulos(){

        let cabecera = document.createElement('thead');
    
        let textolineatitulos = '<tr>';
    
        for (let atributo in this.columnasamostrar){
    
            textolineatitulos += '<th>'+this.columnasamostrar[atributo]+'</th>';
    
        }
    
        textolineatitulos += '<th>Editar</th><th>Borrar</th><th>Detalle</th>';
    
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
    
                datosfuncion += "'"+this.datosfilas[i][clave]+"',";
    
                if (this.columnasamostrar.includes(clave)){
    
                    textolineadatos += '<td>'+this.datosfilas[i][clave]+'</td>';
    
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
    
            textolineadatos += lineaedit+lineadelete+lineashowcurrent;
    
            textolineadatos += '</tr>';
    
        }
        
        cuerpo.innerHTML = textolineadatos;
    
        return cuerpo;
    
    }

    crearboton(accion, parametros){
        let columna = document.createElement('td');
        let opcion = document.createElement('a');
        let textoonclick = "createForm_"+accion+"_"+this.entidad+"("+parametros+");";
        opcion.setAttribute('onclick',textoonclick);
        opcion.innerHTML = accion;
        columna.appendChild(opcion);
        return columna.outerHTML;
    
    }

    mostrarTituloTabla(){
        document.getElementById("id_texto_titulo_tabla").innerHTML = "Gestión de "+this.entidad;
    }
    
    mostrartabla(){

        this.mostrarTituloTabla();
    
        let tablaalumnos = document.createElement('table');
        tablaalumnos.id = 'tabladatosalumnos';
        tablaalumnos.border_width = "5px";
        
        document.getElementById('id_tabla_datos').appendChild(tablaalumnos);
    
        let cabeceratabla = this.mostrarTitulos();
    
        tablaalumnos.appendChild(cabeceratabla);
    
        let cuerpotabla = this.mostrarDatos();
    
        tablaalumnos.appendChild(cuerpotabla);
    
    }
}

