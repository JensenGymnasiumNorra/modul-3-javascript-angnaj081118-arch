let Slider = document.getElementById('Slider');
let Numba = document.getElementById('Numba');
let Hint = document.getElementById('Hint');
let p = document.getElementById('pp');

let answer1 = false;
let answer2 = false;
let answer3 = false; 



let wc = 0; 
p.textContent = (`Win count: 0`);

Numba.textContent = Slider.value; 

let Ransom = Math.floor(Math.random() * 100) + 1;
console.log(Ransom);

Slider.addEventListener('input', () => {
Numba.textContent = Slider.value; 

let Wow = Number(Slider.value); 


if (Wow === Ransom) {
answer1 = true; 
Hint.textContent = "Slider 1 is Correct!";
} else if(Wow < Ransom){
answer1 = false; 
Hint.textContent = "Too low!"; 
} else if (Wow > Ransom) { 
    answer1 = false; 
    Hint.textContent = "Too high!"; } }); 



let Slider2 = document.getElementById('Slider2');
let Numba2 = document.getElementById('Numba2');

let Ransom2 = Math.floor(Math.random() * 100) + 1;
console.log(Ransom2);



Numba2.textContent =Slider2.value; 

Slider2.addEventListener('input', () => {
Numba2.textContent = Slider2.value; 

let Wow2 = Number(Slider2.value); 

if (Wow2 === Ransom2) {
answer2 = true; 
Hint.textContent = "Slider 2 is Correct!";
} else if(Wow2 < Ransom2){
answer2 = false; 
Hint.textContent = "Too low!"; 
} else if (Wow2 > Ransom2) {
    answer2 = false; 
    Hint.textContent = "Too high!"; } }); 




let Slider3 = document.getElementById('Slider3');
let Numba3 = document.getElementById('Numba3');

let Ransom3 = Math.floor(Math.random() * 100) + 1;
console.log(Ransom3);

Numba3.textContent =Slider3.value; 

Slider3.addEventListener('input', () => {
Numba3.textContent = Slider3.value; 

let Wow3 = Number(Slider3.value); 

if (Wow3 === Ransom3) {
    answer3 = true; 
Hint.textContent = "Slider 3 is Correct!";
} else if(Wow3 < Ransom3){
answer3 = false; 
Hint.textContent = "Too low!"; 
} else if (Wow3 > Ransom3) { 
    answer3 = false; 
    Hint.textContent = "Too high!"; } });



let NewNumba = document.getElementById('NewNumba');

NewNumba.addEventListener('click', () => {
if (answer1 && answer2 && answer3) {
Hint.textContent = "Number has been changed!";
wc++; 
p.textContent = (`Win count: ${wc}`);
Slider.max = Number(Slider.max) + 100;
console.log(Slider.max);
Ransom = Math.floor(Math.random() * Slider.max) + 1;
Slider2.max = Number(Slider2.max) + 100;
console.log(Slider2.max);
Ransom2 = Math.floor(Math.random() * Slider2.max) + 1;
Slider3.max = Number(Slider3.max) + 100;
console.log(Slider3.max);
Ransom3 = Math.floor(Math.random() * Slider3.max) + 1;
answer1 = false;
answer2 = false; 
answer3 = false;
} else {
Hint.textContent = "You need to guess the right number on all sliders to change!"
}
}); 

// Jag använder arrow functions, ifall du undrar vad "() =>" är för något,det är samma sak som functions. jag använde också booleans, alltså true och false i min kåd.






