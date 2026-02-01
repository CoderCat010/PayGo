document.getElementById('login-btn').addEventListener('click', function(event){
   event.preventDefault();
   const account = document.getElementById('emailAccount').value;
   console.log(account);

   const password = document.getElementById('passwordInfo').value;
   console.log(password);
})