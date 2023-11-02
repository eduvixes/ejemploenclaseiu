class validacionesatomicas{

    constructor(){

    }

    static validar_dni(id,valor=null){
        let dni = document.getElementById(id);
        let condicion = true;
        if (condicion) {
            return true;
        }
        else{
            return false;
        }
    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }
    
}