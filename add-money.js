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
        div1Img.src = './images/wallet1.png';
        div1Img.style.backgroundColor = '#e5e5e5'
        div1Img.style.padding = '10px';
        div1Img.style.borderRadius = '100%';
        div1.appendChild(div1Img);


        // child 2
        const div2 = document.createElement('div');
        const div2_h3ag = document.createElement('h3');
        div2_h3ag.textContent = 'Added Money';
        div2_h3ag.style.fontWeight = '600';
        div2_h3ag.style.color = '#383838'

        const div2_pTag = document.createElement('p');
        // time
        const time = new Date()
        const hours = time.getHours() % 12 || 12;
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        div2_pTag.textContent = formattedTime;
        div2_pTag.style.fontSize = '16px';
        div2_pTag.style.color = '#707070';
        div2.style.display = 'flex';
        div2.style.flexDirection = 'column';
        div2.style.flexGrow = '1'; 
        div2.style.marginLeft = '15px';
        div2.appendChild(div2_h3ag);
        div2.appendChild(div2_pTag);

        // child 3
        const child3_pTag = document.createElement('p');
        child3_pTag.textContent = `${addAmount}tk`;

        // apend all child to their parent div
        history.appendChild(div1);
        history.appendChild(div2);
        history.appendChild(child3_pTag);
        history.style.display = 'flex';
        history.style.justifyContent = 'space-between';
        history.style.alignItems = 'center';
        history.style.padding = '15px 20px';
        history.style.backgroundColor = 'white';
        history.style.borderRadius = '10px'
        history.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';


        // get transaction history
        const transaction = document.getElementById('history-container');
        transaction.appendChild(history);
        transaction.style.display = block;
    }else{
        alert('pin must be 4 digits')
    }
    
})
