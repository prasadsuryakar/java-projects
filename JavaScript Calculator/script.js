function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = ' ';
}

function calculate(){
    let expression = document.getElementById('display').value;
    let result ;
    try{
        result = eval(expression);
    }catch(error){
        result = error;
    } 
    document.getElementById('display').value=result;
       }

       function clearLast(){
        let result=document.getElementById('display').value;
        document.getElementById('display').value=result.slice(0,-1);
       }
