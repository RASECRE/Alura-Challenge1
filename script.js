const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".texto-mensaje");
const Imagenmensaje = document.querySelector(".mensaje");
const tCopiar = document.getElementById("t-mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.innerHTML = textoEncriptado
    textArea.value = "";
    Imagenmensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let Codigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < Codigo.length; i++){
        if(stringEncriptada.includes(Codigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(Codigo[i][0], Codigo[i][1])

        }

    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.innerHTML = textoDesencriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let Codigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < Codigo.length; i++){
        if(stringDesencriptada.includes(Codigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(Codigo[i][1],Codigo[i][0])

        }

    }
    return stringDesencriptada;
}

function btnCopiar(){
    navigator.clipboard.writeText(tCopiar.textContent);
}