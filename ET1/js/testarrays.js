function inicializar_validaciones(){
    document.getElementById('datosgenerales').style.display = 'none';
    document.getElementById('testdefiniciones').style.display = 'none';
    document.getElementById('testpruebas').style.display = 'none';
    document.getElementById('pruebasentest').style.display = 'none';
}

var definiciondetests;
var directorio;

function evaluarficherosAlumnos(){

    directorio = 'ET1/Directorios/';

    let listaalumnos = "./ET1/ficheroalumnos.js";
        
    let result = $('#cargascripts').load(listaalumnos, function () {

        tratargeneral(info_alumnos[0]);
        tratardefiniciontests(info_alumnos[0]);
        tratarpruebastests(info_alumnos[0]);
        comprobarpruebastests(info_alumnos[0]);

    });
    

}
function evaluarficheros(){

    directorio = '';
    
    let nombrealumno = document.getElementById('nombrealumno').value;

    tratargeneral(nombrealumno);
    tratardefiniciontests(nombrealumno);
    tratarpruebastests(nombrealumno);
    comprobarpruebastests(nombrealumno);

}

function ordenardefiniciontest(test_def){

    let resultado = test_def.sort((a,b) => {
     
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
            }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
        }
        if ((a[0].toLowerCase() == b[0].toLowerCase()) && (a[1] < b[1])) {
            return -1
        }
        if ((a[0].toLowerCase() == b[0].toLowerCase()) && (a[1] > b[1])) {
            return 1
        }
        return 0;
    });

    return resultado;

}

function creartablageneral(alumno,datosgenerales){

    let htmltablageneral = "<div id='"+alumno+"'><h1>"+alumno+"</h1>";
    
    htmltablageneral += "<p> Entrega : "+datosgenerales[1]+"</p>";
    htmltablageneral += "<p> Nombre : "+datosgenerales[0]+"</p>";
    htmltablageneral += "<p> Horas Dedicadas : "+datosgenerales[2]+"</p>";

    htmltablageneral += "</div>";
    $("#datosgenerales").append(htmltablageneral);
    document.getElementById('datosgenerales').style.display = 'block';

}

function tratardefiniciontests(alumno){
    
    let ficherodefiniciontestsalumno = directorio+'ET1_'+alumno+'/ET1_'+alumno+'_tests.js';
    //let ficherodefiniciontestsalumno = 'ET1_'+alumno+'_tests.js';
        
    let general = $('#cargaalumnos').load(ficherodefiniciontestsalumno, function () {
        testdef(eval('def_test_'+alumno));
    });

}

function tratarpruebastests(alumno){
    
    let ficherodefinicionpruebassalumno = directorio+'ET1_'+alumno+'/ET1_'+alumno+'_pruebas.js';
        
    let general = $('#cargaalumnos').load(ficherodefinicionpruebassalumno, function () {
        probedef(eval('pruebasunitarias_'+alumno));
    });

}

function comprobarpruebastests(alumno){
    
    let ficherodefinicionpruebassalumno = directorio+'ET1_'+alumno+'/ET1_'+alumno+'_pruebas.js';
        
    let general = $('#cargaalumnos').load(ficherodefinicionpruebassalumno, function () {
        probeintest(eval('pruebasunitarias_'+alumno));
    });

}



function tratargeneral(alumno){
            
    let ficherodatosgeneralesalumno = directorio+'ET1_'+alumno+'/ET1_'+alumno+'.js';
        
    let general = $('#cargaalumnos').load(ficherodatosgeneralesalumno, function () {
        creartablageneral(alumno,eval('datosgenerales_'+alumno));
    });


}



function testdef(test_def){

    salidatabla = "<tr><th>Campo</><th>CampoNum Def Test</th><th colspan='5'>Datos</th>";

    definiciondetests = ordenardefiniciontest(test_def);
    test_def.forEach(element => {
        salidalinea = "<tr>";
        salidalinea += '<td>'+element[0]+'</td>';
        salidalinea += '<td>'+element[1]+'</td>';
        filacorrecta = true;
        for (let i=0;i<5;i++){
            salidalinea += '<td>'+typeof(element[i])+'</td>';
        }
        if (
            (typeof(element[0])=='string')  &&
            (typeof(element[1])=='number')  &&
            (typeof(element[2])=='string')  &&
            (typeof(element[3])=='boolean')  &&
            (typeof(element[4])=='string')  
            ){
                salidalinea += '<td>CORRECTA</td>';
            }
        else
            {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
        salidalinea += "</tr>";
        salidatabla += salidalinea;
    });

    document.getElementById('tabla_def').innerHTML = salidatabla;

    if (filacorrecta){
        document.getElementById('resultadodef').innerHTML = 'formato correcto en deficiones test';
    }

    document.getElementById('testdefiniciones').style.display = 'block';

}


function probedef(probe_def){

    salidatabla = "<tr><th>Num Def Test</><th>Campo</th><th colspan='5'>Datos</th>";
    let salidalinea = '';
    
    probe_def.forEach(element => {
        salidalinea = "<tr>";
        salidalinea += '<td>'+element[0]+'</td>';
        salidalinea += '<td>'+element[1]+'</td>';
        filacorrecta = true;
        for (let i=0;i<5;i++){
            salidalinea += '<td>'+typeof(element[i])+'</td>';
        }
        if (
            (typeof(element[0])=='number')  &&
            (typeof(element[1])=='string')  &&
            (typeof(element[2])=='number')  &&
            (typeof(element[3])=='string')  &&
            (typeof(element[4])=='boolean') 
            ){
                salidalinea += '<td>CORRECTA</td>';
            }
        else
            {
                salidalinea += '<td>ERROR</td>';
                filacorrecta = false;
            }
        salidalinea += "</tr>";
        salidatabla += salidalinea;
    });

    document.getElementById('tabla_prueba').innerHTML = salidatabla;

    if (filacorrecta){
        document.getElementById('resultadoprueba').innerHTML = 'formato correcto en las pruebas de test';
    }

    document.getElementById('testpruebas').style.display = 'block';

}

function probeintest(pruebasdetests){
    
    salidatabla = "";
    definiciondetests.forEach(element => {
        pruebaspordefinicion = buscarencolumna(pruebasdetests, 0 ,element[1], element[0]);
        if (pruebaspordefinicion < 2){
            salidatabla += "<tr><td>En el campo "+element[0]+" y test definido "+element[1]+" deberia tener al menos una prueba de exito y una de error</td></tr>";
        }
        else{
            salidatabla += "<tr><td>En el campo "+element[0]+" para el test definido "+element[1]+" => existen "+pruebaspordefinicion+" pruebas</td></tr>";
        }
    });
    document.getElementById('tabla_pruebaentest').innerHTML = salidatabla;
    document.getElementById('pruebasentest').style.display = 'block';
}

function buscarencolumna(arraydedatos, testdef, valortestdef, campo){

    let coincidencias = 0;
    arraydedatos.forEach(element => {
        if ((element[testdef] == valortestdef) && (element[1] == campo)){
            coincidencias++;
        }
    });
    return coincidencias;
}

