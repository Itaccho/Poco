'use strict';
{
   const password = document.getElementById('password');
   const showC = document.getElementById('showContents');
   const submit1 = document.getElementById('submit1');

   submit1.addEventListener('click', (e) => {
      e.preventDefault();

      if(pass.input1.value = "99") {
         password.style.display = "none";
         showC.style.display = "block";
      } else {
         alert('wrong password. Try again');
      }
   });
}