
const max = 6;
const min = 1;


myButton.onclick = function(){
    const random1 = Math.floor(Math.random()*max)+min;
    const random2 = Math.floor(Math.random()*max)+min;
    const random3 = Math.floor(Math.random()*max)+min;
    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;

}



