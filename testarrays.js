test_definiciones = Array(
    Array('usuario',1,'tamaño < 3',false, 'el tamaño no puede ser menor que 3'),
    Array('usuario',2,'tamaño > 60',false, 'el tamaño no puede ser mayor que 60'),
    Array('usuario',3,'no alfabético o con acentos o con ñ o con espacios',false,'Login de usuario contiene caracteres no permitidos (solo alfabéticos sin acentos)'),
    Array('usuario',4,'alfabético sin acentos ni ñ ni espacios',true,'Exito')

) 

pruebasunitarias = 
Array(
 //basicas de usuario
    Array(1,'usuario',1,'jr',false),
    Array(2,'usuario',2,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
    Array(3,'usuario',3,'j rodeiro',false),
    Array(3,'usuario',4,'iñaki',false),
    Array(4,'usuario',5,'jrodeiro',true)
)

function evaluarficheros(){

    let nombrealumno = "JavierRodeiroIglesias";
    let variablealumno = "ET1_"+nombrealumno;
    let javi = "pruebascript.js";
        
    var result = $('#cargascripts').load(javi, function () {
        
        generaldef(datosgenerales_JavierRodeiroIglesias);

    
    }); 
    //$('#cargascripts').load(javi);
    //$('#cargascripts').load('pruebascript.js');

    testdef(test_definiciones);
    probedef(pruebasunitarias);
    probeintest(test_definiciones);
    

}

function generaldef(general_def){
    general_def.forEach(element => {
        alert(element);
    });
    console.log(general_def);
}

function testdef(test_def){

    salidatabla = "";
    test_def.forEach(element => {
        salidalinea = "<tr>";
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

}

function probedef(probe_def){

    salidatabla = "";
    probe_def.forEach(element => {
        salidalinea = "<tr>";
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

}

function probeintest(test_definiciones){
    
    salidatabla = "";
    test_definiciones.forEach(element => {
        pruebaspordefinicion = buscarencolumna(pruebasunitarias, 0 ,element[1]);
        if (pruebaspordefinicion < 2){
            salidatabla += "<tr><td>La definición de test "+element[1]+" deberia tener al menos un caso de exito y uno de fracaso</td></tr>";
        }
        else{
            salidatabla += "<tr><td>Definicion test número "+element[1]+" => "+pruebaspordefinicion+"</td></tr>";
        }
    });
    document.getElementById('tabla_pruebaentest').innerHTML = salidatabla;
}

function buscarencolumna(arraydedatos, columna, valor){

    let coincidencias = 0;
    arraydedatos.forEach(element => {
        if (element[columna] == valor){
            coincidencias++;
        }
    });
    return coincidencias;
}

