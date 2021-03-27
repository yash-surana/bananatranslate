// variable btn
var btnTranslate = document.querySelector('#btn-translate');

// variable txtInput
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something is wrong with server. Please try again after sometime.")
}
// button to translate gives console output clicked
btnTranslate.addEventListener("click",function clickEventHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json => {
        // var translatedText = json.contents.translated;
        // outputDiv.innerText = translatedText 
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler)
   

})

