// Check if the "Remember Me" checkbox is selected and set the cookie accordingly
function rememberMe() {
    var checkbox = document.getElementById("rememberMe");
    if (checkbox.checked) {
      // Set cookie with a 30-day expiration time
      var expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      document.cookie = "exampleInputEmail1=" + encodeURIComponent(document.getElementById("exampleInputEmail1").value) + "; expires=" + expirationDate.toUTCString();
    } else {
      // Remove the cookie if the checkbox is unchecked
      document.cookie = "exampleInputEmail1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }
  
  // Check if a exampleInputEmail1 cookie exists and populate the login form
  function checkRememberMe() {
    var exampleInputEmail1Input = document.getElementById("exampleInputEmail1");
    var rememberMeCheckbox = document.getElementById("rememberMe");
  
    // Get the exampleInputEmail1 from the cookie
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0] === "exampleInputEmail1") {
        var exampleInputEmail1 = decodeURIComponent(cookie[1]);
        exampleInputEmail1Input.value = exampleInputEmail1;
        rememberMeCheckbox.checked = true;
        break;
      }
    }
  }

  // Call checkRememberMe() when the page loads
window.addEventListener("load", checkRememberMe);

// Attach rememberMe() to the form's submit event
var form = document.querySelector("form");
form.addEventListener("submit", rememberMe);

  