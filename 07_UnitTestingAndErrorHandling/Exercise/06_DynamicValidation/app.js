function validate() {
    
    let emailInputElement = document.getElementById("email");

    emailInputElement.addEventListener("change", validate);

    function validate(){
        let email = emailInputElement.value;

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;
        let matches = email.match(pattern);
        
        if(!matches){
            emailInputElement.classList.add("error");
        } else {
            emailInputElement.classList.remove("error");
        }        
    }
}