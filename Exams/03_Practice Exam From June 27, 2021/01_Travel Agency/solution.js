window.addEventListener('load', solution);

function solution() {
    let submitButton = document.getElementById("submitBTN");
    let fullNameInputElement = document.getElementById("fname");
    let emailInputElement = document.getElementById("email");
    let phoneNumberInputElement = document.getElementById("phone");
    let addressInputElement = document.getElementById("address");
    let postalCodeInputElement = document.getElementById("code");
    let ulListPreviewElement = document.getElementById("infoPreview");
    let editButton = document.getElementById("editBTN");
    let continueButton = document.getElementById("continueBTN");

    submitButton.addEventListener("click", submitInfo);

    function submitInfo(e){

        let name = fullNameInputElement.value;
        let email = emailInputElement.value;
        let phone = phoneNumberInputElement.value;
        let address = addressInputElement.value;
        let code = postalCodeInputElement.value;

        //validate input
        if (name.trim().length != 0 && email.trim().length != 0){

            //clearing input fields
            fullNameInputElement.value = "";
            emailInputElement.value = "";
            phoneNumberInputElement.value = "";
            addressInputElement.value = "";
            postalCodeInputElement.value = "";

            //disable button
            let submitBtn = e.currentTarget;
            submitBtn.disabled = true;

            //creating new elements
            let newNameLi = document.createElement("li");
            newNameLi.textContent = `Full Name: ${name}`;
            let newEmailLi = document.createElement("li");
            newEmailLi.textContent = `Email: ${email}`;
            let newPhoneLi = document.createElement("li");
            newPhoneLi.textContent = `Phone Number: ${phone}`;
            let newAddressLi = document.createElement("li");
            newAddressLi.textContent = `Address: ${address}`;
            let newPostalCodeLi = document.createElement("li");
            newPostalCodeLi.textContent = `Postal Code: ${code}`;

            //appending new elements
            ulListPreviewElement.appendChild(newNameLi);
            ulListPreviewElement.appendChild(newEmailLi);
            ulListPreviewElement.appendChild(newPhoneLi);
            ulListPreviewElement.appendChild(newAddressLi);
            ulListPreviewElement.appendChild(newPostalCodeLi);

            //enabling both buttons
            editButton.disabled = false;
            continueButton.disabled = false;

            editButton.addEventListener("click", returnInfo);
            continueButton.addEventListener("click", continueReservation);

            function continueReservation(){
                let blockDiv = document.getElementById("block");

                while(blockDiv.firstChild){
                    blockDiv.firstChild.remove();
                }

                let newH3Element = document.createElement("h3");
                newH3Element.textContent = "Thank you for your reservation!";

                blockDiv.appendChild(newH3Element);
            }

            function returnInfo(){
                fullNameInputElement.value = name;
                emailInputElement.value = email;
                phoneNumberInputElement.value = phone;
                addressInputElement.value = address;
                postalCodeInputElement.value = code;

                while(ulListPreviewElement.firstChild){
                    ulListPreviewElement.firstChild.remove();
                }

                editButton.disabled = true;
                continueButton.disabled = true;

                submitBtn.disabled = false;
            }
        }
    }
}
