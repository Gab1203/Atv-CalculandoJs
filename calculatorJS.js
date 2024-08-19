function sum(a,b){
    return a + b
}

function subtraction(a,b){
    return a - b 
}

function multiplication(a,b){
    return a * b
}

function division(a,b){
    if(b === 0){

        return 'Indefinido'
    }
    return a/b
}

function operators(operator){

var a = parseFloat(document.getElementById('n1').value) ;
var b = parseFloat(document.getElementById('n2').value);

var result = 0
switch(operator){

case '+':
     result = sum(a,b);
     break;
case '-':
   result  = subtraction(a,b);
   break;
case '*':
   result =  multiplication(a,b);
   break;
case '/':
    
 result =  division(a,b);
 break;
}

document.getElementById('p1').innerHTML =  result;

}