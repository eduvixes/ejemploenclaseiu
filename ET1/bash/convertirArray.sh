# Lee el fichero de texto y almacena cada línea en una variable
while read line; do
# Añade comillas dobles a cada línea para que sea una cadena válida en JavaScript
line="\"$line\""
# Añade la línea al array, separada por una coma
array+="$line,"
done < listadirectorios.txt

# Elimina la última coma del array
array=${array%,}

# Añade los parantesis al principio y al final del array
array="listaficheros = Array ($array);"

# Muestra el array de JavaScript por pantalla
echo $array > arraydeFicheros.js

