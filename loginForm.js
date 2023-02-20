document.getElementsByClassName('css1')[2].addEventListener('click', () => {
    var email = document.getElementsByClassName('css1')[0].value
    var pass = document.getElementsByClassName('css1')[1].value
    console.log(email, pass)
    // if(email.length>0 && pass.length>0)
    // {
    //     var users=window.localStorage.getItem('modiperin@gmail.com')
    //     console.log(users,'in if')
    //     if(users==null)
    //     {
    //         console.log('No users Found')
    //         document.getElementById('noUser').innerHTML="No User Found"
    //     }
    //     else{
    //         var user=JSON.parse(users)
    //         if(pass==user.pass)
    //         {
    //             console.log('Login successfully')
    //             console.log(user)
    //             document.getElementById('detail').innerHTML="Welcome"+" "+user.name
    //             window.sessionStorage.setItem(1,JSON.stringify(user))
    //         }
    //     }

    // }
    // else(users==null)
    // {
    //     console.log('No user Found')
    // }
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
                window.location.href='mainPage.html'
            }
        }
    }
    else {
        console.log('Please Enter email ans pass')
        document.getElementById('noUser').innerHTML = "Please Enter email and password"
    }
})