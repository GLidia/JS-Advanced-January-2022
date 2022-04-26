function lockedProfile() {
    let buttonElements = document.getElementsByTagName("button");
    let radioInputElements = document.querySelectorAll("input[type='radio'][value='lock']");
    let hiddenDivElements = document.querySelectorAll("div > div");

    for(let i = 0; i < buttonElements.length; i++){
        buttonElements[i].addEventListener("click", function(){
            if (radioInputElements[i].checked == false){
                if(buttonElements[i].textContent == "Show more"){
                    hiddenDivElements[i].style.display = "inline-block";
                    buttonElements[i].textContent = "Hide it";
                } else if (buttonElements[i].textContent == "Hide it"){
                    hiddenDivElements[i].style.display = "none";
                    buttonElements[i].textContent = "Show more";
                }
            }
        });
    }
}