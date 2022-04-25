function validate() {
    let emailInputElement = document.getElementById("email");
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    emailInputElement.addEventListener("change", function(){
        let matches = emailInputElement.value.match(pattern);

        if(!matches){
            emailInputElement.classList.add("error");
        } else {
            emailInputElement.classList.remove("error");
        }

    });
}