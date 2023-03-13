
'use strict';

function Employee (employeeID, fullName, department, level, imageURL)
 {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    allEmployee.push(this);
  }

 


function renderTable(){
  // Table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Department', '# of employees', 'Total Salary', 'Average'];
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
// Table body
const tbody = document.createElement('tbody');
let totalEmployees = 0;
let totalSalary = 0;
allEmployee.forEach(department => {
  const { name, employees } = department;
  const row = document.createElement('tr');
   // Department name
   const nameCell = document.createElement('td');
   nameCell.textContent = name;
   row.appendChild(nameCell);
   // Number of employees
  const employeesCell = document.createElement('td');
  employeesCell.textContent = employees.length;
  row.appendChild(employeesCell);

  // Total salary
  const salaryCell = document.createElement('td');
  const departmentSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  salaryCell.textContent = departmentSalary.toLocaleString();
  row.appendChild(salaryCell);
  
  // Average salary
  const averageCell = document.createElement('td');
  const departmentAverage = departmentSalary / employees.length;
  averageCell.textContent = departmentAverage.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  row.appendChild(averageCell);

  // Update totals
  totalEmployees += employees.length;
  totalSalary += departmentSalary;

  tbody.appendChild(row);
});
table.appendChild(tbody);

// Table footer
const tfoot = document.createElement('tfoot');
const footerRow = document.createElement('tr');
const totalEmployeesCell = document.createElement('td');
totalEmployeesCell.textContent = `Total number of employees: ${totalEmployees}`;
totalEmployeesCell.colSpan = 2;
footerRow.appendChild(totalEmployeesCell);
const totalSalaryCell = document.createElement('td');
totalSalaryCell.textContent = `Total salary for all departments: ${totalSalary.toLocaleString()}`;
totalSalaryCell.colSpan = 1;
footerRow.appendChild(totalSalaryCell);
const averageSalaryCell = document.createElement('td');
averageSalaryCell.textContent = `Average salary for all departments: ${(totalSalary / totalEmployees).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
averageSalaryCell.colSpan = 1;
footerRow.appendChild(averageSalaryCell);
tfoot.appendChild(footerRow);
table

  console.log(table);
  
}
  

renderTable ();


  
  // let trEL = document.createElement('tr');
  // table.appendChild(trEL);
  // let trEL1 = document.createElement('tr');
  // table.appendChild(trEL1);
  // let tdEL = document.createElement('td');
  // trEL.appendChild(tdEL);
  // let tdEL1 = document.createElement('td');
  // trEL1.appendChild(tdEL1);
  // let tdEL2 = document.createElement('td');
  // trEL.appendChild(tdEL2);
  // let tdEL3 = document.createElement('td');
  // trEL.appendChild(tdEL3);
  // let tdEL4 = document.createElement('td');
  // trEL.appendChild(tdEL4);

  // let thEl2 = document.createElement('thead');
  // thEl2.textContent=`Department `;
  // tdEL.appendChild(thEl2);

  // let thEl3 = document.createElement('thead');
  // thEl3.textContent='number of employees ';
  // tdEL2.appendChild(thEl3);

  // let thEl5 = document.createElement('thead');
  // thEl5.textContent='Average Salary ';
  // tdEL3.appendChild(thEl5)

  // let thEl4 = document.createElement('thead');
  // thEl4.textContent='Total Salary ';
  // tdEL4.appendChild(thEl4);
  // let tfEl = document.createElement('tfooter');
  // tfEl.textContent='Total Salary ';
  // tdEL1.appendChild(tfEl);
