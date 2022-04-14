function extract(elementId) {
    let text = document.getElementById(elementId).textContent;

    let words = [];

    while (text.includes("(") && text.includes(")")){
        let startIndex = text.indexOf("(");
        let endIndex = text.indexOf(")");
        let extracted = text.substring(startIndex, endIndex + 1);
        text = text.replace(extracted, " ");
        let word = extracted.substring(1, extracted.length - 1);
        words.push(word);
    }

    return words;
}