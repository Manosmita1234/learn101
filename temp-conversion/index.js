const submit = document.getElementById("submit");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
const num = document.getElementById("num");
let temp;


   function convert(){
    if(toFahrenheit.checked){
        temp = Number(num.value);
        temp = temp*(9/5)+32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked) {
        temp = Number(num.value);
        temp = (temp-32)*5/9 ;
        result.textContent = temp.toFixed(1) + "°C";

    }
    else {
        result.textContent= "select a unit";
    }
   }
    

