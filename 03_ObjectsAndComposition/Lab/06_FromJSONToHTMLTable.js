function solve(input){
    let objects = JSON.parse(input);

    console.log("<table>");

    let count = 0;

    for(let obj of objects){

        if (count == 0){
           let keys = Object.keys(obj);
            let toPrintHeader = "<tr>";
            for(let key of keys){
                toPrintHeader += `<th>${escapeHtml(key)}</th>`;
            }
            toPrintHeader += "</tr>";
            console.log(toPrintHeader);
        }


        let toPrintBody = "<tr>";
        let values = Object.values(obj);

        for(let value of values){
            toPrintBody += `<td>${escapeHtml(value)}</td>`;
        }

        toPrintBody += "</tr>";

        console.log(toPrintBody);

        count++;
    }
    console.log("</table>")


    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)