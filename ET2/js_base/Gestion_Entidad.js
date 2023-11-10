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
    
        
                for (let clave in this.datosfilas[i]){
        
                    if (this.columnasamostrar.includes(clave)){
        
                        textolineadatos += '<td>'+this.datosfilas[i][clave]+'</td>';
        
                    }
                }
        
                // crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
        
                let lineaedit = this.crearboton('EDIT', JSON.stringify(this.datosfilas[i]));
                let lineadelete = this.crearboton('DELETE', JSON.stringify(this.datosfilas[i]));
                let lineashowcurrent = this.crearboton('SHOWCURRENT', JSON.stringify(this.datosfilas[i]));
        
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



