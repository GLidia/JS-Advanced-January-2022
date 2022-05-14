(function(){
    String.prototype.ensureStart = function(str){
        if(this.toString().startsWith(str)){
            return this.toString();
        } else {
            return str + this.toString();
        }
    }
    String.prototype.ensureEnd = function(str){
        if (this.toString().endsWith(str)){
            return this.toString();
        } else {
            return this.toString() + str;
        }
    }
    String.prototype.isEmpty = function(){
        if (this.toString() == ""){
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function(n){

        if (n < 4){
            return ".".repeat(n);
        }

        if(this.toString().length <= n){
            return this.toString();
        } else if (this.toString().length > n){
                let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(" ");
                if (lastIndex != -1){
                return this.toString().substring(0, lastIndex) + "...";
            } else {
                return this.toString().substring(0, n-3) + "...";
            }
        }
    }
    String.format = function(string, ...params){
        for(let i = 0; i < params.length; i++){
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})()

