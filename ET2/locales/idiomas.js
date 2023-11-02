
function setLang(lang=''){

    let traduccion=textos_ES;
   
   //**Se recorre el array de traducciones buscando coincidencias una por una*/
   for(var clave in traduccion) {

 		var elementos = document.getElementsByClassName(clave);
        var etiquetas =document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }            
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                 if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            } 
        } 

        for (var i = 0; i < options.length; i++) { 
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
	}
}
