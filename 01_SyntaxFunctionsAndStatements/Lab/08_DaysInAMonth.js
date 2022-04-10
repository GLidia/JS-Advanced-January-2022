function solve(month, year){

    let dateOne;
    let dateTwo;
    let diffInMilliseconds;


    if (month >= 1 && month <= 11){
        month -= 1;

        dateOne = new Date(year, month);
        dateTwo = new Date(year, month + 1);
    
        diffInMilliseconds = dateTwo - dateOne;

    } else if (month == 12){

        month -= 1;
        
        dateOne = new Date(year, month);
        dateTwo = new Date(year + 1, 0);
    
        diffInMilliseconds = dateTwo - dateOne;
    }

    let diffInDays = diffInMilliseconds / 86400000;
    
    console.log(diffInDays);
}
solve(1, 2012)