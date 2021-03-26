// variable btn
var btnTranslate = document.querySelector('#btn-translate');

// variable txtInput
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")


// button to translate gives console output clicked
btnTranslate.addEventListener("click",function clickEventHandler(){
    outputDiv.innerText = "translated from whatever I knew: " + txtInput.value;
})

