const inputTexto = document.querySelector(".text-area");
const outputMensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

function cifrarTexto() {
    const textoCifrado = cifrar(inputTexto.value);
    outputMensaje.value = textoCifrado;
    inputTexto.value = "";
    outputMensaje.style.backgroundImage = "none";
}

function descifrarTexto() {
    const textoDescifrado = descifrar(inputTexto.value);
    outputMensaje.value = textoDescifrado;
    inputTexto.value = "";
}

function cifrar(textoOriginal) {
    const clave = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    textoOriginal = textoOriginal.toLowerCase();
    let textoFinal = null;
    for (let i = 0; i < clave.length; i++) {
        if (textoOriginal.includes(clave[i][0])) {
            textoFinal = textoOriginal.split(clave[i][0]).join(clave[i][1]);
        }
    }
    return textoFinal;
}

function descifrar(textoCifrado) {
    const clave = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"],
    ];
    textoCifrado = textoCifrado.toLowerCase();

    for (let i = 0; i < clave.length; i++) {
        if (textoCifrado.includes(clave[i][0])) {
            textoCifrado = textoCifrado.split(clave[i][0]).join(clave[i][1]);
        }
    }
    return textoCifrado;
}

function copiar(){
    outputMensaje.select();
    navigator.clipboard.writeText(outputMensaje.value)
    outputMensaje.value = "";
    alert("Texto copiado")
}