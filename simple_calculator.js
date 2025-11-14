const num1 = document.getElementById('num1');
const num1value = document.getElementById('num1value');

num1.addEventListener('input', function() {
num1value.textContent = num1.value;
});

const num2 = document.getElementById('num2');
const num2value = document.getElementById('num2value');

num2.addEventListener('input', function() {  
num2value.textContent = num2.value;
}); 

const sell = document.getElementById('sell');
const butt = document.getElementById('butt');

butt.addEventListener('click', function() {
     const num1 = parseFloat (document.getElementById('num1').value);
     const num2 = parseFloat (document.getElementById('num2').value);
   const AA = sell.value;
   let result; 
 
   if (AA === '+') result = num1 + num2; 
   else if (AA === '-') result = num1 - num2; 
   else if(AA === '/') result = num1 / num2;
   else if(AA === '*') result = num1 * num2;

   document.getElementById('result').textContent = 'result: ' + result;
 }); 
