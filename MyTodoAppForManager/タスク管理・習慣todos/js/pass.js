'use strict';
{
   const password = document.getElementById('password');
   const showC = document.getElementById('showContents');
   const click = document.getElementById('click');

   click.onclick = function() {
      if(pass.input1.value == "999") {
         password.style.display = "none";
         showC.style.display = "block";
      } else {
         alert('wrong password. Try again');
      }
   }
}