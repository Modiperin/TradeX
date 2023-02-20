var loggedUser=window.sessionStorage.getItem('1')
console.log(loggedUser)
if(loggedUser!=null)
{
    loggedUser=JSON.parse(loggedUser)
    console.log(loggedUser.name)
    document.getElementById('welcome').innerHTML='Welcome '+loggedUser.name
}