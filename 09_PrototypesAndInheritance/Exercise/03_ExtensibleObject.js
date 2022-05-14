function extensibleObject(){
    let obj = {
        extend: function(template){
            for (let property of Object.keys(template)){
                if (typeof template[property] == "function"){
                    Object.getPrototypeOf(obj)[property] = template[property];
                } else {
                    obj[property] = template[property];
                }
            }
        }
    }

    return obj;
}

