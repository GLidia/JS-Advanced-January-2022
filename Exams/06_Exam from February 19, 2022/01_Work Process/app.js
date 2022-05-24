function solve() {
    let hireButton = document.getElementById("add-worker");
    let fNameElement = document.getElementById("fname");
    let lNameElement = document.getElementById("lname");
    let emailElement = document.getElementById("email");
    let birthElement = document.getElementById("birth");
    let positionElement = document.getElementById("position");
    let salaryElement = document.getElementById("salary");

    let tbodyElement = document.getElementById("tbody");
    let totalSalaryElement = document.getElementById("sum");

    hireButton.addEventListener("click", hireWorker);

    function hireWorker(e){
        e.preventDefault();

        let fName = fNameElement.value;
        let lName = lNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if (fName.trim().length != 0 && lName.trim().length != 0 && email.trim().length != 0 && birth.trim().length != 0 && position.trim().length != 0 && salary.trim().length != 0){
            //creating and appending elements
            let newTRElement = document.createElement("tr");
            let newTdFNameElement = document.createElement("td");
            newTdFNameElement.textContent = fName;
            let newTdLNameElement = document.createElement("td");
            newTdLNameElement.textContent = lName;
            let newTdEmailElement = document.createElement("td");
            newTdEmailElement.textContent = email;
            let newTdBirthElement = document.createElement("td");
            newTdBirthElement.textContent = birth;
            let newTdPositionElement = document.createElement("td");
            newTdPositionElement.textContent = position;
            let newTdSalaryElement = document.createElement("td");
            newTdSalaryElement.textContent = salary;
            let newTdButtonsElement = document.createElement("td");
            let newFiredButton = document.createElement("button");
            newFiredButton.classList.add("fired");
            newFiredButton.textContent = "Fired";
            newFiredButton.addEventListener("click", fireWorker);
            let newEditButton = document.createElement("button");
            newEditButton.classList.add("edit");
            newEditButton.textContent = "Edit";
            newEditButton.addEventListener("click", editInfo);
            newTdButtonsElement.appendChild(newFiredButton);
            newTdButtonsElement.appendChild(newEditButton);

            newTRElement.appendChild(newTdFNameElement);
            newTRElement.appendChild(newTdLNameElement);
            newTRElement.appendChild(newTdEmailElement);
            newTRElement.appendChild(newTdBirthElement);
            newTRElement.appendChild(newTdPositionElement);
            newTRElement.appendChild(newTdSalaryElement);
            newTRElement.appendChild(newTdButtonsElement);

            tbodyElement.appendChild(newTRElement);

            //add salary to totalSalary
            let currentTotalSalary = Number(totalSalaryElement.textContent);
            let newTotalSalary = currentTotalSalary + Number(salary);
            totalSalaryElement.textContent = newTotalSalary.toFixed(2);


            function editInfo(e){
                e.preventDefault();

                fNameElement.value = fName;
                lNameElement.value = lName;
                emailElement.value = email;
                birthElement.value = birth;
                positionElement.value = position;
                salaryElement.value = salary;

                //remove salary from total salary and delete whole row
                let currentTotalSalary = Number(totalSalaryElement.textContent);
                let newTotalSalary = currentTotalSalary - Number(salary);
                totalSalaryElement.textContent = newTotalSalary.toFixed(2);

                let btn = e.currentTarget;
                btn.parentNode.parentNode.remove();
            }

            function fireWorker(event){
                event.preventDefault();
                let btn = event.currentTarget;

                let currentTotalSalary = Number(totalSalaryElement.textContent);
                let newTotalSalary = currentTotalSalary - Number(salary);
                totalSalaryElement.textContent = newTotalSalary.toFixed(2);

                btn.parentNode.parentNode.remove();

            }

            //clear input
            fNameElement.value = "";
            lNameElement.value = "";
            emailElement.value = "";
            birthElement.value = "";
            positionElement.value = "";
            salaryElement.value = "";
        }
    }
}
solve()