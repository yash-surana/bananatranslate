// variable btn
var btnTranslate = document.querySelector('#btn-translate');

// variable txtInput
var txtInput = document.querySelector("#txt-input");

// button to translate gives console output clicked
btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("clicked")
    console.log("input: ",txtInput.value);
})

