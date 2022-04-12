function solve(){

    let list = { numbers: [], size: 0};

    list.add = (element) => {
                list.numbers.push(Number(element));
                list.numbers.sort((a, b) => a - b);
                list.size++;
            };
    
    list.remove = (index) => {
               if (index >= 0 && index < list.numbers.length){
                   list.numbers.splice(index, 1);
                   list.size--;
                }
            };

    list.get = (index) => {
                if (index >= 0 && index < list.numbers.length){
                  return list.numbers[index];
                }
            }
    
    return list;
}
solve()