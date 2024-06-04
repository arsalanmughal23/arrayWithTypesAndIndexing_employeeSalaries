"use strict";
let employees = [
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
let totalWorkingHours = 130;
function calculateSalary() {
    for (let employee of employees) {
        let { salary } = employee;
        salary = employee.hourlyRate * employee.hoursWorked;
        if (employee.hoursWorked > totalWorkingHours)
            salary += calculatePercentageValue(employee.salary, 10);
        let employeeIndex = employees.indexOf(employee);
        employee.salary = salary;
        employees.splice(employeeIndex, 1, employee);
    }
    ;
}
function calculatePercentageValue(number, percent) {
    return (number / 100) * percent;
}
function showEmployees(isAfter = false) {
    console.log(isAfter ? 'After Calculate Salary' : '\nBefore Calculate Salary');
    console.log(employees);
}
console.log(`Total Working Hours is: ${totalWorkingHours}.`);
console.log(`Employee can get 10% bonus of their salary, when they have hoursWorked more than ${totalWorkingHours}.\n`);
showEmployees();
calculateSalary();
showEmployees(true);
