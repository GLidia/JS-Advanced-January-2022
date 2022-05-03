function fib(){
    let n1 = 0;
    let n2 = 0;

    return () => {  

        if (n1 == 0 && n2 == 0){
            n2 = 1;
            return 1;
        }
        let currentNumber = n1 + n2;
        n1 = n2;
        n2 = currentNumber;
        return currentNumber;
    }  
}
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());