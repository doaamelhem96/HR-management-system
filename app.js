let allEmployee= [];
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

  
 document.write(`Employee- ID: ${this.employeeID} && FullName:${this.fullName} && Department:${this.department} && level:${this.level} && Salary : ${netSalary(salary)}`);



}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function netSalary(salary) {
    return salary - (salary * 0.075);
  
  }
  function allEmpcaller()
{
  for(let i=0;i<allEmployee.length;i++)

  {
    allEmployee[i].render();
  }
}
allEmpcaller(allEmployee);
  
 