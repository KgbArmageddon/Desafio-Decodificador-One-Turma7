const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const containerMensagem = document.querySelector(".mensagem-container");


function verificarMensagem() {
    if (mensagem.value.trim() === "") {
        containerMensagem.classList.add('mensagem-vazia');
    } else {
        containerMensagem.classList.remove('mensagem-vazia');
    }
}


function btnEncriptar() {
    if (!validarTexto(textArea.value)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    verificarMensagem();
}


function btnDesencriptar() {
    if (!validarTexto(textArea.value)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos.");
        return;
    }
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    verificarMensagem();
}


function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}


document.querySelector(".btn-copiar").addEventListener("click", function () {
    navigator.clipboard.writeText(mensagem.value);
    alert("Texto copiado para a área de transferência!");
});


function limparCampos() {
    textArea.value = "";
    mensagem.value = "";
    verificarMensagem();
}


window.onload = verificarMensagem;




