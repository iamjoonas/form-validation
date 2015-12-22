var errorMessage = document.getElementById("error_message");

function validatePassword(password) {
	return password.length >= 5;
}

function validateEmail(email) {
  var re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return re.test(email);
}

function validateName(name) {
	var re = /\S/;
	return re.test(name);
}

function validateForm() {
	var name = document.forms[0].name.value;
	var email = document.forms[0].email.value;
	var password = document.forms[0].password.value;
	if (!validatePassword(password) || !validateEmail(email) || !validateName(name)) {
		errorMessage.style.display = "block";
		return false;
	}
	return true;
}