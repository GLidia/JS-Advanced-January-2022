function solve(data, criterion){
    let dataAsObjects = JSON.parse(data);

    let [property, value] = criterion.split("-");

    let filteringPredicate = (obj) => obj[property] == value;

    let filteredEmployees = dataAsObjects.filter(filteringPredicate);

    for(let i = 0; i < filteredEmployees.length; i++){
        console.log(`${i}. ${filteredEmployees[i].first_name} ${filteredEmployees[i].last_name} - ${filteredEmployees[i].email}`);
    }
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)