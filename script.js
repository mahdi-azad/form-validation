

function showError(message) {
    const errorElement = document.getElementById("demo")
    errorElement.textContent = message;
}

//email validator
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate() {
    const nameEle = document.getElementById("name").value;
    const emailEle = document.getElementById("email").value;
    const phoneEle = document.getElementById("phone").value;
    const subjectEle = document.getElementById("subject").value;
    const passwordEle = document.getElementById("password").value;
    const confirmEle = document.getElementById("confirmPassword").value;
    const termsEle = document.getElementById("terms").checked;


    if (nameEle === "") {
        showError("Name cannot be empty")
        return false
    }

    if (emailEle === "") {
        showError("Email cannot be empty")
        return false
    } else if (!validateEmail(emailEle)) {
        showError("Please enter a valid email")
        return false
    }

    if (phoneEle === "" || phoneEle.length !== 10) {
        showError("Enter your 10 digit phone number")
        return false
    }

    if (subjectEle === "0") {
        showError("Please select a subject")
        return false
    }

    if (passwordEle === "0" || passwordEle.length <= 5) {
        showError("Please enter a password with at least 5 characters")
        return false
    }
    if (confirmEle !== passwordEle) {
        showError("Password and confirmation do not match!")
        return false
    }

    if (termsEle == false) {
        showError("Please agree to the terms and conditions")
        return false
    }

    alert("Form submitted successfully!")
}