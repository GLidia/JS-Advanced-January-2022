function colorize() {
    let list = document.getElementsByTagName("table")[0];
    let rows = list.getElementsByTagName("tr");

    for(let i = 0; i < rows.length; i++){
        if (i % 2 == 1){
            rows[i].style.background = "teal";
        }
    }
}