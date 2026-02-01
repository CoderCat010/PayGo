document.getElementById('login-btn').addEventListener('click', function(event){
   event.preventDefault();

   // get account number
   const account = document.getElementById('accountNumber').value;

   // get password 
   const password = document.getElementById('passwordInfo').value;

   // check if pin and account number is valid 
   if(account.length === 11){
      if(password.length === 4){
         window.location.href = './dashboard.html'
      }else{
         alert('Please provide valid pin number') 
      }
   }else{
      alert('Please provide valid account number')
   }

})