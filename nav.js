var loggedUser = window.sessionStorage.getItem("1");
console.log(loggedUser);
var data;
var stockNames = [];
var find = [];
const logout = document.querySelector(".logout");
if (loggedUser != null) {
  document.getElementById("signUp").style.display = "none";
  document.getElementById("signUp1").style.display = "none";
  //    logout.classList.add('active')
  document.getElementById("logout").style.display = "block";
}
if (loggedUser == null) {
  document.getElementById("logout").style.display = "none";
  // window.location.href='mainPage.html'
}
document.getElementById("logout").addEventListener("click", () => {
  console.log("loggedOut");
  window.location.href = "mainPage.html";
  window.sessionStorage.removeItem("1");
});

document.getElementById("signUp1").addEventListener("click", () => {
  document.getElementById("myModal").style.paddingLeft = "450px";

  document.getElementById("loginDiv").addEventListener("click", () => {
    console.log("inside");
    var email = document.getElementById("emailVal").value;
    var pass = document.getElementById("passVal").value;
    console.log(email, pass);
    if (email.trim().length > 0 && pass.trim().length > 0) {
      console.log(email, pass);
      var users = window.localStorage.getItem(email);
      console.log(users);
      if (users == null) {
        console.log("no user");
        document.getElementById("noUser").innerHTML = "No User Found";
      } else {
        var user = JSON.parse(users);
        console.log(user);
        if (pass == user.password) {
          console.log("Login successfully");
          console.log(user);
          // document.getElementById('detail').innerHTML = "Welcome" + " " + user.name
          window.sessionStorage.setItem(1, JSON.stringify(user));
          // document.cookie = email+"="+user.email+"; expires=Wed, 05 Aug 2020 23:00:00 UTC";
          document.cookie =
            "username=Max Brown; expires=Wed, 05 Aug 2020 23:00:00 UTC";
          window.location.href = "dashBoard.html";
        }
      }
    } else {
      console.log("Please Enter email ans pass");
      document.getElementById("noUser").innerHTML =
        "Please Enter email and password";
    }
  });
});
// var stockNames=['Adani','tcs','reliance','wipro','adani power','airtel','vodaphone','tarang','perin','yogi','varang','vinit']
// document.getElementById('searchBox').addEventListener("keyup",()=>{
//    var txt=document.getElementById('searchBox').value
//    console.log(txt)
//    var find=stockNames.filter(x=>x.startsWith(txt))
//    document.getElementById('writer').innerHTML=find
// })

document.getElementById("searchBox").addEventListener("click", handle);
document.getElementById("searchBox").addEventListener("blur", dehandle);

function dehandle() {
  document.getElementById("searchImage").src = "icons8-search-50.png";
}

async function handle() {
  document.getElementById("searchImage").src = "icons8-search.gif";
  document.getElementById("searchBox").style.borderRadius = "20px";
  var url = "http://192.168.203.124:3000/stock/getStock";
  var res = await fetch(url, {
    method: "GET",
  });
  find = [];
  stockNames = [];
  var data = await res.json();
  for (i = 0; i < data.length; i++) {
    stockNames.push(data[i].shortName);
  }
  console.log(stockNames);
  //   console.log(find)
}
document.getElementById("searchBox").addEventListener("keyup", () => {
  var txt = document.getElementById("searchBox").value;
  find = [];
  console.log(txt.trim().length);
  // console.log(typeof(txt))
  console.log(txt.trim().length);
  console.log(find);
  if (txt.trim().length > 0) {
    var find = stockNames.filter((x) => x.startsWith(txt));
    console.log(typeof find);
    let names = "";
    for (var i = 0; i < find.length; i++) {
      names = names + find[i] + "<br>";
    }
    // document.getElementById('dropdown1').style.padding='10px'
    document.getElementById("writer").innerHTML = names;
  } else {
    document.getElementById("writer").innerHTML = " ";
  }
});
const navbarItem = document.querySelector("li");
const dropdown = navbarItem.querySelector(".dropdown1");

navbarItem.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
});

navbarItem.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});
document.getElementById("s").addEventListener("click", () => {
  var txt = document.getElementById("searchBox").value;
  window.sessionStorage.setItem("stockname", txt);
  window.location.href = "stockStructure.html";
});
