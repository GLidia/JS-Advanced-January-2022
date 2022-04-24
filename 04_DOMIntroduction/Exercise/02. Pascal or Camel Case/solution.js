function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let toReturn = "";

  let words = text.split(" ").map(x => x.toLowerCase());
  if (namingConvention == "Camel Case"){
    toReturn += words[0];
    for(let i = 1; i < words.length; i++){
      toReturn += words[i][0].toUpperCase() + words[i].slice(1);
    }
    
  } else if (namingConvention == "Pascal Case"){
    for(let word of words){
      toReturn += (word[0].toUpperCase() + word.slice(1));
    }
  } else {
    toReturn = "Error!";
  }

  document.getElementById("result").innerHTML = toReturn;
}