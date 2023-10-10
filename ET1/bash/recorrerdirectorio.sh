#
# SCRIPT BASH : comprobardirectorio.sh
# FECHA CREACIÓN : 3/10/2023
# AUTOR : jrodeiro
# PROPOSITO : 
# VERIFICACIÓN DE LOS NOMBRES DE LOS DIRECTORIOS Y FICHEROS DE LA ENTREGA ET1 DE IU 2023
#

# Define la función con tres parámetros: string, prefijo y sufijo
function eliminar_prefijo_sufijo {
    # Asigna los parámetros a variables locales
    local string=$1
    local prefijo=$2
    local sufijo=$3
    # Elimina el prefijo del string si existe
    string=${string#$prefijo}
    # Elimina el sufijo del string si existe
    string=${string%$sufijo}
    # Devuelve el string modificado
    echo $string
}

# Define la función con dos parámetros: string y directorio
function comprobar__existe_fichero {
    # Asigna los parámetros a variables locales
    local string=$1
    local directorio=$2

    # Comprueba si el directorio existe
    if [ -d "$directorio/" ]; then
        
        # Comprueba si el fichero existe en el directorio
        if [ -f "$directorio/$string" ]; then
            # Muestra un mensaje de que el fichero existe
            echo "El fichero $string existe en el directorio $directorio"
            true
        else
            # Muestra un mensaje de que el fichero no existe
            echo "El fichero $string NO EXISTE en el directorio $directorio"
            false
        fi
    else
        # Muestra un mensaje de error si el directorio no existe
        echo "El directorio $directorio NO EXISTE"
        false
    fi
}

# Define la función con dos parámetros: string y fichero
function buscar_variable_en_fichero {
    # Asigna los parámetros a variables locales
    local string=$1
    local fichero=$2
    # Comprueba si el fichero existe
    if [ -f "$fichero" ]; then
        # Busca el string en el fichero usando grep
        grep -q "$string" "$fichero"
        # Comprueba el código de salida de grep
        if [ $? -eq 0 ]; then
            # Muestra un mensaje de que el string se ha encontrado
            echo "La variable $string se ha encontrado en el fichero $fichero"
            true
        else
            # Muestra un mensaje de que el string no se ha encontrado
            echo "La variable $string NO SE HA ENCONTRADO en el fichero $fichero"
            false
    fi
    else
        # Muestra un mensaje de error si el fichero no existe
        echo "El fichero $fichero NO EXISTE"
        false
    fi
}

function comprobar_directorio_alumno {

    # Pide el nombre de un directorio
    read -p "Introduce el nombre tu directorio (sin / ni .) : " subdir
       
    comprobar_ficheros_variables "$subdir"
  
}

function comprobar_ficheros_variables {
    
    local directorio=$1
    # Comprueba si es un directorio
        if [ -d "$subdir" ]; then
            echo "--------------------------------------------------------------------------------"
            # Muestra el nombre del subdirectorio
            dirname=${subdir##*/}
            echo "Directorio Examinado: $subdir"
            echo "Directorio Alumno: $dirname"
            
            # Elimina el prefijo 'ET1_' del nombre del fichero
            studentname=${dirname#ET1_}
            # Muestra el nombre del alumno
            echo "Nombre del Alumno: $studentname"

            # Añadir nombre de directorio, fichero y usuario

            echo "Búsqueda de ficheros :"

            comprobar__existe_fichero "ET1_""$studentname"".js" "$subdir" ]
            comprobar__existe_fichero "ET1_""$studentname""_tests.js" "$subdir"
            comprobar__existe_fichero "ET1_""$studentname""_pruebas.js" "$subdir" ]
            
            echo "Búsqueda de variables :"

            buscar_variable_en_fichero "datosgenerales_""$studentname" "$subdir/""ET1_""$studentname"".js"
            buscar_variable_en_fichero "def_test_""$studentname" "$subdir/""ET1_""$studentname""_tests.js"
            buscar_variable_en_fichero "pruebasunitarias_""$studentname" "$subdir/""ET1_""$studentname""_pruebas.js"

            info_estudiantes="'$studentname',"
            echo $info_estudiantes >> "ficheroalumnos.js"

            echo "--------------------------------------------------------------------------------"

        else
            if [ -f "$subdir" ]; then
                echo ""
            else
                # Muestra un mensaje de error si el directorio no existe
                echo "El directorio $subdir no existe"
            fi
        fi
}

function comprobar_todos_los_alumnos {

     # Pide el nombre de un directorio
    read -p "Introduce el nombre del directorio donde estan todos los directorios de los alumnos: (sin / ni .) : " dir

    # Comprueba si el directorio existe
    if [ -d "$dir/" ]; then

    # Crea fichero de información de alumnos
    empiezafichero="<script type='text/javascript'>"
    echo $empiezafichero >> "ficheroalumnos.js"
    variablefichero="info_alumnos = Array("
    echo $variablefichero >> "ficheroalumnos.js"
    

    # Recorre los subdirectorios del directorio
        for subdir in "$dir"/*; do
            # Comprueba si el subdirectorio es un directorio
            comprobar_ficheros_variables "$dir/$subdir"
        done
    else
        # Muestra un mensaje de error si el directorio no existe
        echo "El directorio $dir pasado por parametro no existe"
    fi

    # termina el fichero
    finvariable=");"
    echo $finvariable >> "ficheroalumnos.js"
    finfichero="</script>"
    echo $finfichero >> "ficheroalumnos.js" 
}


clear
# Pide una opcion al usuario y lo almacena en opcion
echo "Esto es un script bash."
echo " Usar './recorrerdirectorio.sh' "
echo "El script comprueba que el directorio existe. Obtiene el nombre del alumno,"
echo "comprueba que existan los ficheros solicitados en el interior con el nombre"
echo "del alumno y que exista dentro de ellos la declaración de la variable correspondiente"
echo "Seleccionar 1 y escribir el nombre del directorio a entregar para la ET1,"
echo "que debe estar en el mismo directorio que el script."
echo ""
echo "NO GARANTIZA EL CORRECTO CONTENIDO NI FUNCIONAMIENTO DE LA INFORMACIÓN DEFINIDA"
echo ""
read -p "Un directorio de alumno (1) o todos los directorios de alumnos (2): " opcion

if [ "$opcion" = "1" ]; then
    comprobar_directorio_alumno
else
    if [ "$opcion" = "2" ]; then
        comprobar_todos_los_alumnos
    else
        echo "opcion invalida"
    fi
fi

# comprobar_directorio_alumno "$dir"
# comprobar_todos_los_alumnos "$dir"
