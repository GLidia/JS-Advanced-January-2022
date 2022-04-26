function encodeAndDecodeMessages() {
    let buttonElements = document.getElementsByTagName("button");
    let textareaElements = document.getElementsByTagName("textarea");

    buttonElements[0].addEventListener("click", encode);
    buttonElements[1].addEventListener("click", decode);

    function encode(){
        let text = textareaElements[0].value;
        let result = "";
        for(let letter of text){
            result += String.fromCharCode(letter.charCodeAt(0) + 1);
        }

        textareaElements[0].value = "";
        textareaElements[1].value = result;
    }

    function decode(){
        let encodedMessage = textareaElements[1].value;
        let decodedMessage = "";

        for(let letter of encodedMessage){
            decodedMessage += String.fromCharCode(letter.charCodeAt(0) - 1);
        }

        textareaElements[1].value = decodedMessage;

    }
}