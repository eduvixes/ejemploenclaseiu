class Gestion_personas extends GestionEntidad{

    
    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){

        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();

        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_persona"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni()');

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona()');

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona()');

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona()');

        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona()');

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona()');

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona()');

        document.getElementById('nuevo_foto_persona').setAttribute('onblur','Gestion_personas.comprobar_nuevo_foto_persona()');
        document.getElementById("label_foto_persona").style.display = 'none';
        document.getElementById("foto_persona").style.display = 'none';
        document.getElementById("link_foto_persona").style.display = 'none';

        
        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);        

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_persona"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni()');
        document.getElementById('dni').value = datostupla.dni;
        document.getElementById('dni').setAttribute("readonly","");

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona()');
        document.getElementById('nombre_persona').value = datostupla.nombre_persona;

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona()');
        document.getElementById('apellidos_persona').value = datostupla.apellidos_persona;

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona()');
        document.getElementById('fechaNacimiento_persona').value = datostupla.fechaNacimiento_persona;

        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona()');
        document.getElementById('direccion_persona').value = datostupla.direccion_persona;

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona()');
        document.getElementById('telefono_persona').value = datostupla.telefono_persona;

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona()');
        document.getElementById('email_persona').value = datostupla.email_persona;

        document.getElementById('foto_persona').value = datostupla.foto_persona;
        document.getElementById('link_foto_persona').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+foto_persona);
        document.getElementById('foto_persona').setAttribute("readonly",true);

        document.getElementById('nuevo_foto_persona').setAttribute('onblur','Gestion_personas.comprobar_nuevo_foto_persona()');

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_persona";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.DELETE();';

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('dni').value = datostupla.dni;
        document.getElementById('dni').setAttribute('readonly',true);

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').value = datostupla.nombre_persona;
        document.getElementById('nombre_persona').setAttribute('readonly',true);

        document.getElementById('apellidos_persona').value = datostupla.apellidos_persona;
        document.getElementById('apellidos_persona').setAttribute('readonly',true);

        document.getElementById('fechaNacimiento_persona').value = datostupla.fechaNacimiento_persona;
        document.getElementById('fechaNacimiento_persona').setAttribute('readonly',true);

        document.getElementById('direccion_persona').value = datostupla.direccion_persona;
        document.getElementById('direccion_persona').setAttribute('readonly',true);

        document.getElementById('telefono_persona').value = datostupla.telefono_persona;
        document.getElementById('telefono_persona').setAttribute('readonly',true);

        document.getElementById('email_persona').value = datostupla.email_persona;
        document.getElementById('email_persona').setAttribute('readonly',true);

        document.getElementById('foto_persona').value = datostupla.foto_persona;
        document.getElementById('foto_persona').setAttribute("readonly",true);
        document.getElementById("link_foto_persona").href += datostupla.foto_persona;

        document.getElementById("label_nuevo_foto_persona").style.display = 'none';
        document.getElementById("nuevo_foto_persona").style.display = 'none';
        

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(datostupla){
        
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);
        
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_persona";

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
        
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();


    }

    static createForm_SEARCH(){

        // resetear el formulario
        this.recargarform();
        
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_persona";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_personas.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_personas.comprobar_submit_SEARCH();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario)
        document.getElementById('dni').setAttribute('onblur', 'Gestion_personas.comprobar_dni_SEARCH()');

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetear formusuario
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_personas.comprobar_nombre_persona_SEARCH()');

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_personas.comprobar_apellidos_persona_SEARCH()');

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_personas.comprobar_fechaNacimiento_persona_SEARCH()');
        
        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_personas.comprobar_direccion_persona_SEARCH()');

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_personas.comprobar_telefono_persona_SEARCH()');

        document.getElementById('email_persona').setAttribute('onblur','Gestion_personas.comprobar_email_persona_SEARCH()');
        
        document.getElementById('foto_persona').setAttribute('onblur','Gestion_personas.comprobar_foto_persona_SEARCH()');

        document.getElementById("label_nuevo_foto_persona").style.display = 'none';
        document.getElementById("nuevo_foto_persona").style.display = 'none';
        document.getElementById('link_foto_persona').style.display = 'none';

        
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){

        let valor = this.comprobar_dni();
        let valor1 = this.comprobar_nombre_persona();
        let valor2 = this.comprobar_apellidos_persona();
        let valor3 = this.comprobar_fechaNacimiento_persona();
        let valor4 = this.comprobar_telefono_persona();
        let valor5 = this.comprobar_email_persona();
        let valor6 = this.comprobar_direccion_persona();
        let valor7 = this.comprobar_nuevo_foto_persona();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_dni_SEARCH();
        let valor1 = this.comprobar_nombre_persona_SEARCH();
        let valor2 = this.comprobar_apellidos_persona_SEARCH();
        let valor3 = this.comprobar_fechaNacimiento_persona_SEARCH();
        let valor4 = this.comprobar_telefono_persona_SEARCH();
        let valor5 = this.comprobar_email_persona_SEARCH();
        let valor6 = this.comprobar_direccion_persona_SEARCH();
        let valor7 = this.comprobar_nuevo_foto_persona_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 &&
            valor7
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'persona', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                //this.resetearformpersona();
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'persona', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'persona', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'persona', 'SEARCH')
        .then((respuesta) => {
            //this.resetearformpersona();
            this.recargarform();
            let persona = new Gestion_personas('personas',respuesta['resource'],Array('dni','nombre_persona','telefono_persona')); persona.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos

    static comprobar_dni(){

        return true;

    }

    static comprobar_dni_SEARCH(){

        return true;

    }

    static comprobar_nombre_persona(){

       if (validacionesatomicas.size_minimo('nombre_persona',6)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_persona','KO_nombre_persona_tam_min');
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('nombre_persona',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('nombre_persona','KO_nombre_persona_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_persona');
        return true;

    }

    static comprobar_nombre_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('nombre_persona',50)){   
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajes('nombre_persona','KO_nombre_persona_tam_max');
            //llamar funcion muestra errores
            DOM_class.mostrarerrorvalor('nombre_persona');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('nombre_persona');
        return true;

    }

    static comprobar_apellidos_persona(){

        if (validacionesatomicas.size_minimo('apellidos_persona',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_min');;
            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('apellidos_persona',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('apellidos_persona');
        return true;
    }

    static comprobar_apellidos_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('apellidos_persona',50)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('apellidos_persona','KO_apellidos_persona_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('apellidos_persona');
        return true;
    }

    static comprobar_fechaNacimiento_persona(){

        return true;

    }

    static comprobar_fechaNacimiento_persona_SEARCH(){

        return true;

    }

    

    static comprobar_direccion_persona(){

        if (validacionesatomicas.size_minimo('direccion_persona',20)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_min');

            //salir ejecucion con false
            return false;
        }

        if (validacionesatomicas.size_maximo('direccion_persona',70)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_max');

            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('direccion_persona');
        return true;

    }

    static comprobar_direccion_persona_SEARCH(){

        if (validacionesatomicas.size_maximo('direccion_persona',70)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('direccion_persona','KO_direccion_persona_tam_max');

            //salir ejecucion con false
            return false;
        }
        
        DOM_class.mostrarexitovalor('direccion_persona');
        return true;

    }

    static comprobar_telefono_persona(){
        return true;
    }

    static comprobar_telefono_persona_SEARCH(){
        return true;
    }

    static comprobar_email_persona(){
        return true;
    }

    static comprobar_email_persona_SEARCH(){
        return true;
    }

    static comprobar_foto_persona(){
        return true;
    }

    static comprobar_foto_persona_SEARCH(){
        return true;
    }

    static comprobar_nuevo_foto_persona(){
        return true;
    }

    static comprobar_nuevo_foto_persona_SEARCH(){
        return true;
    }


    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="label_dni"></label>
        <input type='text' id='dni' name='dni'></input>
        <div id="div_error_dni" class="errorcampo"><a id="error_dni"></a></div>
        <br>
        
        <label class="label_nombre_persona">Nombre de pila</label>
        <input type='text' id='nombre_persona' name='nombre_persona'></input>
        <div id="div_error_nombre_persona" class="errorcampo"><a id="error_nombre_persona"></a></div>
        <br>
        
        <label class="label_apellidos_persona">apellidos</label>
        <input type='text' id='apellidos_persona' name='apellidos_persona'></input>
        <div id="div_error_apellidos_persona" class="errorcampo"><a id="error_apellidos_persona"></a></div>
        <br>
        
        <label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
        <input type='date' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
        <div id="div_error_fechaNacimiento_persona" class="errorcampo"><a id="error_fechaNacimiento_persona"></a></div>
        
        <br>
        <label class="label_direccion_persona">Dirección Postal</label>
        <!--<input type='text' id='direccion_persona' name='direccion_persona'></input>-->
        <textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
        <div id="div_error_direccion_persona" class="errorcampo"><a id="error_direccion_persona"></a></div>
        <br>

        <label class="label_telefono_persona">Teléfono Persona</label>
        <input type='text' id='telefono_persona' name='telefono_persona'></input>
        <div id="div_error_telefono_persona" class="errorcampo"><a id="error_telefono_persona"></a></div>
        
        <br>
        <label class="label_email_persona">Correo Electronico</label>
        <input type='text' id='email_persona' name='email_persona'></input>
        <div id="div_error_email_persona" class="errorcampo"><a id="error_email_persona"></a></div>
        
        <br>
        <label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
        <input type='text' id='foto_persona' name='foto_persona'></input>
        <a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
        <input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
        <div id="div_error_foto_persona" class="errorcampo"><a id="error_nuevo_foto_persona"></a></div>
        <br>
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();

       
    }
}