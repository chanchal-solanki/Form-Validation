
    function showError(input , message){
         console.log("Error");

        let field = input.parentElement;
        let error = field.querySelector(".error");

        error.innerText  = message;
        error.style.color = "red";
        error.style.display = "block";
        input.style.border = "1px solid red";
    }

    function showSucess(input){
        console.log("Sucess");

        let field = input.parentElement;
        let error = field.querySelector(".error");

        error.innerText = "";
        error.style.display = "none";
        input.style.color ="green";
        input.style.border = "3px solid green";
    }

    function checkName(){
        let Username = document.querySelector("#name");
        let val = Username.value.trim();
        let len = val.length;

        console.log("Length: "+ len)
        if(len < 3 ||  len > 25){
             console.log("Error");

           showError(Username,"Username must be between 3 and 25 characters");
           return false;
        } 
        showSucess(Username);
        return true;
    };

    let password = document.querySelector("#password");
    function checkPassword(){ 
        let val = password.value.trim();
        let len = val.length;

        let hasLower = /[a-z]/.test(val);
        let hasupper = /[A-Z]/.test(val);
        let hasNumber = /[0-9]/.test(val);
        let hasSpecial = /[^a-zA-Z0-9]/.test(val);

        if((len>8 && hasLower && hasupper && hasNumber && hasSpecial)){  
            showSucess(password);
            return true;
        }

        showError(password , "Password must be 8 character that include at least 1 lowercase,1 uppercase characters,1 number and 1 special character in(!@#$%^&*)");
        return false;
    }

    function checkConfirmPassword(){
        let confirmPass = document.querySelector("#confirmPass");
        if(password.value != confirmPass.value){
            showError(confirmPass , "Please enter the password again");
            return false;
        }
        showSucess(confirmPass);
        return true;
    }

    function checkEmail(){
        let email = document.querySelector("#email");
        
        let val = email.value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailPattern.test(val)){
            console.log("done");
            showSucess(email);
            return true;
        }
        console.log("fail");
        showError(email, "Email Invalid");
        return false;
    }

    function checkNumber(){
        let number = document.querySelector("#tel");
        let val = number.value.trim();
        let len = val.length;

        let hasNumber = /[0-9]/.test(val);

        if(hasNumber && len == 10){
            showSucess(number);
            return true;
        }

        showError(number, "Number Invalid");
        return false;
    }

    let form = document.querySelector("form");
    
    form.addEventListener("submit",function(event){ 
        event.preventDefault();
        
         if(checkName() && checkPassword() && checkConfirmPassword() && checkEmail() && checkNumber()) {
            window.location.href ="nextpage.html";
         }
   
    });