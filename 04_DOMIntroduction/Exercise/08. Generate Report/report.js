function generateReport() {
    let trElements = document.getElementsByTagName("tr");
    let tdFirstRowElements = document.getElementsByTagName("input");
    let checkedIndexes = [];
    let objects = [];

    for(let i = 0; i < tdFirstRowElements.length; i++){

        if (tdFirstRowElements[i].checked){
            checkedIndexes.push(i);
        }
    }

    for(let i = 1; i < trElements.length; i++){
        let tdCurrentRow = trElements[i].children;
        let obj = {};
        for(let j = 0; j < tdCurrentRow.length; j++){
            
            if (checkedIndexes.includes(j)){               
                obj[tdFirstRowElements[j].name] = tdCurrentRow[j].textContent;
            }
            
        }
        objects.push(obj);
    }

    let output = JSON.stringify(objects);
    document.getElementById("output").value = output;
    
}