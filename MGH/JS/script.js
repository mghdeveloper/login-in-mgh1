function togglePasswordVisibility() {
  var passwordField = document.getElementById("passwordField");
  var passwordToggle = document.querySelector(".password-toggle");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordField.type = "password";
    passwordToggle.textContent = "Show";
  }
}
function open_page_of_verifecation(){
  var inputField = document.getElementById("username_inputid");
  var errorMessage = document.getElementById("user_errorMessageid");
  var inputField1 = document.getElementById("emeil_inputid")
  var errorMessage1 = document.getElementById("email_errorMessageid")
  var inputField2 = document.getElementById("password_inputid")
  var errorMessage2 = document.getElementById("password_errorMessageID")
  var inputField3 = document.getElementById("con_password_inputid")
  var errorMessage3 = document.getElementById("con_password_errorMessageID")
  var passwordInput = document.getElementById("password_inputid");
  var confirmInput = document.getElementById("con_password_inputid");
  var errorMessage4 = document.getElementById("conpass_dif_pass_id");
  var tryerrorMessage = document.getElementById("tryagainid");
  var gmailInput = document.getElementById("emeil_inputid");
  var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  function validateInput() {

    if (inputField.value.trim() === "") {
      errorMessage.style.display = "block";
    }
    else {
      errorMessage.style.display = "none";
    }
    if (inputField1.value.trim() === "") {
      errorMessage1.style.display = "block";
    }
    else {
      errorMessage1.style.display = "none";
    }
    if (inputField2.value.trim() === "") {
      errorMessage2.style.display = "block";
    }
    else {
      errorMessage2.style.display = "none";
    }
    if (inputField3.value.trim() === "") {
      errorMessage3.style.display = "block";
    }
    
    else {
      errorMessage3.style.display = "none";
    }
  }
  
  function validateGmail(){
    if (gmailPattern.test(gmailInput.value.trim())) {

    } 
    else {
      alert("Gmail address is not valid!");}
  }
  function validteavalidategmail(){
    if (inputField.value.trim()!=="" , inputField1.value.trim()!=="" , inputField2.value.trim()!=="",inputField3.value.trim()!==""){
      validateGmail()
    }
  }
  function comparePasswords() {

    if (passwordInput.value.trim() === confirmInput.value.trim()) {
      
    } 
    else {
      alert("The password you entered does not match the one you confirmed!,please try again.");
    }
  }
  function vcmp(){
    if (inputField.value.trim()!=="" , inputField1.value.trim()!=="" , inputField2.value.trim()!=="",inputField3.value.trim()!=="" , gmailPattern.test(gmailInput.value.trim())){
      alert("The password you entered does not match the one you confirmed!,please try again.");
    }
  }
  function resume(){
    validateInput()
    validteavalidategmail()
    vcmp()
  }
    
    

  if (inputField.value.trim()!=="" , inputField1.value.trim()!=="" , inputField2.value.trim()!=="",inputField3.value.trim()!=="" , gmailPattern.test(gmailInput.value.trim()), passwordInput.value.trim() === confirmInput.value.trim() ){
    window.location.href = "verify.html";
  
  }
  else {
    resume()
  }
}