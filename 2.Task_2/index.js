function validationForm() {
  var name = document.getElementById("name");
  var comments = document.getElementById("comments");

  var male = document.getElementById("male");
  var female = document.getElementById("female");

  if (name.value == "" || comments.value == "") {
    alert("All fields are compulsory");

    if (name.value == "") {
      name.focus();
    } else {
      comments.focus();
    }
    return false;
  }

  if (!male.checked && !female.checked) {
    alert("All fields are compulsory");
    return false;
  }
  alert("Your Record has been saved!");
  return true;
}
