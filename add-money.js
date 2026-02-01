document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault()

    // get add amount
    const addAmount = document.getElementById('add-amount').value;
    // convert amount type into number
    const convertedAmount = parseInt(addAmount)
    console.log(typeof convertedAmount);


    //  get pin number
    const pin = document.getElementById('pin-number').value;
    // convert pin type into number
    const convertedPin = parseInt(pin);
    console.log(convertedPin);


    // get current balance
    const balance = document.getElementById('current-balance').textContent;
    // convert balance type into number 
    const convertedBalance = parseInt(balance);


    // sum amount and current balance and update current balance
    if(pin.length === 4){
        const balanceSum = convertedAmount + convertedBalance;
        document.getElementById('current-balance').textContent = balanceSum;
    }else{
        alert('pin must be 4 digits')
    }
    
})
