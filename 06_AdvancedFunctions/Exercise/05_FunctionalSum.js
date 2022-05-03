(function solve (){

        let total = 0;

        return function sum(n) {
            total += n;
            sum.toString = () => total;
            return sum;
        }

    }) ();
