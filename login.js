function validation(){

    var username=document.formlog.username.value;  
    var password=document.formlog.password.value; 
        if(username == null || username == ""){
            alert("Please enter your username and password.");
            return false;
        }
        else if(password.length<8){
            alert("The Password should be at least 8 characters long.");
            return false;
        }

    }