class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if (!name || name.trim().length == 0 || !salary || salary < 0 || !position || position.trim().length == 0 || !department || department.trim().length == 0){
            throw new Error("Invalid input!");
        }

        if (!Object.keys(this.departments).includes(department)){
            this.departments[department] = [];
        }

        this.departments[department].push({name: name, salary: salary, position: position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let highestAverageSalary = 0;
        let bestDeptName;

        for(let dept of Object.keys(this.departments)){
            let totalSalary = 0;

            for(let empl of this.departments[dept]){
                totalSalary += empl.salary;
            }

            let averageSalary = totalSalary / this.departments[dept].length;

            if (averageSalary > highestAverageSalary){
                highestAverageSalary = averageSalary;
                bestDeptName = dept;
            }
        }

        let toReturn = `Best Department is: ${bestDeptName}\nAverage salary: ${highestAverageSalary.toFixed(2)}`;
        let employeesToReturn = this.departments[bestDeptName].sort((a, b) => {
            if (a.salary > b.salary){
                return -1;
            } else if (a.salary < b.salary){
                return 0
            } else if (a.salary == b.salary){
                return (a.name).localeCompare(b.name);
            }
        })

        for(let e of employeesToReturn){
            toReturn += `\n${e.name} ${e.salary} ${e.position}`;
        }
        return toReturn;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
