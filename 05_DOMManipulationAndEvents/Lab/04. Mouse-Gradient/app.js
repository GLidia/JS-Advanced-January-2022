function attachGradientEvents() {
    let boxElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");

    boxElement.addEventListener("mousemove", function displayGradient(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);  
        resultElement.textContent = power + "%";
    });

    boxElement.addEventListener("mouseout", function(){
        resultElement.textContent = "";
    })
}