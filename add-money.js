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
        // add total balance to main balance
        const balanceSum = convertedAmount + convertedBalance;
        document.getElementById('current-balance').textContent = balanceSum;

        // add -----> add money history to transaction history
        const history = document.createElement('div');

        // child 1
        const div1 = document.createElement('div');
        const div1Img = document.createElement('img');
        div1Img.src = './images/money1.png';
        div1.append(div1Img);

        // // child 2
        // const div2 = document.createElement('div')




        
        // // child 3
        // const div3 = document.createElement('div')

    }else{
        alert('pin must be 4 digits')
    }
    
})
