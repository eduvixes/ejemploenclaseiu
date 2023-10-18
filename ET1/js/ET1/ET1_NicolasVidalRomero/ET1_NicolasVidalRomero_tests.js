<script type="text/javascript">
def_test_NicolasVidalRomero =
    Array(
        //esta es la cabecera
        //Array('Campo', 'Número Descripción test', 'Descripción Test', 'Resultado esperado', 'Mensaje respuesta'),

        //campo: id_programa 
        Array('id_programa', 1, 'El identificador del programa contiene, al menos, un caracter que no es un dígito', false, 'El identificador del programa solo puede contener dígitos. Ej. 12, 3790, 490123, ...'),
        Array('id_programa', 2, 'El identificador del programa contiene menos de 1 dígito', False, 'El identificador del programa debe contener al menos 1 dígito. Ej. 12, 3790, 490123, ...'),
        Array('id_programa', 3, 'El identificador del programa contiene más de 6 dígitos.', False, 'El identificador del programa debe tener como máximo 6 dígitos. Ej. 12, 3790, 490123, ...'),
        Array('id_programa', 4, 'El identificador del programa contiene entre 1 y 6 dígitos, y no contiene ningún otro tipo de caracter.', True, 'El identificador del programa es válido.'),

        //campo: nombre_programa
        Array('nombre_programa', 1, 'El nombre del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos que tienen acento y ñ, o que ese caracter no es un espacio', False, 'El nombre del programa puede estar en mayúsculas o minúsuclas, tener acentos, el caracter "ñ" o espacios. Ej. Programa Molón AmaÑado, nombreDeProgramaExtenso, ...'),
        Array('nombre_programa', 2, 'El nombre del programa contiene menos de 6 caracteres.', False, 'El nombre del programa debe tener al menos 6 caracteres. Ej. progrm, nombreDeProgramaExtenso, Nombre De Programa Extenso, ...'),
        Array('nombre_programa', 3, 'El nombre del programa contiene más de 60 caracteres.', False, 'El nombre del programa debe tener como máximo 60 caracteres. Ej. progrm, nombreDeProgramaExtenso, Nombre De Programa Extenso, ...'),
        Array('nombre_programa', 4, 'El nombre del programa contiene solo caracteres que forman parte del conjunto de los alfabéticos que tienen acento y ñ, o caracteres espacio. Además el nombre del programa contiene entre 6 y 60 caracteres.', True, 'El nombre del programa es válido.'),

        //campo: acronimo_programa
        Array('acronimo_programa', 1, 'El acrónimo del programa contiene algún caracter que no forma parte del alfabeto, o bien alguno que forma parte pero está acentuado.', False, 'El acrónimo del programa tiene que estar formado únicamente por carácteres alfabéticos no acentuados. Ej. HoraVeintipico, NadieSabeNada, ElFaro, ...'),
        Array('acronimo_programa', 2, 'El acrónimo del programa contiene menos de 3 caracteres', False, 'El acrónimo del programa tiene, al menos, 3 caracteres. Ej. HoraVeintipico, NSN, ElFaro, ...'),
        Array('acronimo_programa', 3, 'El acrónimo del programa contiene más de 20 caracteres', False, 'El acrónimo del programa tiene hasta 20 caracteres. Ej. HoraVeintipico, NSN, ElFaro, ...'),
        Array('acronimo_programa', 4, 'El acrónimo del programa contiene únicamente caracteres alfabéticos no acentuados. Además el acrónimo del programa contiene entre 3 y 20 caracteres.', True, 'El acrónimo del programa es válido.'),

        //campo: nombre_original_programa
        Array('nombre_original_programa', 1, 'El nombre del programa original contiene algún caracter que no forma parte del conjunto de los alfabéticos que tienen acento y ñ, o que ese caracter no es un espacio', False, 'El nombre del programa original puede estar en mayúsculas o minúsuclas, tener acentos, el caracter "ñ" o espacios. Ej. Programa Molón AmaÑado, nombreDeProgramaExtenso, ...'),
        Array('nombre_original_programa', 2, 'El nombre del programa original contiene menos de 6 caracteres.', False, 'El nombre del programa original debe tener al menos 6 caracteres. Ej. progrm, nombreDeProgramaExtenso, Nombre De Programa Extenso, ...'),
        Array('nombre_original_programa', 3, 'El nombre del programa original contiene más de 60 caracteres.', False, 'El nombre del programa original debe tener como máximo 60 caracteres. Ej. progrm, nombreDeProgramaExtenso, Nombre De Programa Extenso, ...'),
        Array('nombre_original_programa', 4, 'El nombre del programa original contiene solo caracteres que forman parte del conjunto de los alfabéticos que tienen acento y ñ, o caracteres espacio. Además el nombre del programa original contiene entre 6 y 60 caracteres.', True, 'El nombre del programa original es válido.'),

        //campo: autor_programa
        Array('autor_programa', 1, 'El nombre del autor del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos que tienen acento y ñ, o que ese caracter no es un espacio', False, 'El nombre del autor programa puede estar en mayúsculas o minúsuclas, tener acentos, el caracter "ñ" o espacios. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_programa', 2, 'El nombre del autor del programa contiene menos de 6 caracteres.', False, 'El nombre del autor del programa debe tener al menos 6 caracteres. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_programa', 3, 'El nombre del autor del programa contiene más de 50 caracteres.', False, 'El nombre del autor del programa debe tener como máximo 50 caracteres. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_programa', 4, 'El nombre del autor del programa contiene solo caracteres que forman parte del conjunto de los alfabéticos que tienen acento y ñ, o caracteres espacio. Además el nombre del autor del programa contiene entre 6 y 50 caracteres.', True, 'El nombre del autor del programa es válido.'),

        //campo: autor_original_programa
        Array('autor_original_programa', 1, 'El nombre del autor original del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos que tienen acento y ñ, o que ese caracter no es un espacio', False, 'El nombre del autor original programa puede estar en mayúsculas o minúsuclas, tener acentos, el caracter "ñ" o espacios. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_original_programa', 2, 'El nombre del autor original del programa contiene menos de 6 caracteres.', False, 'El nombre del autor original del programa debe tener al menos 6 caracteres. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_original_programa', 3, 'El nombre del autor original del programa contiene más de 50 caracteres.', False, 'El nombre del autor original del programa debe tener como máximo 50 caracteres. Ej. Manuel Piñon Armando, Javier Losada Ponzón, ...'),
        Array('autor_original_programa', 4, 'El nombre del autor original del programa contiene solo caracteres que forman parte del conjunto de los alfabéticos que tienen acento y ñ, o caracteres espacio. Además el nombre del autor original del programa contiene entre 6 y 50 caracteres.', True, 'El nombre del autor original del programa es válido.'),

        //campo: ano_programa (consideramos que el año actual es 2023)
        Array('ano_programa', 1, 'El año del programa contiene, al menos, un caracter que no es un dígito.', False, 'El año del programa solo puede contener dígitos. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_programa', 2, 'El año del programa contiene un número de dígitos diferente de 4.', False, 'El año del programa debe contener, ni más ni menos, que 4 dígitos. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_programa', 3, 'El año del programa contiene un número superior al año actual. Ej, 2024, 2025, 2030, ...', False, 'El año del programa debe ser menor o igual que el año actual. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_programa', 4, 'El año del programa contiene solo dígitos, tiene un número total de 4 dígitos y el año del programa es menor o igual al año actual', True, 'El año del progama es válido.'),

        //campo: ano_original_programa (consideramos que el año actual es 2023)
        Array('ano_original_programa', 1, 'El año original del programa contiene, al menos, un caracter que no es un dígito.', False, 'El año original del programa solo puede contener dígitos. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_original_programa', 2, 'El año original del programa contiene un número de dígitos diferente de 4.', False, 'El año original del programa debe contener, ni más ni menos, que 4 dígitos. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_original_programa', 3, 'El año original del programa contiene un número superior al año actual (2023). Ej, 2024, 2025, 2030, ...', False, 'El año original del programa debe ser menor o igual que el año actual. Ej. 0000, 1980, 2010, 2023, ...'),
        Array('ano_original_programa', 4, 'El año original del programa contiene solo dígitos, tiene un número total de 4 dígitos y el año original del programa es menor o igual al año actual', True, 'El año original del progama es válido.'),

        //campo: requisitos_programa
        Array('requisitos_programa', 1, 'La cadena de los requisitos del programa contiene algún caracter que no es: alfabéticos acentuados, espacio o signos de puntuación.', False, 'Los requisitos del programa deben contener caracteres alfabéticos acentuados, espacios o signos de puntuación. Ej. "tener, al menos, dieziocho años", "saber: inglés y español", "haber leído la novela: «El Quijote»"...'),
        Array('requisitos_programa', 2, 'La cadena de los requisitos contiene menos de 6 caracteres.', False, 'La cadena de los requisitos del programa debe contener, al menos, 6 caracteres. Ej. "tener, al menos, dieziocho años", "saber: inglés y español", "haber leído la novela: «El Quijote»"...'),
        Array('requisitos_programa', 3, 'La cadena de los requisitos contiene más de 300 caracteres.', False, 'La cadena de los requisitos del programa debe contener hasta 300 caracteres. Ej. "tener, al menos, dieziocho años", "saber: inglés y español", "haber leído la novela: «El Quijote»"...'),
        Array('requisitos_programa', 4, 'La cadena de los requisitos contiene caracteres dentro del conjunto de los alfabéticos acentuados, o espacios, o signos de puntuación. Además la cadena de los requisitos contiene entre 6 y 300 caracteres.', True, 'La cadena de los requisitos del programa es válida.'),

        //campo: poblacion_desde_programa
        Array('poblacion_desde_programa', 1, 'La población desde el programa contiene, al menos, un caracter que no es un dígito', False, 'La población desde el programa solo puede contener dígitos. Ej. 12, 0, 97, ...'),
        Array('poblacion_desde_programa', 2, 'La población desde el programa contiene menos de 1 dígito', False, 'La población desde el programa debe tener al menos 1 dígito. Ej. 12, 0, 97, ...'),
        Array('poblacion_desde_programa', 3, 'La población desde el programa contiene más de 2 dígitos.', False, 'La población desde el programa debe tener como máximo 2 dígitos. Ej. 12, 0, 97, ...'),
        Array('poblacion_desde_programa', 4, 'La población desde el programa contiene entre 1 y 2 dígitos, y no contiene ningún otro tipo de caracter.', True, 'La población desde el programa es válida.'),

        //campo: poblacion_hasta_programa
        Array('poblacion_hasta_programa', 1, 'La población hasta el programa contiene, al menos, un caracter que no es un dígito', False, 'La poblacion hasta el programa solo puede contener dígitos. Ej. 12, 0, 97, ...'),
        Array('poblacion_hasta_programa', 2, 'La población hasta el programa contiene menos de 1 dígito', False, 'La poblacion hasta el programa debe tener al menos 1 dígito. Ej. 12, 0, 97, ...'),
        Array('poblacion_hasta_programa', 3, 'La población hasta el programa contiene más de 2 dígitos.', False, 'La poblacion hasta el programa debe tener como máximo 2 dígitos. Ej. 12, 0, 97, ...'),
        Array('poblacion_hasta_programa', 4, 'La población hasta el programa contiene entre 1 y 2 dígitos, y no contiene ningún otro tipo de caracter.', True, 'La poblacion hasta el programa es válida.'),
        
        //campo: unidad_poblacion
        Array('unidad_poblacion', 1, 'La unidad de población ni contiene como valor la cadena "MESES" ni tampoco "AÑOS"', False, 'La unidad de población debe ser o bien "MESES" o bien "AÑOS" (en mayúsculas y sin comillas)'),
        Array('unidad_poblacion', 2, 'La unidad de población contiene como valor la cadena "MESES" o bien "AÑOS"', True, 'La unidad de población es válida'),

        //campo: tipo_programa 
        Array('tipo_programa', 1, 'El tipo de programa ni contiene como valor la cadena "EVALUACIÓN", tampoco "INTERVENCIÓN", ni "EVALUACIÓN E INTERVENCIÓN"', False, 'El tipo de programa debe ser o bien "EVALUACIÓN", o bien "INTERVENCIÓN", o bien "EVALUACIÓN E INTERVENCIÓN" (en mayúsculas y sin comillas)'),
        Array('tipo_programa', 2, 'El tipo de programa contiene como valor o bien la cadena "EVALUACIÓN", o bien "INTERVENCIÓN", o bien "EVALUACIÓN E INTERVENCIÓN"', True, 'El tipo de programa es válido.'),

        //campo: tiempo_aplicacion_programa
        Array('tiempo_aplicacion_programa', 1, 'El tiempo de aplicación del programa contiene, al menos, un caracter que no es un dígito', False, 'El tiempo de aplicación del programa solo puede contener dígitos. Ej. 12, 3790, 4923, ...'),
        Array('tiempo_aplicacion_programa', 2, 'El tiempo de aplicación del programa contiene menos de 1 dígito', False, 'El tiempo de aplicación del programa debe tener al menos 1 dígito. Ej. 12, 3790, 4923, ...'),
        Array('tiempo_aplicacion_programa', 3, 'El tiempo de aplicación del programa contiene más de 4 dígitos.', False, 'El tiempo de aplicación del programa debe tener como máximo 4 dígitos. Ej. 12, 3790, 4923, ...'),
        Array('tiempo_aplicacion_programa', 4, 'El tiempo de aplicación del programa contiene entre 1 y 4 dígitos, y no contiene ningún otro tipo de caracter.', True, 'El tiempo de aplicación del programa es válido.'),

        //campo: descrip_interp_programa
        Array('descrip_interp_programa', 1, 'La descripción de la interpretación del programa contiene algún caracter que no es: alfabéticos acentuados, espacio, retorno de carro o signos de puntuación.', False, 'La descripción de la interpretación del programa debe contener caracteres alfabéticos acentuados, espacios, retorno de carro o signos de puntuación.'),
        Array('descrip_interp_programa', 2, 'La descripción de la interpretación del programa contiene menos de 100 caracteres.', False, 'La descripción de la interpretación del programa debe contener, al menos, 100 caracteres.'),
        Array('descrip_interp_programa', 3, 'La descripción de la interpretación del programa contiene más de 5000 caracteres.', False, 'La descripción de la interpretación del programa debe contener hasta 5000 caracteres.'),
        Array('descrip_interp_programa', 4, 'La descripción de la interpretación del programa contiene caracteres dentro del conjunto de los alfabéticos acentuados, o espacios, o retorno de carro o signos de puntuación. Además la descripción de la interpretación del programa contiene entre 100 y 5000 caracteres.', True, 'La descripción de la interpretación del programa es válida.'),

        //campo: fichero_programa
        Array('fichero_programa', 1, 'El nombre del fichero del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos no acentuados, y que no incluyen ñ o Ñ. Ej. espacios, tabulado, punto, coma, ...', False, 'El nombre del fichero del programa puede estar en mayúsculas o minúsuclas, siempre que no contenga la letra "ñ" o en su defecto "Ñ", espacios, u cualquier otro tipo de caractér no alfabético. Ej. ficheroProgramaValido, AntiguoFichero, NUEVOfichero, ...'),
        Array('fichero_programa', 2, 'El nombre del fichero del programa contiene menos de 7 caracters.', False, 'El nombre del fichero del programa debe tener, al menos, 7 caracteres. Ej. ficheroProgramaValido, AntiguoFichero, NUEVOfichero, ...'),
        Array('fichero_programa', 3, 'El nombre del fichero del programa contiene más de 60 caracters.', False, 'El nombre del fichero del programa debe tener no más de 60 caracteres. Ej. ficheroProgramaValido, AntiguoFichero, NUEVOfichero, ...'),
        Array('fichero_programa', 4, 'El nombre del fichero del programa contiene caracteres alfabéticos no acentuados, y que no incluye a la ñ y Ñ, tampoco contiene espacios o cualquier otro tipo de caracter no alfabético. Además tiene entre 7 y 60 caracteres.', True, 'El nombre del fichero del programa es válido.'),

        //campo: enlace_programa
        Array('enlace_programa', 1, 'En enlace del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos no acentuados y sin ñ o Ñ. Además no forma parte del conjunto de caracteres: " ",":", "/" y ".".', False, 'El enlace del programa puede estar en mayúsculas o minúsculas sin acento y no incluyendo los caracteres "Ñ" y "ñ", y además puede contener espacios, o ":", o  "/", o ".". Ej. /Usuarios/Nicolas:.oculto, ./Archivos/.oculto, ./,  ...'),
        Array('enlace_programa', 2, 'En enlace del programa contiene menos de 10 caracteres.', False, 'El enlace del programa debe tener, al menos, 10 caracteres. Ej. /Usuarios/Nicolas:.oculto, ./Archivos/.oculto, ./,  ...'),
        Array('enlace_programa', 3, 'En enlace del programa contiene más de 100 caracteres.', False, 'El enlace del programa debe tener no más de 100 caracteres. Ej. /Usuarios/Nicolas:.oculto, ./Archivos/.oculto, ./,  ...'),
        Array('enlace_programa', 4, 'El enlace del programa contiene solo caracteres que forman parte del conjunto alfabético sin acentos y que no incluyen los caracteres "Ñ" y "ñ", y también puede contener espacios, ":", o  "/", o ".". Además el enlace del programa contiene entre 10 y 100 caracteres.', True, 'El enlace del programa es válido.'),

        //campo: formato_programa
        Array('formato_programa', 1, 'El formato del programa ni contiene como valor la cadena "PAPEL", ni "ELECTRÓNICO", ni tampoco "PAPEL Y ELECTRÓNICO".', False, 'El formato del programa debe o bien ser "PAPEL", o bien "ELECTRÓNICO", o bien "PAPEL Y ELECTRÓNICO" (en mayúsculas y sin comillas)'),
        Array('formato_programa', 2, 'El formato del programa contiene como valor o bien la cadena "PAPEL", o bien "ELECTRÓNICO", o bien "PAPEL Y ELECTRÓNICO".', True, 'El formato del programa es válido.'),

        //campo: modo_correccion_programa
        Array('modo_correccion_programa', 1, 'El modo de correción del programa ni contiene como valor la cadena "PAPEL", ni "ELECTRÓNICO", ni tampoco "PAPEL Y ELECTRÓNICO".', False, 'El modo de correción del programa debe o bien ser "PAPEL", o bien "ELECTRÓNICO", o bien "PAPEL Y ELECTRÓNICO" (en mayúsculas y sin comillas)'),
        Array('modo_correccion_programa', 2, 'El modo de correción del programa contiene como valor o bien la cadena "PAPEL", o bien "ELECTRÓNICO", o bien "PAPEL Y ELECTRÓNICO".', True, 'El modo de correción del programa es válido.'),

        //campo: modo_aplicacion_programa
        Array('modo_aplicacion_programa', 1, 'El modo de aplicación del programa ni contiene como valor la cadena "INDIVIDUAL", ni "COLECTIVO", ni tampoco "INDIVIDUAL Y COLECTIVO"', False, 'EL modo de aplicación del programa debe o bien ser "INDIVIDUAL", o bien "COLECTIVO", o bien "INDIVIDUAL Y COLECTIVO"'),
        Array('modo_aplicacion_programa', 2, 'El modo de aplicación del programa contiene como valor o bien la cadena "INDIVIDUAL", o bien "COLECTIVO", o bien "INDIVIDUAL Y COLECTIVO"', True, 'EL modo de aplicación del programa es válido"'),

        //campo: imagen_programa
        Array('imagen_programa', 1, 'El nombre de la imagen del programa contiene algún caracter que no forma parte del conjunto de los alfabéticos no acentuados, y que no incluyen ñ o Ñ. Ej. espacios, tabulado, punto, coma, ...', False, 'El nombre de la imagen del programa puede estar en mayúsculas o minúsuclas, siempre que no contenga la letra "ñ" o en su defecto "Ñ", espacios, u cualquier otro tipo de caractér no alfabético. Ej. imagenProgramaValida, AntiguaImagen, NUEVAimagen, ...'),
        Array('imagen_programa', 2, 'El nombre de la imagen del programa contiene menos de 7 caracters.', False, 'El nombre de la imagen del programa debe tener, al menos, 7 caracteres. Ej. imagenProgramaValida, AntiguaImagen, NUEVAimagen, ...'),
        Array('imagen_programa', 3, 'El nombre de la imagen del programa contiene más de 60 caracters.', False, 'El nombre de la imagen del programa debe tener no más de 60 caracteres. Ej. imagenProgramaValida, AntiguaImagen, NUEVAimagen, ...'),
        Array('imagen_programa', 4, 'El nombre de la imagen del programa contiene caracteres alfabéticos no acentuados, y que no incluye a la ñ y Ñ, tampoco contiene espacios o cualquier otro tipo de caracter no alfabético. Además tiene entre 7 y 60 caracteres.', True, 'El nombre de la imagen del programa es válido.'),
    );
</script>
