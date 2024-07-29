/*document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    const getUsername = document.getElementById('name').value;
    console.log(getUsername);
    const getPassword =document.getElementById('pass').value ;
    console.log(getPassword);
    const errorMessage= document.getElementById('errorMessage');

    if(getUsername=== "name" && getPassword==="pass"){
        alert("login successful")
        errorMessage.textContent='';
    }
    else{
        errorMessage.textContent= "Invalid Username or password"
    }

});*/

document.getElementById("submit").onclick = function(){
    const getUsername = document.getElementById('name').value;
    console.log(getUsername);
    const getPassword =document.getElementById('pass').value ;
    console.log(getPassword);
}

