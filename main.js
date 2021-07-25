function checkInfo() {
  var userInputValue = document.getElementById("user-info").value,
   passwordInputValue = document.getElementById("password-info").value

  if(userInputValue == 'Tranvansu' && passwordInputValue == 'Tranvansu') {
    alert('Logged in successfully')
    document.querySelector("#check-user").innerHTML = '';
    document.querySelector("#check-password").innerHTML = '';
  }

  if (userInputValue !== 'Tranvansu' && passwordInputValue == 'Tranvansu') {
    document.querySelector("#check-user").innerHTML = 'User: Tranvansu';
    document.querySelector("#check-password").innerHTML = '';
  }

  if (userInputValue == 'Tranvansu' && passwordInputValue !== 'Tranvansu') {
    document.querySelector("#check-user").innerHTML = '';
    document.querySelector("#check-password").innerHTML = 'User: Tranvansu';
  }
  
  if (userInputValue !== 'Tranvansu' && passwordInputValue !== 'Tranvansu') {
    document.querySelector("#check-user").innerHTML = 'User: Tranvansu';
    document.querySelector("#check-password").innerHTML = 'User: Tranvansu';
  }
};

function forgotPassword() {
  alert('Quên thì thôi!')   
}



