class Textbox {
    constructor(selector, regex){       
        this._elements = document.querySelectorAll(selector);
        this._value = this._elements[0].value;
        this._invalidSymbols = regex;


    }

    get value(){
        return this._value;
    }

    set value(val){
        this._value = val;
        for(let i = 0; i < this._elements.length; i++){
            this._elements[i].value = val;
        }
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        let regex = new RegExp(this._invalidSymbols, 'g');
        let isInval = regex.test(this._value);
        console.log(this._value);

        if (isInval){
            return false;
        }
        return true;
    }
}