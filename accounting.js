"use strict";
let numa=0,numm=0,numd=0,numf=0;
let Salarya=0, Salarym=0,Salaryd=0,Salaryf=0;
let Averagea=0,Averagem=0,Averaged=0,Averagef=0;

renderTable ();
let table = document.getElementById("table");

              

            let tra = document.createElement('tr');
             table.appendChild(tra);
          
             let tda1 = document.createElement('td');
             tda1.textContent="Administration";
             tra.appendChild(tda1);
          
             let tda2 = document.createElement('td');
             tda2.textContent= numa;
             tra.appendChild(tda2);

               let tda3 = document.createElement('td');
               tda3.textContent= Salarya;
               tra.appendChild(tda3);
               let tda4 = document.createElement('td');
               tda4.textContent= Averagea;
               tra.appendChild(tda4);


               let trm = document.createElement('tr');
               table.appendChild(trm);
           
               let tdm1 = document.createElement('td');
               tdm1.textContent="Marketing";
               trm.appendChild(tdm1);
          
               let tdm2 = document.createElement('td');
               tdm2.textContent= numm;
               trm.appendChild(tdm2);

               let tdm3 = document.createElement('td');
               tdm3.textContent= Salarym;
               trm.appendChild(tdm3);
               let tdm4 = document.createElement('td');
               tdm4.textContent= Averagem;
               trm.appendChild(tdm4);


                let trd = document.createElement('tr');
              table.appendChild(trd);
          
              let tdd1 = document.createElement('td');
              tdd1.textContent="Development";
              trd.appendChild(tdd1);
          
              let tdd2 = document.createElement('td');
              tdd2.textContent= numd;
              trd.appendChild(tdd2);

                let tdd3 = document.createElement('td');
                tdd3.textContent= Salaryd;
               trd.appendChild(tdd3);
                let td44 = document.createElement('td');
                td44.textContent=Averaged;
                trd.appendChild(td44);
     
                let trf = document.createElement('tr');
                table.appendChild(trf);
              let tdf1 = document.createElement('td');
              tdf1.textContent="Finance";
              trf.appendChild(tdf1);
          
              let tdf2 = document.createElement('td');
              tdf2.textContent= numf;
              trf.appendChild(tdf2);

                let tdf3 = document.createElement('td');
                tdf3.textContent= Salaryf;
                trf.appendChild(tdf3);
                let tdf4 = document.createElement('td');
                tdf4.textContent= Averagef;
                trf.appendChild(tdf4);
      
                let trall = document.createElement('tr');
                table.appendChild(trall);
          
              let tdall1 = document.createElement('th');
              tdall1.textContent="All Department";
              trall.appendChild(tdall1);
          
              let tdall2 = document.createElement('th');
              tdall2.textContent= numa+numm+numd+numf;
              trall.appendChild(tdall2);

                let tdall3 = document.createElement('th');
                tdall3.textContent= Salarya+Salarym+Salaryd+Salaryf;
                trall.appendChild(tdall3);
                let tdall4 = document.createElement('th');
                tdall4.textContent=Averagea+Averagem+Averaged+Averagef;
                trall.appendChild(tdall4);
            
            
                function renderTable (){
                  getNum();
                  getSalary();
                  getAverage();
                }

          function getNum(){
            
            
            let dataArr = localStorage.getItem('Employee');
            let objArray = JSON.parse(dataArr);
            for (let i = 0; i < objArray.length; i++) {
                
              if(objArray[i].department=="Administration"){
               numa = numa + 1;
              }
               else if(objArray[i].department=="Marketing"){
                numm = numm + 1;
            }
          
               else if(objArray[i].department=="Development"){
                  numd = numd + 1;
            } 
            else if(objArray[i].department=="Finance"){
              numf = numf + 1;
        } 

          }
            return numa,numm,numd,numf;
            
           }
           function getSalary(){
            
          let dataArr = localStorage.getItem('Employee');
          let objArray = JSON.parse(dataArr);
          
            for (let i = 0; i < objArray.length; i++) {
                
              if(objArray[i].department=="Administration"){
                Salarya = Salarya + objArray[i].salary;
            }
            else if(objArray[i].department=="Marketing"){
              Salarym = Salarym + objArray[i].salary;
          }
            else if(objArray[i].department=="Development"){
            Salaryd = Salaryd + objArray[i].salary;
        }  
        else if(objArray[i].department=="Finance"){
          Salaryf = Salaryf + objArray[i].salary;
      } 
            } 
            return Salarya,Salarym,Salaryd,Salaryf;
           }
           function getAverage(){
            
          let dataArr = localStorage.getItem('Employee');
          let objArray = JSON.parse(dataArr);
          
            for (let i = 0; i < objArray.length; i++) {
                
              if(objArray[i].department=="Administration"){
                Averagea = Math.floor(Salarya / numa);
            }
            else if(objArray[i].department=="Marketing"){
              Averagem = Math.floor(Salarym / numm);
          }
          else if(objArray[i].department=="Development"){
            Averaged = Math.floor(Salaryd / numd);
        }
        else if(objArray[i].department=="Finance"){
          Averagef = Math.floor(Salaryf / numf);
      }
            } 
            return Averagea,Averagem,Averaged,Averagef;
           }