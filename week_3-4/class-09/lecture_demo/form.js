function evaluateForm(submittedForm) {
  var formIsValid = true;
  if (submittedForm.first.value == "") {
    submittedForm.first.setAttribute("class", "required");
    formIsValid = false;
  }
  if (submittedForm.last.value == "") {
    submittedForm.last.setAttribute("class", "required");
    formIsValid = false;
  }
  if (submittedForm.email.value == "") {
    submittedForm.email.setAttribute("class", "required");
    formIsValid = false;
  }
  var fullName = submittedForm.first.value + " " + submittedForm.last.value;
  var email = submittedForm.email.value;
  var phone = submittedForm.phone.value;
  if (formIsValid) {
    var displayArea = document.getElementById("display-area");
    displayArea.innerHTML = fullName+"<br>"+email+"<br>"+phone;
  }
}
