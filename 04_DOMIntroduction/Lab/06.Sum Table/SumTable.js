function sumTable() {
    let list = document.getElementsByTagName("table")[0];
    let rows = list.getElementsByTagName("tr");

    let sum = 0;

    for(let i = 1; i < rows.length - 1; i++){
        let cols = rows[i].getElementsByTagName("td");
        let lastCol = cols[cols.length - 1];
        
        sum += Number(lastCol.textContent);
    }

    document.getElementById("sum").textContent = sum;
}