let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  if (isEmpty()) {
    console.warn("You must enter some data to submit this form");
    return;
  }

  console.log("===========FORM SUBMITION===========");
  if (form.elements.username.value != "") {
    console.log("Username: " + form.elements.username.value);
  } else {
    console.log("Username: no submission");
  }
  if (form.elements.email.value != "") {
    console.log("Email: " + form.elements.email.value);
  } else {
    console.log("Email: no submission");
  }
  if (form.elements.yes.checked) {
    console.log("Newsletter: Yes");
  } else if (form.elements.no.checked) {
    console.log("Newsletter: No");
  } else {
    console.log("Newsletter: no submission");
  }
  if (form.elements.date.value != "") {
    console.log("Date: " + form.elements.date.value);
  } else {
    console.log("Date: no submission");
  }
}

function isEmpty() {
  let flag = 0;
  if (form.elements.username.value == "") {
    flag++;
  }
  if (form.elements.email.value == "") {
    flag++;
  }
  if (form.elements.password.value == "") {
    flag++;
  }
  if (form.elements.yes.checked) {
    return false;
  } else if (form.elements.no.checked) {
    return false;
  } else {
    flag++;
  }
  if (form.elements.date.value == "") {
    flag++;
  }
  if (flag == 5) {
    return true;
  }

  return false;
}
