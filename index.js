window.onload = function() {
    var btnEncriptar = document.getElementById("btn-encriptar");
    var btnDesencriptar = document.getElementById("btn-desencriptar");
    var btnCopiar = document.getElementById("btn-copiar");

    btnEncriptar.addEventListener('click', encriptar);
    btnDesencriptar.addEventListener('click', desencriptar);
    // btnCopiar.addEventListener('click', copiar);
    btnCopiar.addEventListener('click', copiarAlPortapapeles);
}

function validarLetras(cadena) {
    const regex = /^[a-z\s]+$/; // Expresión regular para validar letras y espacios en blanco
    
    return regex.test(cadena); // Devuelve true si la cadena solo contiene letras y espacios en blanco, de lo contrario devuelve false
}

function encriptar() {
    
    //La funcion "toLowerCase()" nos combierte todo el texto ingresa en el text area en minusculas

    var textoEntrada = document.getElementById("texto").value//.toLowerCase();

    //validamos que el campo de texto no este vacio
    
    if(textoEntrada != 0){    
        

        // validamos que solo sean letras minusculas y sin  caracteres especiales
        if (!validarLetras(textoEntrada)) {

            //mostramos la imagen donde se muestra la respuesta
            document.getElementById("munheco").style.display = "block";

            //mostramos los textos indicativos
            document.getElementById("tituloMensaje").style.display = "block";
            document.getElementById("parrafo").style.display = "block";

            //ocultamos el text area de la respuesta
            document.getElementById("mensajeRespuesta").style.display = "none";

            //ocultamos el boton copiar
            document.getElementById("btn-copiar").style.display = "none";

            swal("Ooops", "El texto contiene caracteres no validos, use solo  letras minusculas y sin acentos", "error")
            document.getElementById("texto").value = "";
            return;
        }
        //i es para que tome letra minusculas y mayusculas 
        //m es para que tome en cuenta multiples lineas
        //g es para que tome en cuenta toda la linea o la oracion

        var textoEncriptado = textoEntrada.
                                        replace(/e/img, "enter")
                                        .replace(/i/img, "imes")
                                        .replace(/a/img, "ai")
                                        .replace(/o/img, "ober")
                                        .replace(/u/img, "ufat")

        // insertamos el texto cambiado en el HTML "<p>"                                
        var respuesta = document.getElementById("mensajeRespuesta").innerHTML = textoEncriptado;
        console.log(respuesta);

        //mostarmos el boton copiar
        document.getElementById("btn-copiar").style.display = "show";
        document.getElementById("btn-copiar").style.display = "inherit";

        //mostramos el text area con la respuesta
        document.getElementById("mensajeRespuesta").style.display = "show";
        document.getElementById("mensajeRespuesta").style.display = "inherit";

        //ocultamos la imagen donde se muestra la respusta
        document.getElementById("munheco").style.display = "none";

        //ocultamos los textos indicativos
        document.getElementById("tituloMensaje").style.display = "none";
        document.getElementById("parrafo").style.display = "none";

        
    }else {

        //mostramos la imagen donde se muestra la respuesta
        document.getElementById("munheco").style.display = "block";

        //mostramos los textos indicativos
        document.getElementById("tituloMensaje").style.display = "block";
        document.getElementById("parrafo").style.display = "block";

        //ocultamos el text area de la respuesta
        document.getElementById("mensajeRespuesta").style.display = "none";

        //ocultamos el boton copiar
        document.getElementById("btn-copiar").style.display = "none";

        swal("Ooops", "Debes ingresar un texto", "error");
    }

    document.getElementById("texto").value = "";
}

function desencriptar() {
    
    //La funcion "toLowerCase()" nos combierte todo el texto ingresa en el text area en minusculas

    var textoEntrada = document.getElementById("texto").value//.toLowerCase();


    if (textoEntrada != 0){

        if (!validarLetras(textoEntrada)) {

            //mostramos la imagen donde se muestra la respuesta
            document.getElementById("munheco").style.display = "block";

            //mostramos los textos indicativos
            document.getElementById("tituloMensaje").style.display = "block";
            document.getElementById("parrafo").style.display = "block";

            //ocultamos el text area de la respuesta
            document.getElementById("mensajeRespuesta").style.display = "none";

            //ocultamos el boton copiar
            document.getElementById("btn-copiar").style.display = "none";

            swal("Ooops", "El texto contiene caracteres no validos, use solo  letras minusculas y sin acentos", "error")
            document.getElementById("texto").value = "";
            return;
        }

        //i es para que tome letra minusculas y mayusculas 
        //m es para que tome en cuenta multiples lineas
        //g es para que tome en cuenta toda la linea o la oracion

        var textoEncriptado = textoEntrada.
                                        replace(/enter/img, "e")
                                        .replace(/imes/img, "i")
                                        .replace(/ai/img, "a")
                                        .replace(/ober/img, "o")
                                        .replace(/ufat/img, "u")

        // insertamos el texto cambiado en el HTML "textarea"                                
        document.getElementById("mensajeRespuesta").innerHTML = textoEncriptado;
        console.log(textoEncriptado)

        //mostarmos el boton copiar
        document.getElementById("btn-copiar").style.display = "show";
        document.getElementById("btn-copiar").style.display = "inherit";

        //mostramos el text area con la respuesta
        document.getElementById("mensajeRespuesta").style.display = "flex";
        document.getElementById("mensajeRespuesta").style.display = "inherit";

        //ocultamos la imagen donde se muestra la respusta
        document.getElementById("munheco").style.display = "none"

        //ocultamos los textos indicativos
        document.getElementById("tituloMensaje").style.display = "none";
        document.getElementById("parrafo").style.display = "none"

        validarLetras();

    }else {
        //mostramos la imagen dond se muestra la respuesta
        document.getElementById("munheco").style.display = "block";

        //mostramos los textos indicativos
        document.getElementById("tituloMensaje").style.display = "block";
        document.getElementById("parrafo").style.display = "block";

        //ocultamos el tetxt area de la respuesta
        document.getElementById("mensajeRespuesta").style.display = "none";

        //ocultamos el boton copiar
        document.getElementById("btn-copiar").style.display = "none";

        swal("Ooops", "Debes ingresar un texto", "error");
    }

    document.getElementById("texto").value = "";
}


// function copiar() {
//     var contenido = document.getElementById("mensajeRespuesta");
//     contenido.select();
//     document.execCommand("copy");

// }


function copiarAlPortapapeles() {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
    
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById("mensajeRespuesta").innerHTML);
    
    // Añade el campo a la página
    document.body.appendChild(aux);
    
    // Selecciona el contenido del campo
    aux.select();
    
    // Copia el texto seleccionado
    document.execCommand("copy");
    
    // Elimina el campo de la página
    document.body.removeChild(aux);
}





