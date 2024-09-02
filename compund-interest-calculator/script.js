
const button = document.getElementById("button");
const amount = document.getElementById("amount");


function calculate(){
    const Principal = Number(document.getElementById("Principal").value)/100;
    const interestRate =Number( document.getElementById("interestRate").value);
    const years = Number(document.getElementById("years").value);
    const totalAmount =  Principal * Math.pow((1 + interestRate), years);
    amount.textContent =` $${totalAmount.toFixed(2)}`;

}

button.addEventListener("click", calculate);