function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      let restaurants = {};

      while(input.length > 0){
         let [restaurant, workersInfo] = input.shift().split(' - ');

         let individualWorkerInfo = workersInfo.split(', ');
         let workers = [];

         for(let wor of individualWorkerInfo){
            let [workerName, salaryString] = wor.split(" ");
            let worker = {name: workerName, salary: Number(salaryString)};
            workers.push(worker);
         }

         let restaurantNames = Object.keys(restaurants);
         if(!restaurantNames.includes(restaurant)){
            restaurants[restaurant] = {};
            restaurants[restaurant]["workers"] = workers;
         } else {
            currentWorkers = restaurants[restaurant]["workers"];
            restaurants[restaurant]["workers"] = currentWorkers.concat(workers);
         }
        
      }

      let restaurantNames = Object.keys(restaurants);

      for(let rest of restaurantNames){
         let workers = restaurants[rest]["workers"];

         let totalSalary = 0;
         let highestSalary = 0;

         for(let worker of workers){
            totalSalary += worker.salary;
            if (worker.salary > highestSalary){
               highestSalary = worker.salary;
            }
         }
         let averageSalary = totalSalary / workers.length;
         restaurants[rest].averageSalary = averageSalary;
         restaurants[rest].highestSalary = highestSalary;    
         
         workers.sort((a, b) => b.salary - a.salary);
         restaurants[rest].workers = workers;
      }

      let restaurantEntries = Object.entries(restaurants);

      restaurantEntries.sort((a, b) => (b[1]).averageSalary - (a[1]).averageSalary);

      let bestRestaurantElement = document.querySelector("#bestRestaurant p");
      let workersElement = document.querySelector("#workers p");

      bestRestaurantElement.textContent = `Name: ${restaurantEntries[0][0]} Average Salary: ${(Number(restaurantEntries[0][1].averageSalary)).toFixed(2)} Best Salary: ${(Number(restaurantEntries[0][1].highestSalary)).toFixed(2)}`;
      let toPrint = "";
      for(let worker of restaurantEntries[0][1].workers){
         toPrint += `Name: ${worker.name} With Salary: ${worker.salary} `; 
      }
      workersElement.textContent = toPrint;
      
   }
}