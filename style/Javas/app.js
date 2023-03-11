'use strict'
function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
  this.employeeID = EmployeeID;
  this.fullName = FullName;
  this.department = Department;
  this.level = Level;
  this.image = ImageURL;
  this.salary= 0
}

Employee.prototype.salaryCalculater = Function()
{
  if (this.level == "Senior") {
    this.salary = randomNumber(1500, 2000);


  }
  else if (this.level == "Mid-Senior") {
    this.salary = randomNumber(1000, 1500);


  }
  else {
    this.salary = randomNumber(500, 1000);


  }
  this.salary = netSalary(this.salary);

}



let employee1 = new Employee(1000, "Ghazi Samer", "Admenistration", "Senior");
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


Employee.prototype.render = function () {
  let imageE1= document.createElement('img');
imageE1.src=this.img;
empForm.appendChild(imageE1);

document.write(`<h5> Name: ${this.fullName}_____ID: ${createEmpId()}</h5>  <h5> Department: ${this.department}______ Level: ${this.level} </h5>  ${netSalary(salary)} `);

}



// employee1.salaryCalculater();
// employee2.salaryCalculater();
// employee3.salaryCalculater();
// employee4.salaryCalculater();
// employee5.salaryCalculater();
// employee6.salaryCalculater();
// employee7.salaryCalculater();

// employee1.render();
// employee2.render();
// employee3.render();
// employee4.render();
// employee5.render();
// employee6.render();
// employee7.render();


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function netSalary(salary) {
  return salary - (salary * 0.075);

}

function createEmpId() {
  let empId = "";
  const char = "0123456789";
  const charLength = char.length;


  for (let i = 0; i < 4; i++) {
    empId = empId + char.charAt(Math.floor(Math.random() * charLength));
  }

  return empId;

}

let empForm = document.getElementById('empForm');
empForm.addEventListener('submit', submitHandler);

function submitHandler(event) {

  event.preventDefault(); // maintain a data when you press on submit button


  let fName = event.target.fName.value;
  let department = event.target.depName.value;
  let level = event.target.levelName.value;
  let img = event.target.img.value;

  // // Create new employee object
  let newEmp = new Employee(fName, department, level, img)
  {
    newEmp.render()
      ;
  }
}

