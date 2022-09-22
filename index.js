let sliderElemnet = document.querySelector('#slider');
let symbolsCheck = document.getElementsByName('symbols')

let passwordSize = document.querySelector('#valor')
let password = document.querySelector('#password')
let passwordCont = document.querySelector('#password-cont')

let symbolsElemnets = "!@#$%&|?";
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let charset = alphabet
let newPassword = "";

passwordSize.innerHTML = sliderElemnet.value;
sliderElemnet.oninput = function(){
    passwordSize.innerHTML = this.value;
}

function soma(){

    for(let i = 0; i < symbolsCheck.length; i++){
        if(symbolsCheck[i].checked){
            if(symbolsCheck[i].value == 'simbolos'){
                charset = alphabet.concat(symbolsElemnets)
            }
        }else{
            charset=alphabet
        }
    }
}

function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElemnet.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    passwordCont.classList.remove('hide')
    password.innerHTML = pass

}

function copy(){
    alert('Senha copiada')
    navigator.clipboard.writeText(newPassword)
}