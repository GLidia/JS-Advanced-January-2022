function solve(arr, first, second){
    let startIndex = arr.indexOf(first);
    let endIndex = arr.indexOf(second);

    let newArr = arr.splice(startIndex, endIndex - startIndex + 1);
    return newArr;
}
solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)
