function validate() {
    let companyCheckboxElement = document.getElementById("company");
    let companyInfoElement = document.getElementById("companyInfo");
    let submitButtonElement = document.getElementById("submit");
    let usernameInputElement = document.getElementById("username");
    let emailInputElement = document.getElementById("email");
    let passwordInputElement = document.getElementById("password");
    let passwordConfirmInputElement = document.getElementById("confirm-password");
    let companyNumberInputElement = document.getElementById("companyNumber");
    let validDivElement = document.getElementById("valid");

    companyCheckboxElement.addEventListener("change", showCompany);
    let isCompany = false;

    submitButtonElement.addEventListener("click", validateInput);

    function validateInput(event){
        event.preventDefault();

        let isValid = true;

        //username
        let username = usernameInputElement.value;
        let usernamePattern = /^[A-Za-z0-9]+$/g;
        let usernameMatches = username.match(usernamePattern);
        if (username.length < 3 || username.length > 20 || !usernameMatches){
            usernameInputElement.style.borderColor = "red";
            isValid = false;
        } else {
            //usernameInputElement.style.border = "none" (if I write this, then it does not light up in red if it's incorrect later)
            usernameInputElement.style.borderColor = "";
        }

        //email
        let email = emailInputElement.value;
        let emailPattern = /^.*@.*\..*$/g;
        let emailMatches = email.match(emailPattern);
        if (!emailMatches){
            emailInputElement.style.borderColor = "red";
            isValid = false;
        } else {
            //.style.border = "none" (if I write this, then it does not light up in red if it's incorrect later)
            emailInputElement.style.borderColor = "";
        }

        //password and password-confirm
        let password = passwordInputElement.value;
        let confirmPassword = passwordConfirmInputElement.value;
        let passwordPattern = /^\w+$/g;
        let passwordMatches = password.match(passwordPattern);

        if (password != confirmPassword || !passwordMatches || password.length < 5 || password.length > 15){
            passwordInputElement.style.borderColor = "red";
            passwordConfirmInputElement.style.borderColor = "red";
            isValid = false;
        } else {
            //.style.border = "none" (if I write this, then it does not light up in red if it's incorrect later)
            passwordInputElement.style.borderColor = "";
            passwordConfirmInputElement.style.borderColor = "";
        }

        //company
        if (isCompany){
            let number = companyNumberInputElement.value;

            if(number < 1000 || number > 9999){
                companyNumberInputElement.style.borderColor = "red";
                isValid = false;
            } else {
                //.style.border = "none" (if I write this, then it does not light up in red if it's incorrect later)
                companyNumberInputElement.style.borderColor = "";
            }
        }

        if (isValid){
            validDivElement.style.display = "block";
        } else {
            validDivElement.style.display = "none";
        }

    }

    function showCompany(){
        if (companyCheckboxElement.checked == true){
            //show
            companyInfoElement.style.display = "block";
            isCompany = true;
        } else if(companyCheckboxElement.checked == false){
            //hide
            companyInfoElement.style.display = "none";
            isCompany = false;
        }
    }
}
