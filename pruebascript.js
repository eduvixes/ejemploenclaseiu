<script type="text/javascript">

    let listaalumnos = '/ET1/ficheroalumnos2.js';

    let result = $('#cargascripts').load(listaalumnos, function (response, status, xhr) {

        /*if (status == "error"){
            alert('falla carga');
        }
        else{

            info_alumnos.forEach(element => {

            elalumno = {'cabecera':'', 'tests':'', 'pruebas':'', 'completo':''};
            
            tratargeneral(element);
            tratardefiniciontests(element);
            tratarpruebastests(element);
            comprobarpruebastests(element);

            resultados[alumno_num] = elalumno;
            alumno_num++;

            });
        }*/

        try {
            let variable = eval('info_alumnos');
            console.log('carga');
            console.log(variable);
        }
        catch(e){
            console.log('no carga');
            
        }

    });
    
</script>


