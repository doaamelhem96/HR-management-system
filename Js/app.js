"use strict";
function Employee (Employee_ID , Full_Name , Department ,Level ,Image_URL){
    this.employeeID = Employee_ID;
    this.fullName = Full_Name;
    this.department = Department;
    this.level = Level;
    this.imageUrl = Image_URL;
    this.salary = 0;
    }

let employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
let employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
let employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
let employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
let employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.netSalary = function  () {
    
        if(this.level =="Junior"){
            this.salary = Math.floor(((Math.random() * (1000 - 500) ) + 500)* 0.925) ;
            
        } 
        else if(this.level =="Mid-Senior"){
            this.salary = Math.floor(((Math.random() * (1500 - 1000) ) + 1000)* 0.925) ;
      }
       else if(this.level =="Senior"){
        this.salary = Math.floor(((Math.random() * (2000 - 1500) ) + 1500)* 0.925) ;
     }
    }
    Employee.prototype.render  = function  () {
        document.write(`<h4>Name: ${this.fullName} <br> Salary: ${this.salary}</h4><hr>`);
    }
    employee1.netSalary();
    employee2.netSalary();
    employee3.netSalary();
    employee4.netSalary();
    employee5.netSalary();
    employee6.netSalary();
    employee7.netSalary();
    
    employee1.render();
    employee2.render();
    employee3.render();
    employee4.render();
    employee5.render();
    employee6.render();
    employee7.render();
    