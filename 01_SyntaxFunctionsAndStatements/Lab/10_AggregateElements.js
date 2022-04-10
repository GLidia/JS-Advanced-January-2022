function solve(input){

    console.log(Sum(input));
    console.log(SumReverse(input));
    console.log(Concat(input));

    function Sum(arr){
        let sum = 0;
        for(let e of arr){
            sum += Number(e);
        }
        return sum;
    }

    function SumReverse(arr){
        let sum = 0;
        for(let e of arr){
            sum += Number(1 / e);
        }
        return sum;
    }

    function Concat(arr){
        let result = "";
        for(let e of arr){
            result += e.toString();
        }
        return result;
    }
}
solve([1, 2, 3])