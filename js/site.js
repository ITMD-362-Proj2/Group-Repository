// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $("html").addClass("hasjs");
});
function validForm() {
  alert("Thank you for Signing in!");
}
// Function to create and append the header and footer
function createHeader() {
  var currentLocation = window.location.pathname.split("/").pop();
  var header = document.createElement('header');
  header.id = 'sticks';
  header.innerHTML = `
    <nav id="main-navbar">
      <div class="logo">
        <img src="images/logo-icon.png" alt="LindyPress logo" width="67" >
        <img src="images/logo-title.png" alt="LindyPress title" width="234" >
      </div>
      <ul>
        <li id="option1"><a href="page-1.html">Shop</a></li>
        <li id="option2"><a href="page-2.html">About Us</a></li>
      </ul>
    </nav>
  `;
  var lastStr = currentLocation.substring(currentLocation.length-1);

  // Footer
  var footer = document.createElement('footer');
  footer.innerHTML=`
  <nav id="main-footer">
    <p>🌎 We accept all major credit cards and ship globally! 🌏</p>
    <img src="images/cards.png" alt="Credit card icons" height="30px" >
  </nav>
  `

  if(lastStr !="" && currentLocation.includes("index")==false){// Exclude the login page
    document.body.prepend(header);//adds header
    document.body.append(footer);//adds footer
  }
  
}
// Call the function to create the header and footer when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createHeader);

//Sticky Header
window.onscroll = function() {
  var header = document.getElementById("sticks");
  var sticky = header.offsetTop;

    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }