document.getElementById('cashout').addEventListener('click', function(event){
    event.preventDefault();

    // get withdraw-amount
    const withdrawCash = document.getElementById('withdraw-amount').value;
    // convert withdraw amount type into number
    const convertedWithdrawCash = parseInt(withdrawCash);
    console.log(typeof convertedWithdrawCash);
    
    
    
    //  get pin number
    const pin = document.getElementById('cashout-pin').value;
    // convert pin type into number
    const convertedPin = parseInt(pin);
    console.log(convertedPin);


    // get current balance
    const balance = document.getElementById('current-balance').textContent;
    // convert balance type into number 
    const convertedBalance = parseInt(balance);


    // sum amount and current balance and update current balance
    if(pin.length === 4){
        const balanceSum = convertedBalance - convertedWithdrawCash;
        document.getElementById('current-balance').textContent = balanceSum;
    }else{
        alert('pin must be 4 digits')
    }
})