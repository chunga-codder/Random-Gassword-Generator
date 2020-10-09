  
var lowercase = "abcdefghijklmnopqrstuvwxyz",// asigning my characters to var 
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers = "0123456789",
punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",

lowercaseInput = document.getElementById("lowercase"),//setting a short hand for a cleaner code
uppercaseInput = document.getElementById("uppercase"),
punctuationInput = document.getElementById("punctuation"),
numbersInput = document.getElementById("numbers"),
lengthInput = document.getElementById("length"),
passwordFeild = document.getElementById("password"),
generateButton = document.getElementById("generate"),
copyButton = document.getElementById("copy"),
plength,
userPassword,
passwordCharSet;

//setting my range slider output values to display when sliding.
function outputUpdate(){
    var range = document.getElementById("length");
    var output = document.getElementById("slider");
    output.innerHTML = range.value;
    range.oninput = function() {
    output.innerHTML = this.value;
  }
}
//setting my generate function to be called on an onclick on generate
function generate() {
userPassword = "";
passwordCharSet = "";

//setting my if conditions for my check boxes,which will add the password charset to my cheked boxgi
if (lowercaseInput.checked) {
  passwordCharSet += lowercase;
}
if (uppercaseInput.checked) {
  passwordCharSet += uppercase;
}
if (punctuationInput.checked) {
  passwordCharSet += punctuation;
}
if (numbersInput.checked) {
  passwordCharSet += numbers;
}
plength = Number(lengthInput.value);

for (let i = 0; i < plength; i++) {
  userPassword += passwordCharSet.charAt(
    Math.floor(Math.random() * passwordCharSet.length)
  );
 // setting an alert for users to make sure they chose a check box
}
if (userPassword == "") {
  let alertbox = document.getElementById('alert');
  alertbox.innerHTML = "Please select atleast one option"
  alertbox.classList.add('fail');
  setTimeout(function(){ 
    alertbox.classList.remove('fail');
  }, 3000);
} else {
  passwordFeild.innerHTML = userPassword;
}
}
generateButton.addEventListener("click", generate);