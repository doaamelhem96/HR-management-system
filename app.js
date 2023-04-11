"use strict";

const allEmployee = [];
let form = document.getElementById("form");
let sec = document.getElementById("sec")
 function Employee (Full_Name , Department ,Level ,Image_URL){
    this.employeeID = 0;
    this.fullName = Full_Name;
    this.department = Department;
    this.level = Level;
    this.imageUrl = Image_URL;
    this.salary = 0;
    allEmployee.push(this);
 }

      Employee.prototype.creatId = function  () {
        this.employeeID =  Math.floor(1000 + Math.random() * 9000);
      
} 

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
        let div = document.createElement('div');
          sec.appendChild(div); 
          let img = document.createElement('img');
          img.src = this.imageUrl
          div.appendChild(img); 
          let h4 = document.createElement('h4');
          h4.textContent = `Name : ${this.fullName}  ID : ${this.employeeID}`;
          div.appendChild(h4)
          let h41 = document.createElement('h4');
          h41.textContent = `Department: ${this.department}  Level: ${this.level}`;
          div.appendChild(h41)
          let h42 = document.createElement('h4');
          h42.textContent = `Salary: ${this.salary}`;
          div.appendChild(h42)
          
          }


         

  
  
        
     
     form.addEventListener("submit",gitSubmit);
     
      function gitSubmit (event) {
        event.preventDefault();
       
       
        let Full_Name = event.target.Fullname.value;
        let Department = event.target.Department.value;
        let Level = event.target.Level.value;
        let Image_URL = event.target.Image.value;
        
        let newEmployee = new Employee (Full_Name, Department, Level, Image_URL);
         newEmployee.creatId();
         newEmployee.netSalary();
         newEmployee.render();
     }



    let employee1 = new Employee("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
    let employee2 = new Employee("Lana Ali","Finance","Senior","./assets/Lana.jpg");
    let employee3 = new Employee("Tamara Ayoub","Marketing","Senior","./assets/Tamara.jpg");
    let employee4 = new Employee("Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg");
    let employee5 = new Employee("Omar Zaid","Development","Senior","./assets/Omar.jpg");
    let employee6 = new Employee("Rana Saleh","Development","Junior","./assets/Rana.jpg");
    let employee7 = new Employee("Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg");

for(let i=0;i<allEmployee.length;i++){
  allEmployee[i].creatId();
  allEmployee[i].netSalary();
  allEmployee[i].render();
}
    

    