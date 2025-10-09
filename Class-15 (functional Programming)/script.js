// Functional Programming

// Callback Functions - Starting at 10:40

function printFirstName(firstName, cb, cb2) {
  cb("Gupta");
  console.log(firstName);
  
  cb2(19);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printsAge(age) {
  console.log(age);
}
printFirstName("Gopal", printLastName, printsAge);
