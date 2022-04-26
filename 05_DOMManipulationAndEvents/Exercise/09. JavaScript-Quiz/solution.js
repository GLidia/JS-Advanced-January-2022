function solve() {
  let sectionElements = document.getElementsByTagName("section");
  let firstAnswerElements = document.querySelectorAll("[class='quiz-answer low-value']");
  let secondAnswerElements = document.querySelectorAll("[class='quiz-answer high-value']");

  console.log(firstAnswerElements);

  let resultsElement = document.getElementById("results");
  let resultPElement = document.querySelector("#results li h1");

  let points = 0;
  let currentSectionElementIndex = 0;

  for(let el of firstAnswerElements){
    el.addEventListener("click", function(e) {

      if(currentSectionElementIndex == 0 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent == "onclick"){
        points++;
      } else if (currentSectionElementIndex == 1 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent== "JSON.stringify()"){
        points++;
      } else if (currentSectionElementIndex == 2 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent == "A programming API for HTML and XML documents"){
        points++;
      }

      console.log(points);
      sectionElements[currentSectionElementIndex].style.display = "none";
      currentSectionElementIndex++;
      
      if(currentSectionElementIndex == 3){
        if (points == 3){
          resultPElement.textContent = "You are recognized as top JavaScript fan!";
        } else {
          resultPElement.textContent = `You have ${points} right answers`;
        }  

        resultsElement.style.display = "block";
      } else {
        sectionElements[currentSectionElementIndex].style.display = "block";
      }


    });
  }

  for(let el of secondAnswerElements){
    el.addEventListener("click", function(e) {

      if(currentSectionElementIndex == 0 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent == "onclick"){
        points++;
      } else if (currentSectionElementIndex == 1 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent == "JSON.stringify()"){
        points++;
      } else if (currentSectionElementIndex == 2 && e.currentTarget.getElementsByClassName("answer-text")[0].textContent == "A programming API for HTML and XML documents"){
        points++;
      }

      console.log(points);
      sectionElements[currentSectionElementIndex].style.display = "none";
      currentSectionElementIndex++;

      if(currentSectionElementIndex == 3){
        if (points == 3){
          resultPElement.textContent = "You are recognized as top JavaScript fan!";
        } else {
          resultPElement.textContent = `You have ${points} right answers`;
        }  

        resultsElement.style.display = "block";
      }else {
        sectionElements[currentSectionElementIndex].style.display = "block";
      }

    });
  }


}
