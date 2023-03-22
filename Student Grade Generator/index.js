const button = document.querySelector('#button');
let gradeIn = document.getElementById('grade');
const output=document.querySelector('#output');



function calculateGrade(grade){
    let letter;
  
        
     if(grade>100)
       {letter="Invalid"
       output.style.color="#ba1414";              }
        else if (grade>79){
          letter="A";
          output.style.color="#5fad0c";
        }
          else if(grade>60){
            letter="B";
            output.style.color="#a0ad0c";
          }
          else if(grade>49){
            letter="C";
            output.style.color="#ad800c";
          }
          else if(grade>40){
            letter="D";
            output.style.color="#ad320c";
          }
          else if(grade>=0){
            letter="E";
            output.style.color="#ba1414";
          }
          else{
            letter="Invalid"
            output.style.color="#ba1414";
          }
      return letter;
}

button.addEventListener('click', update);

function update(){
  let number =gradeIn.value;
  console.log(number);


let letter=calculateGrade(number)
output.textContent=letter;

}
