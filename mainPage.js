var loggedUser=window.sessionStorage.getItem('1')
console.log(loggedUser)
if(loggedUser!=null)
{
    loggedUser=JSON.parse(loggedUser)
    console.log(loggedUser.name)
    document.getElementById('welcome').innerHTML='Welcome '+loggedUser.name
}
function callStock(stockname){
    window.sessionStorage.setItem('stockname',stockname)
    window.location.href='stockStructure.html'
}

// let elementsArray = document.querySelectorAll("planButton");

// elementsArray.forEach(function(elem) {
//     elem.addEventListener("click", function() {
//         console.log('perin')
//     });
// });

// document.querySelectorAll(".planButton").forEach(elem => elem.addEventListener("click", ()=>{
//     console.log('perin')
//     if(loggedUser!=null)
// {
//     document.getElementById('myModal').style.display="none"
// }
// }))
// document.getElementById('go').addEventListener('click',()=>{
//     // if(loggedUser==null)
//     // {
//         $('#myModal').modal('hide');
//     // }
//     $("#myModal").on('hide.bs.modal',()=> {
//         alert('The modal is about to be hidden.');
//     });
// })
// $('#go').click(function() {
//     // var test1 = $('#test').val();
//     if(loggedUser==null)
//     {
//         $('#\\#myModal').modal('hide');
//     }
//   });
