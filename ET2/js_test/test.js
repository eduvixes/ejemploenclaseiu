
function test(){
    document.getElementById('div_IU_test').style.display = 'block';
    document.getElementById('tablaresultadostest').innerHTML = '';
    pruebasunitarias.forEach(element => {
            probar(element);
    });
}

function devolverdeftest(numdeftest){

    for (let i=0;i<def_test.length;i++){
        if (def_test[i][2] == numdeftest){
            return def_test[i];
        }
    }

};

function probar(prueba){
    let resulttest;
    if (!eval(document.getElementById(prueba[2]))){
        let nuevoelemento = document.createElement('input');
        nuevoelemento.id = prueba[2];
        document.body.append(nuevoelemento);
        nuevoelemento.style.display = 'none';
    }
    document.getElementById(prueba[2]).value = prueba[4];
    let funcion = 'Gestion_'+prueba[1]+'.comprobar_'+prueba[2]+'()';
    let resultado = eval(funcion);
    let salida = '<tr>';
    let respuesta = devolverdeftest(prueba[0]);
    let descripcion = respuesta[2];
    if (resultado == prueba[5]){
        resulttest = '<td style="background-color:green;">CORRECTO</td>';
    }
    else{
        resulttest = '<td style="background-color:red;">ERRONEO</td>';
    }
    resultado = Boolean(resultado);
    salida += '<td>'+prueba[1]+'</td>'+'<td>'+descripcion+'</td>'+'<td>'+prueba[2]+'</td>'+'<td style="width: 30%;word-wrap: break-word;">'+prueba[4]+'</td>'+'<td>'+prueba[5]+'</td>'+'<td>'+resultado+'</td>'+resulttest;
    document.getElementById('tablaresultadostest').innerHTML += salida;
    
}

