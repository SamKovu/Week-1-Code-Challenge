const button = document.querySelector('#button');
let speed = document.getElementById('speed');
const output=document.querySelector('#output');


//given a speed this will return a string status value
function calculateDemerit(speed){
    let status;
    if(speed<0){
      status="not valid";
    }
    else if (speed<70){
        status="OK";
     }
     else if (speed<75){
        status="SLOW DOWN";
     }

    else{
    let totalDemerit;
    let overSpeed=speed-70;
    //subtracting 70 from value and dividing by five allow us to calculate demerit
    //total demerit always integer with Math truncate method
    totalDemerit=Math.trunc(overSpeed/5);
    
        //nested if statement with demerit checker
          if(totalDemerit>12){
            status=`LICENSE SUSPENDED || Points: ${totalDemerit} `;
          }
          else{
            status=`Points: ${totalDemerit}`;
          }
    
    }
    return status;
}


button.addEventListener('click', update);


function update(){
  let number =speed.value; // input type element value passed to variable
  console.log(number);
  let message=calculateDemerit(number) //update calls calculateDemerit
  output.textContent=message; //update the <p> element
  console.log(message);

}




console.log(calculateDemerit(150)); //tester for demerit function