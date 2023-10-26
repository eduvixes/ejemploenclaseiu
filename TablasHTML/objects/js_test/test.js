var pruebasunitarias = Array(
    Array('1','personas','nombre_persona','1','aa',false),
    Array('1','personas','nombre_persona','2','aaaaaaa',true),
    Array('1','personas','nombre_persona','3','aaaaaaa',false),
    Array('2','personas','nombre_persona','4','aa'.repeat(100),false),
    Array('2','personas','nombre_persona','5','aaaaaaa',true),
    Array('2','personas','nombre_persona','6','aa'.repeat(100),true),
    Array('2','publicacion','nombre_persona','7','aa'.repeat(100),true),
);
var def_test = Array(
    Array('1','personas','tamaño < 6',false,'tamaño minino incorrecto'),
    Array('2','personas','tamaño > 50',false,'tamaño maximo incorrecto')
);

function test(){
    pruebasunitarias.forEach(element => {
            probar(element);
    });
}

function devolverdeftest(numdeftest){

    for (let i=0;i<def_test.length;i++){
        if (def_test[i][0] == numdeftest){
            return def_test[i];
        }
    }

};

function probar(prueba){
    document.getElementById(prueba[2]).value = prueba[4];
    let funcion = 'Gestion_'+prueba[1]+'.comprobar_'+prueba[2]+'()';
    let resultado = eval(funcion);
    let salida = '';
    let respuesta = devolverdeftest(prueba[0]);
    let descripcion = respuesta[2];
    if (resultado == prueba[5]){
        salida = "Si para "+prueba[1]+" pruebo "+descripcion+" en "+prueba[2]+" con el valor "+prueba[4]+" seria "+prueba[5]+" devuelve "+resultado+" y el test es CORRECTO";
    }
    else{
        salida = "Si para "+prueba[1]+" pruebo "+descripcion+" en "+prueba[2]+" con el valor "+prueba[4]+" seria "+prueba[5]+" devuelve "+resultado+" y el test es ERRONEO";
    }
    console.log(salida);
}

