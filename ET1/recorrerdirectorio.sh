# Obtiene el nombre del directorio pasado como argumento
dir=$1

# Comprueba si el directorio existe
if [ -d "$dir" ]; then
# Recorre los subdirectorios del directorio
for subdir in "$dir"/*; do
# Comprueba si el subdirectorio es un directorio
if [ -d "$subdir" ]; then
# Muestra el nombre del subdirectorio
echo "Subdirectorio: $subdir"
# Recorre los ficheros del subdirectorio
for file in "$subdir"/*; do
# Comprueba si el fichero es un fichero regular
if [ -f "$file" ]; then
# Muestra el nombre del fichero
echo "Fichero: $file"
fi
done
fi
done
else
# Muestra un mensaje de error si el directorio no existe
echo "El directorio $dir no existe"
fi