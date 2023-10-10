<script type="text/javascript">
pruebasunitarias_LauraSabucedoRodriguez = Array(
  //pruebas unitarias basicas de un usuario
  Array(1,"usuario", 1, "jr", false),
  Array(
    "usuario",
    2,
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    false
  ),
  Array("usuario", 1, "j rodeiro", false),
  Array("usuario", 1, "iñaki", false),
  Array("usuario", 1, "jrodeiro", true),

  //pruebas unitarias para id_programa
  Array("id_programa", 1, "", false),
  Array("id_programa", 2, "01234567", false),
  Array("id_programa", 3, "laura", false),
  Array("id_programa", 4, "12ab45", false),
  Array("id_programa", 5, "$123. 5", false),
  Array("id_programa", 6, "$123456", true),

  //pruebas unitarias para anombre_programa
  Array("nombre_programa", 1, "ej", false),
  Array(
    "nombre_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("nombre_programa", 3, "ej€mplo!", false),
  Array("nombre_programa", 4, "ej 3mplo", false),
  Array("nombre_programa", 5, "ejémplo ñ", true),

  //pruebas unitarias para acronimo_programa
  Array("acronimo_programa", 1, "ej", false),
  Array("acronimo_programa", 2, "ejemplooooooooooooooo", false),
  Array("acronimo_programa", 3, "ejem plo", false),
  Array("acronimo_programa", 4, "3j3mpl0", false),
  Array("acronimo_programa", 4, "ejémplo", false),
  Array("acronimo_programa", 4, "ej€mplo!", false),
  Array("acronimo_programa", 4, "ejemplo", true),

  //pruebas unitarias para nombre_original_programa
  Array("nombre_original_programa", 1, "ej", false),
  Array(
    "nombre_original_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("nombre_original_programa", 3, "ej€mplo!", false),
  Array("nombre_original_programa", 4, "ej 3mplo", false),
  Array("nombre_original_programa", 5, "ejémplo ñ", true),

  //pruebas unitarias para autor_programa
  Array("autor_programa", 1, "ej", false),
  Array(
    "autor_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("autor_programa", 3, "ej€mplo!", false),
  Array("autor_programa", 4, "ej 3mplo", false),
  Array("autor_programa", 5, "ejémplo ñ", true),

  //pruebas unitarias para autor_original_programa
  Array("autor_original_programa", 1, "ej", false),
  Array(
    "autor_original_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("autor_original_programa", 3, "ej€mplo!", false),
  Array("autor_original_programa", 4, "ej 3mplo", false),
  Array("autor_original_programa", 5, "ejémplo ñ", true),

  //pruebas unitarias para ano_programa
  Array("ano_programa", 1, "123", false),
  Array("ano_programa", 2, "12345", false),
  Array("ano_programa", 3, "12a45", false),
  Array("ano_programa", 4, "12$ú45", false),
  Array("ano_programa", 5, "2024", false),
  Array("ano_programa", 5, "2022", true),

  //pruebas unitarias para ano_original_programa
  Array("ano_original_programa", 1, "123", false),
  Array("ano_original_programa", 2, "12345", false),
  Array("ano_original_programa", 3, "12a45", false),
  Array("ano_original_programa", 4, "12$ú45", false),
  Array("ano_original_programa", 5, "2024", false),
  Array("ano_original_programa", 5, "2022", true),

  //pruebas unitarias para requisitos_programa
  Array("requisitos_programa", 1, "ej", false),
  Array(
    "requisitos_programa",
    2,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus risus, pellentesque eget lectus id, laoreet efficitur sapien. Donec auctor augue vitae erat dapibus pulvinar sed sit amet est. In mauris mauris, sodales sed mi quis, pulvinar imperdiet metus. Suspendisse vulputate sagittis felis nec lobortis. Proin eget laoreet dui. Vivamus et quam nec purus tempus placerat in sagittis lectus. Quisque magna dolor, sollicitudin ut sollicitudin eleifend, fringilla ac elit. Sed enim tellus, interdum eu tortor in, dapibus mollis nibh. Aliquam turpis nisi, posuere non tincidunt at, consequat sed velit. Proin volutpat malesuada ante, a placerat metus pulvinar quis. Quisque at lectus at risus bibendum vulputate ornare id diam. Etiam venenatis dolor et tortor semper varius a non eros.Cras hendrerit leo ut suscipit varius. Praesent interdum semper lacus nec dictum. Mauris efficitur porta felis vitae varius. Vivamus vitae elit urna. Vestibulum feugiat blandit neque, et rhoncus augue maximus a. Duis et metus lectus. Vestibulum dictum metus odio, eget mattis neque convallis at. Proin dictum est non elit efficitur, a scelerisque diam faucibus. In cursus tincidunt ligula, ac mattis magna sodales vitae. Etiam molestie dui tempor, suscipit tortor sed, mollis ante. Sed condimentum justo a lorem scelerisque pulvinar. Sed vitae maximus urna. Nulla facilisi. Quisque ante est, volutpat nec pretium in, posuere et ligula. Aenean ornare pharetra aliquam. Morbi quis ante rutrum, pulvinar odio ac, ullamcorper dui.Donec blandit arcu a hendrerit varius. Duis et sem pretium, tristique nisl id, malesuada risus. Pellentesque tincidunt, velit vitae tempor fermentum, massa neque vulputate sem, id feugiat libero mauris quis purus. Mauris convallis imperdiet mattis. Mauris id pellentesque risus. Nulla ipsum enim, mollis ut metus vitae, gravida semper nulla. Sed molestie dictum malesuada. Morbi ante turpis, ullamcorper sed mauris et, molestie semper nisl. In sapien est, ullamcorper ac nibh vel, efficitur tempor nisl. Vestibulum cursus urna id pellentesque placerat.",
    false
  ),
  Array("requisitos_programa", 3, "ej3333mploooo$!", false),
  Array(
    "requisitos_programa",
    4,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elít.",
    true
  ),

  //pruebas unitarias para poblacion_desde_programa
  Array("poblacion_desde_programa", 1, "", false),
  Array("poblacion_desde_programa", 2, "123", false),
  Array("poblacion_desde_programa", 3, "ab", false),
  Array("poblacion_desde_programa", 4, "!", false),
  Array("poblacion_desde_programa", 5, "12", true),

  //pruebas unitarias para poblacion_hasta_programa
  Array("poblacion_hasta_programa", 1, "", false),
  Array("poblacion_hasta_programa", 2, "123", false),
  Array("poblacion_hasta_programa", 3, "ab", false),
  Array("poblacion_hasta_programa", 4, "!", false),
  Array("poblacion_hasta_programa", 5, "12", true),

  //pruebas unitarias para unidad_poblacion
  Array("unidad_poblacion", 1, "a1$ 2!", false),
  Array("unidad_poblacion", 2, "MESES", true),
  Array("unidad_poblacion", 3, "AÑOS", true),

  //pruebas unitarias para tipo_programa
  Array("tipo_programa", 1, "a1$ 2!", false),
  Array("tipo_programa", 2, "EVALUACIÓN", true),
  Array("tipo_programa", 3, "INTERVENCIÓN", true),
  Array("tipo_programa", 3, "EVALUACIÓN E INTERVENCIÓN", true),

  //pruebas unitarias para tiempo_aplicacion_programa
  Array("poblacion_hasta_programa", 1, "", false),
  Array("poblacion_hasta_programa", 2, "12345", false),
  Array("poblacion_hasta_programa", 3, "ab", false),
  Array("poblacion_hasta_programa", 4, "!", false),
  Array("poblacion_hasta_programa", 5, "12", true),

  //pruebas unitarias para descrip_internp_programa
  Array("requisitos_programa", 1, "ej", false),
  Array(
    "requisitos_programa",
    2,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros posuere, ullamcorper felis sit amet, vehicula lectus. Sed efficitur at risus vel blandit. Mauris vel sem ac nunc tempus pharetra vel tincidunt turpis. Donec tincidunt molestie lectus vitae faucibus. Aenean in sem diam. Quisque et neque sapien. Proin dictum blandit faucibus. Aliquam erat volutpat. Aenean ultricies tincidunt diam, non facilisis quam feugiat nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae dolor est. Ut eleifend est non neque molestie iaculis. Mauris vitae velit mi. Curabitur efficitur tellus eget mattis faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet cursus leo, at rutrum sem.Ut malesuada felis ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fringilla gravida ante, a placerat massa laoreet nec. Nulla rhoncus tortor quis nunc pellentesque eleifend. Integer consectetur, nisl at tincidunt vulputate, leo ipsum laoreet arcu, et accumsan eros ante non velit. Nunc non eros posuere augue interdum fringilla. Sed ac mattis leo.Morbi cursus faucibus neque a consequat. Curabitur egestas erat vel luctus accumsan. Nunc accumsan vestibulum lectus, vel laoreet nulla venenatis vel. Maecenas luctus tellus purus, et tempor nibh consectetur nec. Etiam vehicula nec ipsum ac laoreet. Morbi finibus pretium eros, ac blandit mi. Cras rhoncus condimentum urna, id tempus diam condimentum eu. Curabitur diam purus, commodo a metus a, interdum posuere sem. Praesent dictum non dui at tempus. Etiam pharetra lectus eget nisl pellentesque, nec facilisis velit efficitur. Suspendisse fermentum libero pellentesque orci volutpat malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros posuere, ullamcorper felis sit amet, vehicula lectus. Sed efficitur at risus vel blandit. Mauris vel sem ac nunc tempus pharetra vel tincidunt turpis. Donec tincidunt molestie lectus vitae faucibus. Aenean in sem diam. Quisque et neque sapien. Proin dictum blandit faucibus. Aliquam erat volutpat. Aenean ultricies tincidunt diam, non facilisis quam feugiat nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae dolor est. Ut eleifend est non neque molestie iaculis. Mauris vitae velit mi. Curabitur efficitur tellus eget mattis faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet cursus leo, at rutrum sem.Ut malesuada felis ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fringilla gravida ante, a placerat massa laoreet nec. Nulla rhoncus tortor quis nunc pellentesque eleifend. Integer consectetur, nisl at tincidunt vulputate, leo ipsum laoreet arcu, et accumsan eros ante non velit. Nunc non eros posuere augue interdum fringilla. Sed ac mattis leo.Morbi cursus faucibus neque a consequat. Curabitur egestas erat vel luctus accumsan. Nunc accumsan vestibulum lectus, vel laoreet nulla venenatis vel. Maecenas luctus tellus purus, et tempor nibh consectetur nec. Etiam vehicula nec ipsum ac laoreet. Morbi finibus pretium eros, ac blandit mi. Cras rhoncus condimentum urna, id tempus diam condimentum eu. Curabitur diam purus, commodo a metus a, interdum posuere sem. Praesent dictum non dui at tempus. Etiam pharetra lectus eget nisl pellentesque, nec facilisis velit efficitur. Suspendisse fermentum libero pellentesque orci volutpat malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros posuere, ullamcorper felis sit amet, vehicula lectus. Sed efficitur at risus vel blandit. Mauris vel sem ac nunc tempus pharetra vel tincidunt turpis. Donec tincidunt molestie lectus vitae faucibus. Aenean in sem diam. Quisque et neque sapien. Proin dictum blandit faucibus. Aliquam erat volutpat. Aenean ultricies tincidunt diam, non facilisis quam feugiat nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae dolor est. Ut eleifend est non neque molestie iaculis. Mauris vitae velit mi. Curabitur efficitur tellus eget mattis faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet cursus leo, at rutrum sem.Ut malesuada felis ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam fringilla gravida ante, a placerat massa laoreet nec. Nulla rhoncus tortor quis nunc pellentesque eleifend. Integer consectetur, nisl at tincidunt vulputate, leo ipsum laoreet arcu, et accumsan eros ante non velit. Nunc non eros posuere augue interdum fringilla. Sed ac mattis leo.Morbi cursus faucibus neque a consequat. Curabitur egestas erat vel luctus accumsan. Nunc accumsan vestibulum lectus, vel laoreet nulla venenatis vel. Maecenas luctus tellus purus, et tempor nibh consectetur nec. Etiam vehicula nec ipsum ac laoreet. Morbi finibus pretium eros, ac blandit mi. Cras rhoncus condimentum urna, id tempus diam condimentum eu. Curabitur diam purus, commodo a metus a, interdum posuere sem. Praesent dictum non dui at tempus. Etiam pharetra lectus eget nisl pellentesque, nec facilisis velit efficitur. Suspendisse fermentum libero pellentesque orci volutpat malesuada.",
    false
  ),
  Array("requisitos_programa", 3, "ej3333mploooo$!", false),
  Array(
    "requisitos_programa",
    4,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet eros posuere, ullamcorper felis sit amet, vehicula lectus. Sed efficitur at risus vel blandit. Mauris vel sem ac nunc tempus pharetra vel tincidunt turpis. ",
    true
  ),

  //pruebas unitarias para fichero_programa
  Array("imagen_programa", 1, "ej", false),
  Array(
    "imagen_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("imagen_programa", 3, "ejemploó", false),
  Array("imagen_programa", 4, "ejem plo", false),
  Array("imagen_programa", 5, "3j3mpl0", false),
  Array("imagen_programa", 6, "ej€mplo", false),
  Array("imagen_programa", 7, "ejemploñññ", false),
  Array("imagen_programa", 8, "ejemplo", true),

  //pruebas unitarias para enlace_prgorama
  Array("imagen_programa", 1, "ej", false),
  Array(
    "imagen_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("imagen_programa", 3, "ejemploó", false),
  Array("imagen_programa", 4, "ejem plo", false),
  Array("imagen_programa", 5, "3j3mpl0", false),
  Array("imagen_programa", 6, "ej€mplo", false),
  Array("imagen_programa", 7, "ejemploñññ", false),
  Array("imagen_programa", 8, "./:ejemplo:/.", true),

  //pruebas unitarias para formato_programa
  Array("formato_programa", 1, "a1$ 2!", false),
  Array("formato_programa", 2, "PAPEL", true),
  Array("formato_programa", 3, "ELECTRÓNICO", true),
  Array("formato_programa", 3, "PAPEL Y ELECTRÓNICO", true),

  //pruebas unitarias para modo_correccion_programa
  Array("modo_correccion_programa", 1, "a1$ 2!", false),
  Array("modo_correccion_programa", 2, "PAPEL", true),
  Array("modo_correccion_programa", 3, "ELECTRÓNICO", true),
  Array("modo_correccion_programa", 3, "PAPEL Y ELECTRÓNICO", true),

  //pruebas unitarias para modo_aplicacion_programa
  Array("modo_aplicacion_programa", 1, "a1$ 2!", false),
  Array("modo_aplicacion_programa", 2, "INDIVIDUAL", true),
  Array("modo_aplicacion_programa", 3, "COLECTIVO", true),
  Array("modo_aplicacion_programa", 3, "INDIVIDUAL Y COLECTIVO", true),

  //pruebas unitarias para imagen_programa
  Array("imagen_programa", 1, "ej", false),
  Array(
    "imagen_programa",
    2,
    "ejemplooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    false
  ),
  Array("imagen_programa", 3, "ejemploó", false),
  Array("imagen_programa", 4, "ejem plo", false),
  Array("imagen_programa", 5, "3j3mpl0", false),
  Array("imagen_programa", 6, "ej€mplo", false),
  Array("imagen_programa", 7, "ejemploñññ", false),
  Array("imagen_programa", 8, "ejemplo", true)
);

//las pruebas tienen que tener el mismo número de campos que los test?
//como hacer en unidad_pblacion, tipo_programa, etc.

</script>
