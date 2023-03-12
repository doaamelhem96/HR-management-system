'use strict'
let allEmployee= [];
let sectionEl = document.getElementById("card");
let empForm = document.getElementById("form");

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



let employee1 = new Employee(1000, "Ghazi Samer", "Admenistration", "Senior","./assets/Ghazi.jpg");
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/Lana.jpg");
let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara.jpg");
let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/Safi.jpg");
let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior","./assets/Omar.jpg");

let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior","./assets/Rana.jpg");
let employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/Hadi.jpg");
// allemployee(Employee);

Employee.prototype.render = function () 
{

  
  //create image
  let imgEl = document.createElement('img');
  imgEl.src = this.imageURL
  sectionEl.appendChild(imgEl);

  let h3E1 = document.createElement('h3');
  h3E1.textContent = `Full Name : ${this.fullName}`;
  sectionEl.appendChild(h3E1);

  let h2El = document.createElement('h2');
  h2El.textContent=`Employee-ID :${createEmpId()}`;
  sectionEl.appendChild(h2El);

  let h1= document.createElement('h2');
  h1.textContent = `Department : ${this.department}`;
  sectionEl.appendChild(h1);
  
let h2Elll = document.createElement('h2');

h2Elll.textContent= `Level: ${this.level}`;
sectionEl.appendChild(h2Elll);
let h2Ellll = document.createElement('h2');
h2Ellll.textContent=` Salary : ${netSalary(salary)}`;
sectionEl.appendChild(h2Ellll);



}
 allEmpcaller(allEmployee);
function allEmpcaller()
{
  for(let i=0;i<allEmployee.length;i++)

  {
    allEmployee[i].render();
  }
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

empForm.addEventListener('submit', submitHandler);


function submitHandler(event)
 {
  event.preventDefault(); 

  let fullame = (event.target.fN.value) ;
  let department = (event.target.dep.value);
  let lev = (event.target.level.value);
  let img = (event.target.imgurl.value);
 //console.log(empName);
//  Create new employee object
  let newEmp = new Employee (fullame, department, lev, img)
  
   newEmp.render();
  
  
}

