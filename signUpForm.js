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

formSubmitBtn.addEventListener("click", function(event) {
	event.preventDefault()
	
	if (stepMenuOne.className == 'formbold-step-menu1 active') {
		event.preventDefault()
		found = true;
		console.log("stepone to stepTwo ")
		var firstname=document.getElementById('firstName').value;
		let dob=document.getElementById('dob').value;
		let mobile=document.getElementById('mobile').value;
		let aadhar=document.getElementById('aadhar').value;
		let pan=document.getElementById('pan').value;
		let address=document.getElementById('Address').value;
		stepMenuOne.classList.remove('active')
		stepMenuTwo.classList.add('active')
		stepOne.classList.remove('active')
		stepTwo.classList.add('active')

		if (found == true) {
			formBackBtn.classList.add('active')
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
		let accountName=document.getElementById('accountName').value;
		let accountNo=document.getElementById('accountNo').value;
		let ifsc=document.getElementById('ifsc').value;
		let branchName=document.getElementById('BranchName').value;
		let bAddress=document.getElementById('bAddress').value;
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
		let email=document.getElementById('email').value;
		let password=document.getElementById('password').value;
		let cpassword=document.getElementById('cpassword').value;
		found = true;
		console.log("stepThree to stepFour")
		stepMenuThree.classList.remove('active')
		stepMenuFour.classList.add('active')

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

			stepThree.classList.add('active')
			stepFour.classList.remove('active')
			stepTwo.classList.remove('active')
			formBackBtn2.classList.remove('active')
			formBackBtn1.classList.add('active')
			formSubmitBtn.textContent = 'Next Step'
		})
	}
	else if (stepMenuFour.className == 'formbold-step-menu4 active') {
		document.querySelector('form').submit()
		window.location.href='mainPage.html'
	}
})
