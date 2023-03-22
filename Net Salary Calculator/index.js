
//nssf, nhif calulated and deducted first
//payee calculated next


//this function returns NSSF deductable up to max of 1080
function calculateNSSF(salary){
let deduct=0;
deduct=(salary*0.06);
if(deduct>1080){
  deduct=1080;
}
return deduct;
}


//this function uses a switch statement to return a deductable
function calculateNHIF(salary){
  let deduct =0;
  switch (true) {
    case (salary<6000)   :deduct =150;  break;
    case (salary<8000)   :deduct =300;  break;
    case (salary<12000)  :deduct =400;  break;
    case (salary<15000)  :deduct =500;  break;
    case (salary<20000)  :deduct =600;  break;
    case (salary<25000)  :deduct =750;  break;
    case (salary<30000)  :deduct =850;  break;
    case (salary<35000)  :deduct =900;  break;
    case (salary<40000)  :deduct =950;  break;
    case (salary<45000)  :deduct =1000; break;
    case (salary<50000)  :deduct =1100; break;
    case (salary<6000)   :deduct = 1200;break;
    case (salary<70000)  :deduct =1300; break;
    case (salary<80000)  :deduct =1400; break;
    case (salary<90000)  :deduct =1500; break; 
    case (salary<100000) :deduct =1600; break;
    case (salary>=100000):deduct =1700; break; 
    default: deduct=0;
 }
  return deduct;
}


//This function uses if statements to calculate payee. 
//Only calculates when passed in salary value is above 24000 Ksh
function calculatePayee(salary){
 let calc=0;

 if  (salary<=24000){
  //calc=salary*0.1;
  return calc;
 }
 else if(salary<=32333){
  console.log("bracket2");
  let bracket1=24000;
  let bracket2=salary-24000;
  let calc=(bracket1*0.1)+(bracket2*0.25);
  return calc
 }

 else if(salary>32333){
  console.log("bracket3");
  let bracket1=24000;
  let bracket2=8333;
  let bracket3=salary-32333;
  let calc=(bracket1*0.1)+(bracket2*0.25)+(bracket3*0.3)
  return calc
}
 else{
  return 0;
 }
}

function calculateTax(amount){
  
  let = myarray=[];
  let nSSF =calculateNSSF(amount);
  myarray.push(nSSF);
  let nHIF =calculateNHIF(amount);
  myarray.push(nHIF);
  
  let taxAmount=((amount-nSSF)-nHIF)
  let payee=calculatePayee(taxAmount);
  myarray.push(payee);

  let netAmmount=taxAmount-payee;
  myarray.push(netAmmount);

  return myarray;

  
}


const button = document.querySelector('#button');
let salaryIn = document.getElementById('salaryInput');
const outputPayee=document.querySelector('#payee');
const outputNhif=document.querySelector('#nhif');
const outputNssf=document.querySelector('#nssf');
const outputNet=document.querySelector('#net');



button.addEventListener('click', update);

function update(){
  let sal =salaryIn.value;

  if (sal<5000){
    alert("Only works for salaries over Ksh 5000");
  }
  else{
    
    
let valueArray=calculateTax(sal)
outputNssf.textContent=valueArray[0];
outputNhif.textContent=valueArray[1];
outputPayee.textContent=valueArray[2].toFixed(2);
outputNet.textContent=valueArray[3].toFixed(2);
  }
}


console.log(calculateTax(50000));
