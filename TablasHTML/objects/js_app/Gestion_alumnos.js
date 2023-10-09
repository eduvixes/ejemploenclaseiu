datosalumnos = Array(
    {
        "dniAlumno":"11111111A",
        "repetidor":true,
        "nombreAlumno":"javi"
    },
    {
        "dniAlumno":"222222222A",
        "repetidor":false,
        "nombreAlumno":"pepe"
    }
);

class Gestion_alumnos extends GestionEntidad{

    static createForm_EDIT(dniAlumno, repetidor, nombreAlumno){
        alert('datos en alumnos'+dniAlumno);
    }

}


