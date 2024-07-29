
let count = 0;


increasebtn.onclick = function() {
    count++;
    document.getElementById("countlabel").textContent = count;
}

resetbtn.onclick = function(){
    count=0;
    document.getElementById("countlabel").textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    document.getElementById("countlabel").textContent= count;
}