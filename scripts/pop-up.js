//5000 millseconds == 5 seconds
const delay = 5000;

//get page elements
const popup      = document.getElementById('pop-up');
const closePopup = document.getElementById('close-pop-up');

const start      = document.getElementById('start');


//hide the popup initially
popup.style.display = "none";

//- make all timer handlers page scope
//- dont assign value when first defining
//- make them 'let'
//
let timerHandler; 

//wait 5.0 seconds before showing
timerHandler = setTimeout( function(){
    popup.style.display = "block";
}, delay);

//add a click event listener to the closePopup
closePopup.addEventListener("click", function(){
    popup.style.display = "none";   
});


start.addEventListener("click", function(){
    
    clearTimeout(timerHandler);
    popup.style.display = "block";
});