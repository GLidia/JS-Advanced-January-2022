function focused() {
    let inputElements = document.querySelectorAll("input");

    for(let el of inputElements){
        el.addEventListener('focus', function(){
            el.parentNode.classList.add("focused");            
        });
        
        el.addEventListener("blur", function (){
            el.parentNode.classList.remove("focused");
        });
    }
}