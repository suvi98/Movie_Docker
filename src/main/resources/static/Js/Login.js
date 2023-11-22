
function login() 
{
   let name=document.getElementById("uname").value;
   let password=document.getElementById("pass").value;

   console.log(name,password);
   if(name=="admin" && password=="admin")
   {
       window.location.href="index.html"

    console.log(login);
   }
   else if(name=="admin" && password!=="admin")
   {
      let failureMsg=document.getElementById("failMsg");
      failureMsg.innerHTML="Invalid Password!! Please enter the correct password.";
   }
   else if(name!="admin" && password=="admin")
   {
      let failureMsg=document.getElementById("failMsg");
      failureMsg.innerHTML="Invalid Username!! Please enter the correct username.";
   }
   else
   {
      let failureMsg=document.getElementById("failMsg");
      failureMsg.innerHTML="Invalid credentials!! Please try again.";
   }
}
