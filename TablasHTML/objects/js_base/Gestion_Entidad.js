class GestionEntidad {

    constructor(entidad, datosfilas, columnasamostrar) {
        this.entidad = entidad;
        this.datosfilas = datosfilas;
        this.columnasamostrar = columnasamostrar;
    }


    ponerbotonesaddysearch(){
        let textodivbotones = '<div id="addysearch"><button id="botonADD">ADD</button><button id="botonSEARCH">SEARCH</button></div>';
        document.getElementById('id_tabla_datos').insertAdjacentHTML('beforebegin',textodivbotones);
        document.getElementById("botonADD").setAttribute('onclick','Gestion_'+this.entidad+'.createForm_ADD()');
        document.getElementById("botonSEARCH").setAttribute('onclick','Gestion_'+this.entidad+'.createForm_SEARCH()');
        document.getElementById("botonADD").innerText = 'ADD';
        document.getElementById("botonSEARCH").innerText = 'SEARCH';
    }

    mostrarTitulos(){

        this.ponerbotonesaddysearch();

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
        let opcion = document.createElement('button');
        let textoonclick = "Gestion_"+this.entidad+".createForm_"+accion+"("+parametros+");";
        opcion.setAttribute('onclick',textoonclick);
        opcion.innerHTML = accion;
        columna.appendChild(opcion);
        return columna.outerHTML;
    
    }

    mostrarTituloTabla(){
        document.getElementById("id_texto_titulo_tabla").innerHTML = traduccion['titulo_pagina_'+this.entidad];
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

    static createForm_ADD(){
        alert('falta create form ADD entidad heredada');
    }

    static createForm_SEARCH(){
        alert('falta create form EDIT entidad heredada');
    }

    static createForm_EDIT(){
        alert('falta create form EDIT entidad heredada');
    }

    static createForm_DELETE(){
        alert('falta create form DELETE entidad heredada');
    }

    static createForm_SHOWCURRENT(){
        alert('falta create form SHOWCURRENT entidad heredada');
    }

    
}

class validacionesatomicas{

    constructor(){

    }

    static validar_dni(id,valor=null){
        let dni = document.getElementById(id);
        let condicion = true;
        if (condicion) {
            return true;
        }
        else{
            return false;
        }
    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }
    
}

