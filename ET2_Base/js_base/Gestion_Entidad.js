class GestionEntidad {

    constructor(entidad, datosfilas, columnasamostrar) {
        this.entidad = entidad;
        this.datosfilas = datosfilas;
        this.columnasamostrar = columnasamostrar;
    }


    ponerbotonesaddysearch(){

        if (document.getElementById("addysearch")){

        }
        else{
            let textodivbotones = '<div id="addysearch"><img id="botonADD" src="./iconos/ADD.png" /><img id="botonSEARCH" src="./iconos/SEARCH.png" />';
            document.getElementById('id_tabla_datos').insertAdjacentHTML('beforebegin',textodivbotones);
            document.getElementById("botonADD").setAttribute('onclick','Gestion_'+this.entidad+'.createForm_ADD()');
            document.getElementById("botonSEARCH").setAttribute('onclick','Gestion_'+this.entidad+'.createForm_SEARCH()');
        }
    }

    mostrarTitulos(){

        this.ponerbotonesaddysearch(); // comprobar si ya existen

        if (document.getElementById("titulostablacabecera")){

            return document.createElement('a');
        }
        else{

            let cabecera = document.createElement('thead');

            cabecera.id = "titulostablacabecera";
        
            let textolineatitulos = '<tr>';
        
            for (let atributo in this.columnasamostrar){
        
                textolineatitulos += '<th class="'+this.columnasamostrar[atributo]+'"></th>';
        
            }
        
            textolineatitulos += '<th colspan="3"></th>';
        
            textolineatitulos += '</tr>';
        
            cabecera.innerHTML = textolineatitulos;
        
            return cabecera;
        
        }
    
    }

    mostrarDatos(){

        if (document.getElementById("muestradatostabla")){
            //retornar elemento neutro a incluir en el html
        }
        else{
            let cuerpo = document.createElement('tbody');
            cuerpo.id = "muestradatostabla";
        
            let textolineadatos = '';
        
            for (let i=0;i<this.datosfilas.length;i++){
        
                textolineadatos += '<tr style="background-color:grey;">';
        
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
        
                let lineaedit = this.crearboton('EDIT', datosfuncion);
                let lineadelete = this.crearboton('DELETE', datosfuncion);
                let lineashowcurrent = this.crearboton('SHOWCURRENT', datosfuncion);
        
                textolineadatos += lineaedit+lineadelete+lineashowcurrent;
        
                textolineadatos += '</tr>';
        
            }
            
            cuerpo.innerHTML = textolineadatos;
        
            return cuerpo;
        
        }
    
    }

    crearboton(accion, parametros){
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/"+accion+'.png';
        let textoonclick = "Gestion_"+this.entidad+".createForm_"+accion+"("+parametros+");";
        opcion.setAttribute('onclick',textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    
    }

    mostrarTituloTabla(){

        document.getElementById("id_texto_titulo_tabla").className = 'titulo_pagina_'+this.entidad;
    }
    
    mostrartabla(){

        document.getElementById('id_tabla_datos').innerHTML = ''; // inicioalizo la tabla de datos a vacio

        this.mostrarTituloTabla();
        
        let tablaalumnos = document.createElement('table');
        tablaalumnos.id = 'tabladatosalumnos';

        document.getElementById('id_tabla_datos').appendChild(tablaalumnos);
        
    
        let cabeceratabla = this.mostrarTitulos();
    
        document.getElementById("tabladatosalumnos").appendChild(cabeceratabla); 
    
        let cuerpotabla = this.mostrarDatos();
    
        document.getElementById("tabladatosalumnos").appendChild(cuerpotabla);

        document.getElementById("div_IU_form").style.display = 'none';

        setLang();
    
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

    static resetearForm(){

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            //poner a vacio cada campo
            //-------------------------
            campos[i].value = '';
            
            //quitar los eventos de cada campo
            //obtener los atributos del campo
            let atributos = campos[i].getAttributeNames;
            //definir los eventos a quitar
            let eventos = Array('onblur','onclick','onchange','readonly');
            for(let atributo in atributos){
                if (atributo in eventos){
                    //si el evento existe como atributo eliminarlo
                    //---------------------------------------------
                    campos[i].removeAttribute(atributo);
                }
            }

        // poner todos los campos y labels visibles
            if (eval(document.getElementById(campos[i].id))){ // si existe el elemento por su id
                //document.getElementById(campos[i].id).style.display = 'block';
            }
            if (eval(document.querySelector("."+campos[i].id))){ // si existe el elemento por su class
               //document.querySelector("."+campos[i].id).style.display = 'block';
            }

        // poner todos los campos de div de error a none
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }

        };
    }

    static ponercamposreadonly(){
        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            campos[i].setAttribute("readonly", true);
        }
    }

    static peticionBackGeneral(formulario, controlador, action, datosextra=null){

        var datos;
        
        if (formulario === ''){
            datos = new FormData();
        }
        else{
            formulario = document.getElementById(formulario);
            datos = new FormData(formulario);
        }
    
        datos.append('controlador', controlador);
        datos.append('action', action);
    
        if (datosextra==null){}
        else{
            for(var clave in datosextra){
                datos.append(clave, datosextra[clave]);
            }
        }
        
        return new Promise(function(resolve) { 
            $.ajax({
                type :"POST",
                url : "http://193.147.87.202/ET2/index.php",
                data : datos,
                processData : false,
                contentType : false,
            })
            .done(res => {
                resolve(res);
            })
            .fail(res => {
                alert('error : '+res.status);
            })
    
        });
    
    }

    
}



