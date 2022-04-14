function editElement(HTMLReference, match, replacer) {
    let content = HTMLReference.textContent;

    while (content.includes(match)){
        content = content.replace(match, replacer);
    }

    HTMLReference.textContent = content;
}