
function Employee(EmployeeID,FullName,Department,Level,ImageURL,Salary)
{
 this.EmployeeID=EmployeeID;
 this.FullName= FullName;
 this.Department=Department;
 this.Level=Level;
 this.ImageURL=ImageURL;
 this.Salary=Salary;
 
}

Employee.prototype.randomSalary =Function()
{
  if (Employee.level=="Senior")
  {
   Employee.Salary= Math.floor(Math.random() * (2000 - 1500 ) ) + 1500;
   
  }
 else if (Employee.Level=="Junior")
  {
    Employee.Salary=Math.floor(Math.random() * (500 - 1000 ) ) + 1000;

  }
  else 
   {
    Employee.Salary= Math.floor(Math.random() * (1000 - 1500) ) + 1000;
   
  } 
console.log(Employee.Salary);
    }
    Employee.prototype.render=function()
    {
     
       document.write(Employee1.FullName,(Employee.Salary)-7.5) ;
       document.write(Employee2.FullName,(Employee.Salary)-7.5) ;
       document.write(Employee3.FullName, (Employee.Salary)-7.5) ;
      
       document.write(Employee4.FullName,(Employee.Salary)-7.5) ;
       
       document.write(Employee5.FullName,(Employee.Salary)-7.5) ;
      
       document.write(Employee6.FullName,(Employee.Salary)-7.5) ;
       
       document.write(Employee7.FullName,(Employee.Salary)-7.5) ;
   
     
    }
  
let Employee1= new Employee(1000,"Ghazi Samer","Admenistration","Senior");
let Employee2=new Employee(1001,"Lana Ali","Finance","Senior");
let Employee3= new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let Employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let Employee5= new Employee(1004,"Omar Zaid","Development","Senior");
let Employee6=new Employee(1005,"Rana Saleh","Development","Junior");
let Employee7= new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

console.log(Employee2);

  
Employee1.randomSalary();
Employee3.render();
    


