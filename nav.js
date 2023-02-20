var loggedUser=window.sessionStorage.getItem('1')
console.log(loggedUser)
if(loggedUser!=null)
{
   document.getElementById('signUp').style.display="none";
   document.getElementById('signUp1').style.display="none";
}