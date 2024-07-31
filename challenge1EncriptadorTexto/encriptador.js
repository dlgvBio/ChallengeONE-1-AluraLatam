function encriptar() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const encriptado = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output").textContent = encriptado;
}

function desencriptar() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const desencriptado = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output").textContent = desencriptado;
}