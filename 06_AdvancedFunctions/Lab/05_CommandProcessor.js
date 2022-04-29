function solve(){

    let text = "";

    return {
        append: (textToAppend) => {
            return text += textToAppend;
        },

        removeStart: (n) => {
            return text = text.slice(n);
        },

        removeEnd: (n) => {
            return text = text.slice(0, text.length - n);
        },

        print: () => {
            console.log(text);
        }
    }
}

let firstZero = solve();

firstZero.append('123');
firstZero.append('45');
firstZero.print();
firstZero.removeStart(2);
firstZero.print();
firstZero.removeEnd(1);
firstZero.print();
firstZero.print();
