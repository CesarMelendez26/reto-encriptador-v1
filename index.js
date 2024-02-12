function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./Imagenes/encriptado.png";
    } else {
        muñeco.src = "./Imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar algún texto", "warning");
    }
        
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent ="";
            muñeco.src = "./Imagenes/desencriptado.jpg";
        } else {
            muñeco.src ="./Imagenes/muñeco.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!", "Debes ingresar algún texto", "warning");
        }
}

function copyToClipboard() {
    const outputText = document.getElementById('texto');
    outputText.select();

    try {
        const successful = document.execCommand('copy');
        const message = successful ? 'Texto copiado al portapapeles' : 'Error al copiar el texto';
        swal(message);
    } catch (err) {
        console.error('Error al intentar copiar el texto', err);
    }

    // Deselecciona el texto después de copiarlo
    document.getSelection().removeAllRanges();
}