const display = document.getElementById("display");

function Clear (){
    display.value = ""; // Resets the input field
}

function Calculate(){ 

    try{
        display.value = eval(display.value) // Evaluates the mathematical expression
    }catch(error){
        display.value = "Error"; // Shows an error message for invalid input
    }
}

const appendToDiplay = Answer => {
    display.value += Answer;  // Adds the clicked button's value to the input field
};