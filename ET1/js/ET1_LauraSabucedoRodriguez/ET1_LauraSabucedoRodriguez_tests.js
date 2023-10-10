<script type="text/javascript">
def_test_LauraSabucedoRodriguez = Array(
  //definición de tests para id_programa
  Array("id_programa", 1, "tamaño < 1", false, "El campo no puede ser vacío"),
  Array(
    "id_programa",
    2,
    "tamaño > 6",
    false,
    "El campo no puede contener más de 6 caracteres"
  ),
  Array(
    "id_programa",
    3,
    "caracter distinto de dígito",
    false,
    "El campo solo admite dígitos numéricos."
  ),
  Array("id_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para nombre_programa
  Array(
    "nombre_programa",
    1,
    "tamaño < 6",
    false,
    "Este campo no puede tener menos de 6 caracteres."
  ),
  Array(
    "nombre_programa",
    2,
    "tamaño > 60",
    false,
    "Este campo no puede tener más de 60 caracteres."
  ),
  Array(
    "nombre_programa",
    3,
    "no alfabéticos con acento, ñ y espacios en blanco",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ' y espacios en blanco."
  ),
  Array("nombre_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para acrónimo_programa
  Array(
    "acrónimo_programa",
    1,
    "tamaño < 3",
    false,
    "El campo debe contener al menos 3 caracteres."
  ),
  Array(
    "acrónimo_programa",
    2,
    "tamaño  > 20",
    false,
    "El campo no puede contener más de 20 caracteres."
  ),
  Array(
    "acrónimo_programa",
    3,
    "no alfabético o con acentos o con ñ o con espacios",
    false,
    "Este campo solo admite caracteres alfabéticos sin acentos."
  ),
  Array("acrónimo_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para nombre_original_programa
  Array(
    "nombre_original_programa",
    1,
    "tamaño < 6",
    false,
    "Este campo no puede tener menos de 6 caracteres"
  ),
  Array(
    "nombre_original_programa",
    2,
    "tamaño > 60",
    false,
    "Este campo no puede tener más de 60 caracteres"
  ),
  Array(
    "nombre_original_programa",
    3,
    "no alfabéticos con acento, ñ y espacios en blanco",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ' y espacios en blanco."
  ),
  Array("nombre_original_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para autor_programa
  Array(
    "autor_programa",
    1,
    "tamaño < 6",
    false,
    "Este campo no puede tener menos de 6 caracteres"
  ),
  Array(
    "autor_programa",
    2,
    "tamaño > 50",
    false,
    "Este campo no puede tener más de 50 caracteres"
  ),
  Array(
    "autor_programa",
    3,
    "no alfabéticos con acento, ñ y espacios en blanco",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ' y espacios en blanco."
  ),
  Array("autor_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para autor_original_programa
  Array(
    "autor_original_programa",
    1,
    "tamaño < 6",
    false,
    "Este campo no puede tener menos de 6 caracteres"
  ),
  Array(
    "autor_original_programa",
    2,
    "tamaño > 50",
    false,
    "Este campo no puede tener más de 50 caracteres"
  ),
  Array(
    "autor_original_programa",
    3,
    "no alfabéticos con acento, ñ y espacios en blanco",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ' y espacios en blanco."
  ),
  Array("autor_original_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para ano_programa
  Array(
    "ano_programa",
    1,
    "tamaño < 4",
    false,
    "El campo debe contener 4 caracteres"
  ),
  Array(
    "ano_programa",
    2,
    "tamaño > 4",
    false,
    "El campo debe contener 4 caracteres "
  ),
  Array(
    "ano_programa",
    3,
    "caracter distinto de dígito",
    false,
    "Este campo solo admite dígitos numéricos."
  ),
  Array(
    "ano_programa",
    4,
    "año superior al actual",
    false,
    "El año introducido no puede ser mayor al actual."
  ),
  Array("ano_programa", 5, "formato válido", true, "Éxito."),

  //definición de tests para ano_original_programa
  Array(
    "ano_original_programa",
    1,
    "tamaño < 4",
    false,
    "El campo debe contener 4 caracteres"
  ),
  Array(
    "ano_original_programa",
    2,
    "tamaño > 4",
    false,
    "El campo debe contener 4 caracteres "
  ),
  Array(
    "ano_original_programa",
    3,
    "caracter distinto de dígito",
    false,
    "Este campo solo admite dígitos numéricos."
  ),
  Array(
    "ano_original_programa",
    4,
    "año superior al actual",
    false,
    "El año introducido no puede ser mayor al actual."
  ),
  Array("ano_original_programa", 5, "formato válido", true, "Éxito."),

  //definición de tests para requisitos_programa
  Array(
    "requisitos_programa",
    1,
    "tamaño < 6",
    false,
    "El campo debe contener al menos 6 caracteres."
  ),
  Array(
    "requisitos_programa",
    2,
    "tamaño > 300",
    false,
    "El campo no puede contener más de 300 caracteres"
  ),
  Array(
    "requisitos_programa",
    3,
    "no alfabéticos con acento, ñ, espacios en blanco y signos de puntuación",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ', espacios en blanco y signos de puntuación."
  ),
  Array("requisitos_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para poblacion_desde_programa
  Array(
    "poblacion_desde_programa",
    1,
    "tamaño < 1",
    false,
    "El campo no puede estar vacío."
  ),
  Array(
    "poblacion_desde_programa",
    2,
    "tamaño > 2",
    false,
    "El campo no puede contener más de 2 caracteres."
  ),
  Array(
    "poblacion_desde_programa",
    3,
    "caracter distinto de dígito",
    false,
    "Este campo solo admite dígitos numéricos"
  ),
  Array("poblacion_desde_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para poblacion_hasta_programa
  Array(
    "poblacion_hasta_programa",
    1,
    "tamaño < 1",
    false,
    "El campo no puede estar vacio."
  ),
  Array(
    "poblacion_hasta_programa",
    2,
    "tamaño > 2",
    false,
    "El campo no puede conteer más de 2 caracteres."
  ),
  Array(
    "poblacion_hasta_programa",
    3,
    "caracter distinto de dígito",
    false,
    "Este campo solo admite dígitos numéricos."
  ),
  Array("poblacion_hasta_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para unidad_poblacion
  Array(
    "unidad_poblacion",
    1,
    "valor distinto de 'MESES' o 'AÑOS'",
    false,
    "El valor del campo es erróneo. Por favor, seleccione una de las siguientes opciones: 'MESES' o 'AÑOS'."
  ),
  Array("unidad_poblacion", 2, "formato válido", true, "Éxito."),

  //definición de tests para tipo_programa
  Array(
    "tipo_programa",
    1,
    "valor distinto de 'EVALUACIÓN', 'INTERVENCIÓN' o 'EVALUACIÓN E INTERVENCIÓN'",
    false,
    "Entrada inválida. Por favor, seleccione una de las siguientes opciones: 'EVALUACIÓN', 'INTERVENCIÓN' o 'EVALUACIÓN Y INTERVENCIÓN'."
  ),
  Array("tipo_programa", 2, "formato válido", true, "Éxito."),

  //definición de tests para tiempo_aplicacion_programa
  Array(
    "tiempo_aplicacion_programa",
    1,
    "tamaño < 1",
    false,
    "El campo no puede estar vacío"
  ),
  Array(
    "tiempo_aplicacion_programa",
    2,
    "tamaño > 4",
    false,
    "El campo no puede contener más de 4 caracteres"
  ),
  Array(
    "tiempo_aplicacion_programa",
    3,
    "caracter distinto de dígito",
    false,
    "Este campo solo admite dígitos numéricos."
  ),
  Array("tiempo_aplicacion_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para descrip_interp_programa
  Array(
    "descrip_interp_programa",
    1,
    "tamaño < 100",
    false,
    "El campo debe contener al menos 100 caracteres."
  ),
  Array(
    "descrip_interp_programa",
    2,
    "tamaño > 5000",
    false,
    "El campo no puede contener más de 5000 caracteres"
  ),
  Array(
    "descrip_interp_programa",
    3,
    "no alfabéticos con acento, ñ, espacios en blanco, signos de puntuación y retornos de carro",
    false,
    "Entrada inválida: Por favor, ingrese solo caracteres alfabéticos, incluyendo acentos, la letra 'ñ', espacios en blanco, signos de puntuación y retornos de carro."
  ),
  Array("descrip_interp_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para fichero_programa
  Array(
    "fichero_programa",
    1,
    "tamaño < 7",
    false,
    "El campo debe contener al menos 7 caracteres."
  ),
  Array(
    "fichero_programa",
    2,
    "tamaño  > 60",
    false,
    "El campo no puede contener más de 60 caracteres."
  ),
  Array(
    "fichero_programa",
    3,
    "no alfabético o con acentos o con ñ o con espacios",
    false,
    "Este campo solo admite caracteres alfabéticos sin acentos."
  ),
  Array("fichero_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para enlace_programa
  Array(
    "enlace_programa",
    1,
    "tamaño < 10",
    false,
    "El campo debe contener al menos 10 caracteres."
  ),
  Array(
    "enlace_programa",
    2,
    "tamaño > 100",
    false,
    "El campo no puede contener más de 100 caracteres."
  ),
  Array(
    "enlace_programa",
    3,
    "no alfabético distinto de ':', '/', '.' o con acentos o con ñ o con espacios",
    false,
    "Este campo solo admite caracteres alfabéticos sin acentos y ':', '/', '.'."
  ),
  Array("enlace_programa", 4, "formato válido", true, "Éxito."),

  //definición de tests para formato_programa
  Array(
    "formato_programa",
    1,
    "valor distinto de 'PAPEL', 'ELECTRÓNICO' o 'PAPEL Y ELECTRÓNICO'",
    false,
    "El valor del campo es erróneo. Por favor, seleccione una de las siguientes opciones: 'PAPEL', 'ELECTRÓNICO' o 'PAPEL Y ELECTRÓNICO'."
  ),
  Array("formato_programa", 2, "formato válido", true, "Éxito."),

  //definición de tests para modo_correccion_programa
  Array(
    "modo_correccion_programa",
    1,
    "valor distinto de 'PAPEL', 'ELECTRÓNICO' o 'PAPEL Y ELECTRÓNICO'",
    false,
    "El valor del campo es erróneo. Por favor, seleccione una de las siguientes opciones: 'PAPEL', 'ELECTRÓNICO' o 'PAPEL Y ELECTRÓNICO'."
  ),
  Array("modo_correccion_programa", 2, "formato válido", true, "Éxito."),

  //definición de tests para modo_aplicacion_programa
  Array(
    "modo_aplicacion_programa",
    1,
    "valor distinto de 'INDIVIDUAL', 'COLECTIVO' o 'INDIVIDUAL Y COLECTIVO'",
    false,
    "El valor del campo es erróneo. Por favor, seleccione una de las siguientes opciones: 'INDIVIDUAL', 'COLECTIVO' o 'INDIVIDUAL Y COLECTIVO'."
  ),
  Array("modo_aplicacion_programa", 2, "formato válido", true, "Éxito."),

  //definición de tests para imagen_programa
  Array(
    "imagen_programa",
    1,
    "tamaño < 7",
    false,
    "El campo debe contener al menos 7 caracteres."
  ),
  Array(
    "imagen_programa",
    2,
    "tamaño  > 60",
    false,
    "El campo no puede contener más de 60 caracteres."
  ),
  Array(
    "imagen_programa",
    3,
    "no alfabético o con acentos o con ñ o con espacios",
    false,
    "Este campo solo admite caracteres alfabéticos sin acentos."
  ),
  Array("imagen_programa", 4, "formato válido", true, "Éxito.")
);

//descripción del error con letra o comprobaciones reales (reguex)
//modo_aplicacion_programa: sería necesario el error si lo más apropiado sería poner un select

</script>
