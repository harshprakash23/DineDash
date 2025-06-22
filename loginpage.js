function home()
{
    email=["harsh@gmail.com"];
    password=["harsh123"]
     emailtxt=document.getElementById("email").value;
    passwordtxt=document.getElementById("password").value;

    // if(((emailtxt.match(email))&&(passwordtxt.match(password))))
   if(emailtxt.match(email) && passwordtxt.match(password))
    {
        // window.alert("prince")
        // window.location.replace("homepage.html");
        window.open("Harsh_restro/index.html", "_blank");
        // window.location.href = "Harsh_restro/index.html";

        } 
        else 
        {
            alert('Invalid email or password');
        }
}
