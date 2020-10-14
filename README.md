# Random-password-Generator

this code is to generate a randome passwork ,the user could modify the length of the password and 
also, he is able to chose from a list of uptions using check boxes if to add upper case laters,
lower case laters, numbers or special characters.

They will also have the possibility of chosing the password length with a minimum of 8 characters and a maximum of 128 characters.

# FUNCTIONALITY

 In this project, i have mainly used the math.random method and a for loop to loop throught my characters the number less than the characters length number to get 
 any random number to add to the password field depending on the password lenght the user has chosed.
 In it, i also added and if element to help me chose the function which will be executed if the user choses any check box, i think, just open the password generator,
 if you try to generate when you have not chosen any character uption, you will be alerted to chose the character type,and the length can be adjusted 
 with the range being and increament of 10 ,but you can still chose inbetween the 10 increment.
 then after chosing the length and the character set, you just go ahead and click on generate, my generate function in my sript.js will be called and it will randomly select the characters
 respecting the length and the character types you have chosen with the help of my for loop and my if statements
 
 #LINK
 you can check out the password generator here https://chunga-codder.github.io/Random-password-Generator/
 and if any forther assistace is needed ,you can write to me via github chunga-codder 
 
 
#SOME IMAGES OF HOW ITS UI LOOKS LIKE



![IMG_20201014_183832_9](https://user-images.githubusercontent.com/71171928/96025340-e2c81980-0e4c-11eb-9e44-46c84e940bfb.jpg)



![IMG_20201014_183842_8](https://user-images.githubusercontent.com/71171928/96025349-e491dd00-0e4c-11eb-840a-c491c53582c5.jpg)


THIS IS MY SRIPT .JS SOURCE CODE BELLOW 



var lowercase = "abcdefghijklmnopqrstuvwxyz",// sasigning my characters to var 
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
  copyButton.setAttribute("data-clipboard-text", userPassword)
}
  
generateButton.addEventListener("click", generate);


PLS NOTE THATA, this source code can change from time to time and the layout as i can be updatting and pushing always , but
you can vissit my commit massages to know what i have added or removed and will also be commented too.



