function solve() {
  let text = document.getElementById("input").value;
  let outputElement = document.getElementById("output");

  let sentences = text.split(".").map(x => x.trim()).filter(x => x.length > 0);
  let result = "";

  while (sentences.length > 0){
      
      let paragraph = "";
      if (sentences.length >= 3){
          paragraph += `<p>${sentences.shift()}. ${sentences.shift()}. ${sentences.shift()}.</p>`;
      } else if (sentences.length == 2){
          paragraph += `<p>${sentences.shift()}. ${sentences.shift()}.</p>`;
      } else if (sentences.length == 1){
          paragraph += `<p>${sentences.shift()}.</p>`;
      }

      result += paragraph;
  }

  outputElement.innerHTML = result;
    
}