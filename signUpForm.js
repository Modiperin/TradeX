function ngoCreateEvent(){
	location.href = "NGOEvent.jsp";
}

function ngoProfilePosts(){
	location.href = "NGOPOST.jsp";
}

const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')
const stepMenuFour = document.querySelector('.formbold-step-menu4')

const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')
const stepFour = document.querySelector('.formbold-form-step-4')

let found = true;
const formSubmitBtn = document.querySelector('.formbold-btn')
const formBackBtn = document.querySelector('.formbold-back-btn')
const formBackBtn1 = document.querySelector('.formbold-back-btn1')
const formBackBtn2 = document.querySelector('.formbold-back-btn2')
const subBtn=document.querySelector('.subBtn')
let textOnly = /^[a-zA-Z ]+$/
let digitsOnly = /^[0-9]+$/
let emailOnly = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/
var passwordOnly=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var finalName=""
var finalMobile
var finalEmail
var finalPassword


var isError3=false
subBtn.addEventListener("click",function(event){
	isError3=false
	console.log('special btn')
	var email=document.getElementById('email').value;
	console.log(email)
		if (email == "" || email.trim().length == 0) {
            // alert("First name is Required..")
            isError3 = true
            // error += "First name is Required.. \n"
            document.getElementById('erremail').innerHTML = " * email is Required.."
        }
        else if(emailOnly.test(email)==false){
            document.getElementById('erremail').innerHTML = " * email should be in Proper format only"
			isError3 = true
        }
		else{
			document.getElementById('erremail').innerHTML = ""
			finalEmail=email
		}
		var password=document.getElementById('password').value;
		console.log(password)
		if (password == "" || password.trim().length == 0) {
            // alert("First name is Required..")
            isError3 = true
            // error += "First name is Required.. \n"
            document.getElementById('errpass').innerHTML = " * Password is Required.."
        }
        else if(passwordOnly.test(password)==false){
            document.getElementById('errpass').innerHTML = " * Password must contain uppercase,lowercase,special characters and digits"
			isError3 = true
        }
		else{
			document.getElementById('errpass').innerHTML = ""
			finalPassword=password
		}
		let cpassword=document.getElementById('cpassword').value;
		console.log(cpassword)
		if(cpassword!=password)
		{
			isError3 = true
			document.getElementById('errcpass').innerHTML = " *confirm password and password must be same"
		}
		else{
			document.getElementById('errcpass').innerHTML = ""
		}
})

