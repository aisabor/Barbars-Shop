    window.onload=()=>{    
        this.sessionStorage.setItems("username", "abor");
        this.sessionStorage.setItems("username", "dam");
    }

    var input= document.getElementsByTagName("input");
    var login = document.getElementById("login");
    var form = document.querySelector("form");
    form.onsubmit = ()=>{return false}

    login.onclick = ()=>{
    if ((input[0].value !="") && (input[1].value !=""))
        {
        
    }
    else
    {
        if (input[0].value =="")
        {
            input[0].nextElementSibling.textContent = "Username de empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            }, 2000);
        }
        if (input[1].value =="")
        {
            input[1].nextElementSibling.textContent = "Password de empty";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
            }, 2000);
        }

    }
    }