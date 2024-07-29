document.getElementById("signUp").addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('firstName').value;
    console.log(name); 

    const lName = document.getElementById("lastName").value;
    console.log(lName); 

    const email = document.getElementById("email").value;
    console.log(email); 

    const password = document.getElementById("pass").value;
    console.log(password); 

    const errorMessage = document.getElementById("errorMessage");
});

if(name ==="" || lName === "" || email ===""){
    errorMessage.textContent = "enter all the fields"

}
else{
    alert('sign up successfull');
    errorMessage.textContent = '';
}
