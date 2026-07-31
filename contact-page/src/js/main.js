const formElement = document.querySelector(".form");
const spanElement = document.querySelector(".error-message");

formElement.addEventListener("submit", (e) => {

	let formData = new FormData(formElement);

	let data = Object.fromEntries(formData.entries());

	const { name, email, company, subject, message } = data;

	validFields(name, email, company, subject, message);

	e.preventDefault();

})

function validFields(name, email, company, subject, message) {

	if (name == "" || email == "" || company == "" || subject == "" || message == "") {
		spanElement.style.display = "block";
		return;
	} 
	else {
		spanElement.style.display = "none";
		formElement.reset();
	}

}