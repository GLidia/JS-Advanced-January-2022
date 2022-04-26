function solve() {
    let allTdNumberElements = document.querySelectorAll("td [type='number']");
    let buttonElements = document.querySelectorAll("button");

    let tableElement = document.getElementsByTagName("table")[0];
    let solvePElement = document.querySelector("div#check p");
    
    buttonElements[0].addEventListener("click", check);
    buttonElements[1].addEventListener("click", clear);

    function check(){
        if(Number(allTdNumberElements[0].value) + Number(allTdNumberElements[1].value) + Number(allTdNumberElements[2].value) == 6 &&
        Number(allTdNumberElements[3].value) + Number(allTdNumberElements[4].value) + Number(allTdNumberElements[5].value) == 6 &&
        Number(allTdNumberElements[6].value) + Number(allTdNumberElements[7].value) + Number(allTdNumberElements[8].value) == 6 &&
        Number(allTdNumberElements[0].value) + Number(allTdNumberElements[3].value) + Number(allTdNumberElements[6].value) == 6 &&
        Number(allTdNumberElements[1].value) + Number(allTdNumberElements[4].value) + Number(allTdNumberElements[7].value) == 6 &&
        Number(allTdNumberElements[2].value) + Number(allTdNumberElements[5].value) + Number(allTdNumberElements[8].value) == 6){

            tableElement.style.border = "2px solid green";
            solvePElement.textContent = "You solve it! Congratulations!";
            solvePElement.style.color = "green";

        } else {
            
            tableElement.style.border = "2px solid red";
            solvePElement.textContent = "NOP! You are not done yet...";
            solvePElement.style.color = "red";

        }
    }

    function clear(){
        for(let el of allTdNumberElements){
            el.value = "";
        }
        solvePElement.textContent = "";
        tableElement.style.border = "none";
    }
}