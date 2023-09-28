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


function testdef(test_def){


    test_def.forEach(element => {
        filacorrecta = true;
        for (let i=0;i<5;i++){
            console.log(typeof(element[i]));
        }
        if (
            (typeof(element[0]=='string'))  &&
            (typeof(element[1]=='number'))  &&
            (typeof(element[2]=='string'))  &&
            (typeof(element[3]=='boolean'))  &&
            (typeof(element[4]=='string'))  
            ){
                
            }
            else
            {
                filacorrecta = false;
            }
    });

    if (filacorrecta){
        document.getElementById('texto').innerHTML = 'formato correcto en deficiones test';
    }

}

function probedef(probe_def){


    probe_def.forEach(element => {
        filacorrecta = true;
        for (let i=0;i<5;i++){
            console.log(typeof(element[i]));
        }
        if (
            (typeof(element[0]=='number'))  &&
            (typeof(element[1]=='string'))  &&
            (typeof(element[2]=='number'))  &&
            (typeof(element[3]=='string'))  &&
            (typeof(element[4]=='boolean')) 
            ){}
            else
            {
                filacorrecta = false;
            }
    });

    if (filacorrecta){
        document.getElementById('testpruebas').innerHTML = 'formato correcto en las pruebas de test';
    }

}

function probeintest(test_definiciones){
    
    test_definiciones.forEach(element => {
        pruebaspordefinicion = buscarencolumna(pruebasunitarias, 0 ,element[1]);
        console.log('definicion test número '+element[1]+' => '+pruebaspordefinicion);
    });
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
