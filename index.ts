

type TYPE_EMPLOYEE = {
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    salary: number
}

let employees:TYPE_EMPLOYEE[] = [
    {
        name: 'Ahmed',
        hoursWorked: 120,
        hourlyRate: 100,
        salary: 12000,
    },
    {
        name: 'Asad',
        hoursWorked: 130,
        hourlyRate: 100,
        salary: 13000,
    },
    {
        name: 'Junaid',
        hoursWorked: 160,
        hourlyRate: 100,
        salary: 16000,
    }
];

let totalWorkingHours:number = 130;

function calculateSalary ():void {
    for(let employee of employees) {
        let { salary } = employee;
        salary = employee.hourlyRate * employee.hoursWorked;

        if(employee.hoursWorked > totalWorkingHours)
            salary += calculatePercentageValue(employee.salary, 10);

        let employeeIndex = employees.indexOf(employee);
        employee.salary = salary;
        employees.splice(employeeIndex, 1, employee)
    };
}
function calculatePercentageValue(number:number, percent:number):number {
    return (number / 100) * percent;
}

function showEmployees(isAfter:boolean = false):void {
    console.log(isAfter ? 'After Calculate Salary' : '\nBefore Calculate Salary');
    console.log(employees);
}

console.log(`Total Working Hours is: ${totalWorkingHours}.`)
console.log(`Employee can get 10% bonus of their salary, when they have hoursWorked more than ${totalWorkingHours}.\n`)

showEmployees();
calculateSalary();
showEmployees(true);