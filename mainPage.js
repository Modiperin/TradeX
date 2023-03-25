var loggedUser = window.sessionStorage.getItem('1')
console.log(loggedUser)
if (loggedUser != null) {
    loggedUser = JSON.parse(loggedUser)
    console.log(loggedUser.name)
    document.getElementById('welcome').innerHTML = 'Welcome ' + loggedUser.name
    // document.getElementById('welcome').innerHTML="Welcome"
}
// function callStock(stockname){
//     window.sessionStorage.setItem('stockname',stockname)
//     window.location.href='stockStructure.html'
// }

document.querySelectorAll(".planButton").forEach(elem => elem.addEventListener("click", () => {
    console.log('perin')
    document.getElementById('myModal').style.paddingLeft = "450px"

    if (loggedUser == null) {
        document.getElementById('loginDiv').addEventListener('click', () => {
            console.log('inside')
            var email = document.getElementById('emailVal').value
            var pass = document.getElementById('passVal').value
            console.log(email, pass)
            if (email.trim().length > 0 && pass.trim().length > 0) {
                console.log(email, pass)
                var users = window.localStorage.getItem(email)
                console.log(users)
                if (users == null) {
                    console.log('no user')
                    document.getElementById('noUser').innerHTML = "No User Found"
                }
                else {
                    var user = JSON.parse(users)
                    console.log(user)
                    if (pass == user.password) {
                        console.log('Login successfully')
                        console.log(user)
                        // document.getElementById('detail').innerHTML = "Welcome" + " " + user.name
                        window.sessionStorage.setItem(1, JSON.stringify(user))
                        // document.cookie = email+"="+user.email+"; expires=Wed, 05 Aug 2020 23:00:00 UTC";
                        document.cookie = "username=Max Brown; expires=Wed, 05 Aug 2020 23:00:00 UTC";
                        window.location.href = 'dashBoard.html'
                    }
                }
            }
            else {
                console.log('Please Enter email ans pass')
                document.getElementById('noUser').innerHTML = "Please Enter email and password"
            }
        })
    }
    else {
        window.location.href = 'PaymentGateway.html'
    }
}))

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.getElementById("stock").addEventListener("click", () => {
    window.location.href = "DeepDiveIntoStockMarketToday (1).html";
});

document.getElementById("insurance").addEventListener("click", () => {
    window.location.href = "insurance.html";
});

ipo = 'Ipo Will Coming Soon for More updates connect with us'
document.getElementById("ipo_").addEventListener("click", () => {
    window.localStorage.setItem('ipo', ipo)
    window.location.href = "coming-soon.html";

});
