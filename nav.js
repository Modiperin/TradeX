var loggedUser=window.sessionStorage.getItem('1')
console.log(loggedUser)
var data
var stockNames=[]
var find=[]
if(loggedUser!=null)
{
   document.getElementById('signUp').style.display="none";
   document.getElementById('signUp1').style.display="none";
}
// var stockNames=['Adani','tcs','reliance','wipro','adani power','airtel','vodaphone','tarang','perin','yogi','varang','vinit']
// document.getElementById('searchBox').addEventListener("keyup",()=>{
//    var txt=document.getElementById('searchBox').value
//    console.log(txt)
//    var find=stockNames.filter(x=>x.startsWith(txt))
//    document.getElementById('writer').innerHTML=find
// })

document.getElementById('searchBox').addEventListener('click',async ()=>{
   var url = 'http://192.168.0.71:3000/stock/getStock'
    var res= await fetch(url,{
        "method":"GET"
    })
    find=[]
    stockNames=[]
        var data= await res.json()
        for(i=0;i<data.length;i++)
        {
            stockNames.push(data[i].fullName)
        }
    //   console.log(stockNames)
    //   console.log(find)
})
document.getElementById('searchBox').addEventListener("keyup",()=>{
   var txt=document.getElementById('searchBox').value
   find=[]
//    console.log(txt.trim().length())
    // console.log(typeof(txt))
    // console.log(txt.trim().length)
    // console.log(find)
   if(txt.trim().length>0)
   {
    var find=stockNames.filter(x=>x.startsWith(txt))
    document.getElementById('writer').innerHTML=find 
   }
   else{
    document.getElementById('writer').innerHTML=" "
   }
   
})