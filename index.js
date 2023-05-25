let studentId = document.forms["form"]["studentId"];
let studentFName = document.forms["form"]["studentFName"];
let studentLName = document.forms["form"]["studentLName"];
let studentBatch = document.forms["form"]["studentBatch"];
let English = document.forms["form"]["English"];
let Hindi = document.forms["form"]["Hindi"];
let Math = document.forms["form"]["Math"];
let Science = document.forms["form"]["Science"];
let history = document.forms["form"]["History"];
let Geography = document.forms["form"]["Geography"];
let Remarks = document.forms["form"]["Remarks"];
let form = document.getElementById("form");

function isNumber(value) {
  if (typeof value === "string") {
    return !isNaN(value);
  }
}

function isAlphabetic(string) {
  let strRegexAlphabetic = new RegExp(/^[a-zA-Z()]+$/);
  result = strRegexAlphabetic.test(string);
  return result;
}

function isAlphaNumeric(string) {
  let strRegex = new RegExp(/^[a-z0-9 ]+$/i);
  let result = strRegex.test(string);
  return result;
}

function clearErrors() {
  errors = document.getElementsByClassName("formError");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
  console.log(error);
}

function formValidation() {
  errorBool = true;
  clearErrors();
  if (isNumber(studentId.value) == false) {
    setError("studentId", "Student ID must be numeric");
    errorBool = false;
  }

  if (studentFName.value != "" && isAlphabetic(studentFName.value) == false) {
    setError("studentFName", "Students First name must be alphabetic");
    errorBool = false;
  }
  if (studentFName.value != "" && isAlphaNumeric(studentFName.value) == false) {
    setError("studentFName", "Students First name must be alphabetic");
    errorBool = false;
  }
  if (studentLName.value != "" && isAlphabetic(studentLName.value) == false) {
    setError("studentLName", "Students Last name must be alphabetic");
    errorBool = false;
  }
  if (studentLName.value != "" && isAlphaNumeric(studentLName.value) == false) {
    setError("studentLName", "Students Last name must be alphabetic");
    errorBool = false;
  }

  if (studentBatch.value != "" && isAlphaNumeric(studentBatch.value) == false) {
    setError("studentBatch", "Batch must be alphanumeric\n");
    errorBool = false;
  }

  if (isNumber(English.value) == false) {
    setError("English", "English marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(English.value) > 100) {
    setError("English", "English marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(English.value) < 0) {
    setError("English", "English marks must be non negative");
    errorBool = false;
  }

  if (isNumber(Hindi.value) == false) {
    setError("Hindi", "Hindi marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(Hindi.value) > 100) {
    setError("Hindi", "Hindi marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(Hindi.value) < 0) {
    setError("Hindi", "Hindi marks must be non negative ");
    errorBool = false;
  }

  if (isNumber(Math.value) == false) {
    setError("Math", "Math marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(Math.value) > 100) {
    setError("Math", "Math marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(Math.value) < 0) {
    setError("Math", "Math marks must be non negative\n ");
    errorBool = false;
  }

  if (isNumber(Science.value) == false) {
    setError("Science", "Science marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(Science.value) > 100) {
    setError("Science", "Science marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(Science.value) < 0) {
    setError("Science", "Science marks must be non negative\n ");
    errorBool = false;
  }
  if (isNumber(history.value) == false) {
    setError("History", "History marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(history.value) > 100) {
    setError("History", "History marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(history.value) < 0) {
    setError("History", "History marks must be non negative ");
    errorBool = false;
  }
  if (isNumber(Geography.value) == false) {
    setError("Geography", "Geography marks must be numeric\n ");
    errorBool = false;
  }
  if (parseInt(Geography.value) > 100) {
    setError("Geography", "Geography marks must be lesser than 100\n ");
    errorBool = false;
  }
  if (parseInt(Geography.value) < 0) {
    setError("Geography", "Geography marks must be non negative\n ");
    errorBool = false;
  }
  if (Remarks.value != "" && isAlphaNumeric(Remarks.value) == false) {
    setError("Remarks", "Remarks must be alphanumeric\n");
    errorBool = false;
  }
  return errorBool;
}
