const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");
const circle = document.getElementById("circle");

redBtn.onclick= function(){
  circle.style.backgroundColor = "red";
};

blueBtn.onclick= function(){
  circle.style.backgroundColor = "blue";
};

greenBtn.onclick= function(){
  circle.style.backgroundColor = "green";
};
