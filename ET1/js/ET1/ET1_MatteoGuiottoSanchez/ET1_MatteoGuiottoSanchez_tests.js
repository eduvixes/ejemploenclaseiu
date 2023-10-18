<script type="text/javascript">

def_test_MatteoGuiottoSanchez= 
Array(
    Array('id_programa', 1, 'tamaño menor que 1', false, 'El id del programa debe tener como minimo un digito'),
    Array('id_programa', 2, 'tamaño mayor que 6', false, 'El id del programa debe tener como maximo seis digitos'),
    Array('id_programa', 3, 'Algun caracter != digito', false, 'El id del programa solo puede contener digitos'),
    Array('id_programa', 4, 'tamaño mayor que 1 && tamaño menor o igual que 6 && solo dígitos', true, 'Exito'),

    Array('nombre_programa', 1, 'tamaño menor que 6', false, 'El nombre del programa debe tener como minimo seis digitos'),
    Array('nombre_programa', 2, 'tamaño mayor que 60' , false, 'El nombre del programa debe tener como maximo sesenta digitos'),
    Array('nombre_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El nombre del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('nombre_programa', 4, 'tamaño mayor que 6 && tamaño menor o igual que 60 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('acronimo_programa', 1, 'tamaño menor que 3', false, 'El acronimo del programa debe tener como minimo tres digitos'),
    Array('acronimo_programa', 2, 'tamaño mayor que 20', false, 'El acronimo del programa debe tener como maximo veinte digitos'),
    Array('acronimo_programa', 3, 'Algun caracter != Alfabetico sin acentos ni espacios', false, 'El acronimo del programa solo puede contener caracteres alfabeticos sin acentos ni espacios'),
    Array('acronimo_programa', 4, 'tamaño mayor que 3 && tamaño menor o igual que 20 && Alfabetico sin acentos ni espacios', true, 'Exito'),

    Array('nombre_original_programa', 1, 'tamaño menor que 6', false, 'El nombre original del programa debe tener como minimo tres digitos'),
    Array('nombre_original_programa', 2, 'tamaño mayor que 60', false, 'El nombre original del programa debe tener como maximo veinte digitos'),
    Array('nombre_original_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El nombre original del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('nombre_original_programa', 4, 'tamaño mayor que 6 && tamaño menor o igual que 60 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('autor_programa', 1, 'tamaño menor que 6', false, 'El autor del programa debe tener como minimo seis digitos'),
    Array('autor_programa', 2, 'tamaño mayor que 50', false, 'El autor del programa debe tener como maximo cincuenta digitos'),
    Array('autor_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El sutor del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('autor_programa', 4, 'tamaño mayor que 6 && tamaño menor o igual que 50 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('autor_original_programa', 1, 'tamaño menor que 6', false, 'El autor original del programa debe tener como minimo seis digitos'),
    Array('autor_original_programa', 2,  'tamaño mayor que 50', false, 'El autor original del programa debe tener como maximo cincuenta digitos'),
    Array('autor_original_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ o espacio', false, 'El autor original del programa solo puede contener caracteres alfabeticos con acentos, ñ y espacios'),
    Array('autor_original_programa', 4, 'tamaño mayor que 6 && tamaño menor o igual que 50 && Alfabetico con o sin acento, ñ o espacio', true, 'Exito'),

    Array('ano_programa', 1, 'tamaño menor que 4', false, 'El ano del programa debe tener como minimo cuatro digitos'),
    Array('ano_programa', 2, 'tamaño mayor que 4', false, 'El ano del programa debe tener como maximo cuatro digitos'),
    Array('ano_programa', 3, 'ano superior al actual', false, 'El ano del programa no puede ser mayor del ano actual'),
    Array('ano_programa', 4, 'tamaño = 4 && ano no superior al actual', true, 'Exito'),

    Array('ano_original_programa', 1, 'tamaño menor que 4', false, 'El ano original del programa debe tener como minimo cuatro digitos'),
    Array('ano_original_programa', 2, 'tamaño mayor que 4', false, 'El ano original del programa debe tener como maximo cuatro digitos'),
    Array('ano_original_programa', 3, 'ano superior al actual', false, 'El ano original del programa no puede ser mayor del ano actual'),
    Array('ano_original_programa', 4, 'tamaño = 4 && ano no superior al actual', true, 'Exito'),

    Array('requisitos_programa', 1, 'tamaño menor que 6', false, 'Los requisitos del programa debe tener como minimo seis digitos'),
    Array('requisitos_programa', 2, 'tamaño mayor que 300', false, 'Los requisitos del programa debe tener como maximo trescientos digitos'),
    Array('requisitos_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ, espacio o signos de puntuacion', false, 'El nombre original del programa solo puede contener caracteres alfabeticos con acentos, ñ, espacios y signos de puntuacion'),
    Array('requisitos_programa', 4, 'tamaño mayor que 6 && tamaño menor o igual que 300 && Alfabetico con o sin acento, ñ, espacio o signos de puntuacion', true, 'Exito'),

    Array('poblacion_desde_programa', 1, 'tamaño menor que 1', false, 'La poblacion desde programa debe tener como minimo un digito'),
    Array('poblacion_desde_programa', 2, 'tamaño mayor que 2', false, 'La poblacion desde programa debe tener como maximo dos digitos'),
    Array('poblacion_desde_programa', 3, 'tamaño = 2', true, 'Exito'),

    Array('poblacion_hasta_programa', 1, 'tamaño menor que 1', false, 'La poblacion hasta programa debe tener como minimo un digito'),
    Array('poblacion_hasta_programa', 2, 'tamaño mayor que 2', false, 'La poblacion hasta programa debe tener como maximo dos digitos'),
    Array('poblacion_hasta_programa', 3, 'tamaño = 2', true, 'Exito'),

    Array('tipo_programa', 1, 'valor != "MESES" o "AÑOS"', false, 'solo puedes elegir los valores "MESES" "AÑOS"'),
    Array('tipo_programa', 2, 'valor = "MESES" o "AÑOS"', true, 'Exito'),

    Array('tiempo_aplicacion_programa', 1, 'valor != "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"', false, 'solo puedes elegir los valores "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"'),
    Array('tiempo_aplicacion_programa', 2, 'valor = "EVALUACIÓN", "INTERVENCIÓN" o "EVALUACIÓN E INTERVENCIÓN"', true, 'Exito'),

    Array('descrip_interp_programa', 1, 'tamaño menor que 100', false, 'Los requisitos del programa debe tener como minimo cien digitos'),
    Array('descrip_interp_programa', 2, 'tamaño mayor que 5000', false, 'Los requisitos del programa debe tener como maximo cinco mil digitos'),
    Array('descrip_interp_programa', 3, 'Algun caracter != Alfabetico con o sin acento, ñ, espacio ,signos de puntuacion o retornos de carro', false, 'El descrip interp del programa solo puede contener caracteres alfabeticos con acentos, ñ, espacios, signos de puntuacion y retornos de carro'),
    Array('descrip_interp_programa', 4, 'tamaño mayor que 100 && tamaño menor o igual que 5000 && Alfabetico con o sin acento, ñ, espacio, signos de puntuacion o retornos de carro', true, 'Exito'),

    Array('fichero_programa', 1, 'tamaño menor que 7', false, 'El fichero del programa debe tener como minimo siete digitos'),
    Array('fichero_programa', 2, 'tamaño mayor que 60', false, 'El fichero del programa debe tener como maximo sesenta digitos'),
    Array('fichero_programa', 3, 'Algun caracter != Alfabetico sin acentos ni ñ ni espacios', false, 'El fichero del programa solo puede contener caracteres alfabeticos sin acentos ni ñ ni espacios'),
    Array('fichero_programa', 4, 'tamaño mayor que 7 && tamaño menor o igual que 60 && Alfabetico sin acentos ni ñ ni espacios', true, 'Exito'),

    Array('enlace_programa', 1, 'tamaño menor que 10', false, 'El enlace del programa debe tener como minimo diez digitos'),
    Array('enlace_programa', 2, 'tamaño mayor que 100', false, 'El enlace del programa debe tener como maximo cien digitos'),
    Array('enlace_programa', 3, 'Algun caracter != Alfabetico con ":", "/" o ".", sin acentos ni ñ ni espacios', false, 'El enlace del programa solo puede contener caracteres alfabeticos con ":", "/" o "."'),
    Array('enlace_programa', 4, 'tamaño mayor que 10 && tamaño menor o igual que 100 && Alfabetico con ":", "/" o ".", sin acentos ni ñ ni espacios', true, 'Exito'),

    Array('formato_programa', 1, 'valor != "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', false, 'solo puedes elegir los valores "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO E INTERVENCIÓN"'),
    Array('formato_programa', 2, 'valor = "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Exito'),

    Array('modo_correccion_programa', 1, 'valor != "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', false, 'solo puedes elegir los valores "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO E INTERVENCIÓN"'),
    Array('modo_correccion_programa', 2, 'valor = "PAPEL", "ELECTRÓNICO" o "PAPEL Y ELECTRÓNICO"', true, 'Exito'),

    Array('modo_aplicacion_programa', 1, 'valor != "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"', false, 'solo puedes elegir los valores "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"'),
    Array('modo_aplicacion_programa', 2, 'valor = "INDIVIDUAL", "COLECTIVO" o "INDIVIDUAL Y COLECTIVO"', true, 'Exito'),

    Array('imagen_programa', 1, 'tamaño menor que 7', false, 'La imagen del programa debe tener como minimo siete digitos'),
    Array('imagen_programa', 2, 'tamaño mayor que 60', false, 'La imagen del programa debe tener como maximo sesenta digitos'),
    Array('imagen_programa', 3, 'Algun caracter != Alfabetico sin acentos ni ñ ni espacios', false, 'La imagen del programa solo puede contener caracteres alfabeticos sin acentos ni ñ ni espacios'),
    Array('imagen_programa', 4, 'tamaño mayor que 7 && tamaño menor o igual que 60 && Alfabetico sin acentos ni ñ ni espacios', true, 'Exito'),
    
);
</script>