function solve(input){
    let mainDSum = 0;
    let secondaryDSum = 0;

    for(let i = 0; i < input.length; i++){
        let arr = input[i];
        mainDSum += arr[i];
        secondaryDSum += arr[arr.length - 1 - i];
    }

    console.log(mainDSum + " " + secondaryDSum);
}
solve([[20, 40],
    [10, 60]]
   )