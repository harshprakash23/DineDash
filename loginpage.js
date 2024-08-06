function home()
{
    email=["as9058552@gmail.com"];
    password=["ayush"]
     emailtxt=document.getElementById("email").value;
    passwordtxt=document.getElementById("password").value;

    // if(((emailtxt.match(email))&&(passwordtxt.match(password))))
   if(emailtxt.match(email) && passwordtxt.match(password))
    {
        // window.alert("prince")
        // window.location.replace("homepage.html");
        window.open("ayush-restro/index.html", "_blank");
        // window.location.href = "ayush-restro/index.html";

        } 
        else 
        {
            alert('Invalid email or password');
        }
}