formSubmitBtn.addEventListener("click", function(event) {
	event.preventDefault()
	let isError1=false
	if (stepMenuOne.className == 'formbold-step-menu1 active') {
		event.preventDefault()
		found = true;
		console.log("stepone to stepTwo ")
		var firstname=document.getElementById('firstName').value;
		if (firstname == "" || firstname.trim().length == 0) {
            // alert("First name is Required..")
            isError1 = true
            // error += "First name is Required.. \n"
            document.getElementById('errFn').innerHTML = " * First name is Required.."
        }
        else if(textOnly.test(firstname)==false){
            document.getElementById('errFn').innerHTML = " * First name should be in aphabates only"
			isError1 = true
        }
		else{
			document.getElementById('errFn').innerHTML = ""
			finalName=firstname
		}


		let dob=document.getElementById('dob').value;
		if (dob == "" || dob.trim().length == 0) {
            isError1 = true
            document.getElementById('errdob').innerHTML = " * Birth name is Required.."
        }
		else{
			document.getElementById('errdob').innerHTML = ""
		}


		var mobile=document.getElementById('mobile').value;
		if (mobile == "" || mobile.trim().length == 0) {
            // alert("First name is Required..")
            isError1 = true
            // error += "First name is Required.. \n"
            document.getElementById('errmob').innerHTML = " * Mobile Number is Required.."
        }
		else{
			document.getElementById('errmob').innerHTML = ""
			finalMobile=mobile
		}


		let aadhar=document.getElementById('aadhar').value;
		if (aadhar == "" || aadhar.trim().length == 0) {
            // alert("First name is Required..")
            isError1 = true
            // error += "First name is Required.. \n"
            document.getElementById('erraadhar').innerHTML = " * Aadhar Card Number is Required.."
        }
        else if(digitsOnly.test(aadhar)==false){
            document.getElementById('erraadhar').innerHTML = " * Aadhar Card should be in digits only"
			isError1 = true
        }
		else{
			document.getElementById('erraadhar').innerHTML = ""
		}
		

		let pan=document.getElementById('pan').value;
		if (pan == "" || pan.trim().length == 0) {
            // alert("First name is Required..")
            isError1 = true
            // error += "First name is Required.. \n"
            document.getElementById('errpan').innerHTML = " * Pan Number is Required.."
        }
        else if(digitsOnly.test(pan)==false){
            document.getElementById('errpan').innerHTML = " * Pan No should be in digits only"
			isError1 = true
        }
		else{
			document.getElementById('errpan').innerHTML = ""
		}


		let address=document.getElementById('Address').value;
		if (address == "" || address.trim().length == 0) {
            // alert("First name is Required..")
            isError1 = true
            // error += "First name is Required.. \n"
            document.getElementById('erradd').innerHTML = " * Address is Required.."
        }
		else{
			document.getElementById('erradd').innerHTML = ""
		}
		if(!isError1)
		{
			stepMenuOne.classList.remove('active')
			stepMenuTwo.classList.add('active')
			stepOne.classList.remove('active')
			stepTwo.classList.add('active')

			if (found == true) {
				formBackBtn.classList.add('active')
			}
		}
		formBackBtn.addEventListener("click", function(event) {
			event.preventDefault()
			found = false;
			console.log("stepTwo to stepone ")
			stepMenuOne.classList.add('active')
			stepMenuTwo.classList.remove('active')
			stepOne.classList.add('active')
			stepTwo.classList.remove('active')
			if (found == false) {
				formBackBtn.classList.remove('active')
			}
			
		formSubmitBtn.textContent = 'Next Step'
		})
		
		
	} else if (stepMenuTwo.className == 'formbold-step-menu2 active') {
		event.preventDefault()
		let isError2=false
		let accountName=document.getElementById('accountName').value;
		if (accountName == "" || accountName.trim().length == 0) {
            // alert("First name is Required..")
            isError2 = true
            // error += "First name is Required.. \n"
            document.getElementById('erraccname').innerHTML = " * Account name is Required.."
        }
        else if(textOnly.test(accountName)==false){
            document.getElementById('erraccname').innerHTML = " * Account name should be in aphabates only"
			isError2 = true
        }
		else{
			document.getElementById('erraccname').innerHTML = ""
		}


		let accountNo=document.getElementById('accountNo').value;
		if (accountNo == "" || accountNo.trim().length == 0) {
            // alert("First name is Required..")
            isError2 = true
            // error += "First name is Required.. \n"
            document.getElementById('erraccno').innerHTML = " * Account Number is Required.."
        }
		else{
			document.getElementById('erraccno').innerHTML = ""
		}


		let ifsc=document.getElementById('ifsc').value;
		if (ifsc == "" || ifsc.trim().length == 0) {
            // alert("First name is Required..")
            isError2 = true
            // error += "First name is Required.. \n"
            document.getElementById('errifsc').innerHTML = " * IFSC Code is Required.."
        }
		else{
			document.getElementById('errifsc').innerHTML = ""
		}


		let branchName=document.getElementById('BranchName').value;
		if (branchName == "" || branchName.trim().length == 0) {
            // alert("First name is Required..")
            isError2 = true
            // error += "First name is Required.. \n"
            document.getElementById('errbn').innerHTML = " * Branch name is Required.."
        }
        else if(textOnly.test(branchName)==false){
            document.getElementById('errbn').innerHTML = " * Branch name should be in aphabates only"
			isError2 = true
        }
		else{
			document.getElementById('errbn').innerHTML = ""
		}


		let bAddress=document.getElementById('bAddress').value;
		if (bAddress == "" || bAddress.trim().length == 0) {
            // alert("First name is Required..")
            isError2 = true
            // error += "First name is Required.. \n"
            document.getElementById('errbadd').innerHTML = " * Branch Address is Required.."
        }
		else{
			document.getElementById('errbadd').innerHTML = ""
		}

		if(!isError2)
		{
			found = true;
			console.log("stepTwo to stepThree")
			stepMenuTwo.classList.remove('active')
			stepMenuThree.classList.add('active')
			stepTwo.classList.remove('active')
			stepThree.classList.add('active')
			formBackBtn.classList.remove('active')
			if (found == true) {
				formBackBtn1.classList.add('active')
			}
		}
		
		formBackBtn1.addEventListener("click", function(event) {
			event.preventDefault()
			found = false;

			console.log("stepThree to stepTwo")

			stepMenuTwo.classList.add('active')
			stepMenuThree.classList.remove('active')
			stepMenuOne.classList.remove('active')

			stepTwo.classList.add('active')
			stepThree.classList.remove('active')
			stepOne.classList.remove('active')
			formBackBtn1.classList.remove('active')
			formBackBtn.classList.add('active')
			
		formSubmitBtn.textContent = 'Next Step'
		})
		

	} else if (stepMenuThree.className == 'formbold-step-menu3 active') {
		event.preventDefault()
		console.log('stepthree to stepfour')
		
		stepMenuThree.classList.remove('active')
		stepMenuFour.classList.add('active')

		subBtn.classList.add('active')
		stepThree.classList.remove('active')
		stepFour.classList.add('active')
		formBackBtn1.classList.remove('active')
		if (found == true) {
			formBackBtn2.classList.add('active')
		}
		formSubmitBtn.textContent='Submit'
		formBackBtn2.addEventListener("click", function(event) {
			event.preventDefault()

			stepMenuThree.classList.add('active')
			stepMenuFour.classList.remove('active')
			stepMenuTwo.classList.remove('active')
			subBtn.classList.remove('active')
			stepThree.classList.add('active')
			stepFour.classList.remove('active')
			stepTwo.classList.remove('active')
			formBackBtn2.classList.remove('active')
			formBackBtn1.classList.add('active')
			formSubmitBtn.textContent = 'Next Step'
		})
	}
	else if (stepMenuFour.className == 'formbold-step-menu4 active') {
		found = true;
		console.log("stepThree to stepFour")
		console.log(firstname)
		if(!isError3)
		{
			var user={
				name:finalName,
				mobile:finalMobile,
				email:finalEmail,
				password:finalPassword
			}
			console.log(user)
			window.localStorage.setItem(finalEmail, JSON.stringify(user));
			document.querySelector('form').submit()
			window.location.href='mainPage.html'
		}
	}
})
