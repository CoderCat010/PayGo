// add money button & add money section 
document.getElementById('add-money-card').addEventListener('click', function(){
    // hide cashout section by add money card
    document.getElementById('cashout-section').style.display = 'none';

    // hide transfer money section by add money card
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide get bonus section by add money card
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide pay bill section by add money card
    document.getElementById('pay-bill-section').style.display = 'none';
    
    // hide transaction section by add money card
    document.getElementById('transaction-history').style.display = 'none';

    // add money card
    document.getElementById('add-money-section').style.display = 'block';
})



// cashout button & cashout section
document.getElementById('cashout-card').addEventListener('click', function(){
    // hide add money section by transfer money
    document.getElementById('add-money-section').style.display = 'none';

    // hide transfer money section by transfer money
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide get bonus section by transfer money
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide pay bill section by transfer money
    document.getElementById('pay-bill-section').style.display = 'none';

    // hide transaction section by transfer money
    document.getElementById('transaction-history').style.display = 'none';

    // cashout card
    document.getElementById('cashout-section').style.display = 'block';
})



// transfer money button & transfer money section
document.getElementById('transfer-money-card').addEventListener('click', function(){
    // hide add money section by transfer money
    document.getElementById('add-money-section').style.display = 'none';

    // hide cashout money section by transfer money
    document.getElementById('cashout-section').style.display = 'none';

    // hide get bonus section by transfer money
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide pay bill section by transfer money
    document.getElementById('pay-bill-section').style.display = 'none';

    // hide transaction section by transfer money
    document.getElementById('transaction-history').style.display = 'none';

    // transfer money card
    document.getElementById('transfer-money-section').style.display = 'block';
})



// get-bonus button & get-bonus section
document.getElementById('get-bonus-card').addEventListener('click', function(){
    // hide add money section by get-bonus
    document.getElementById('add-money-section').style.display = 'none';

    // hide cashout money section by get-bonus
    document.getElementById('cashout-section').style.display = 'none';

    // hide transfer money section by get-bonus
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide pay bill section by get-bonus
    document.getElementById('pay-bill-section').style.display = 'none';

    // hide transaction section by get-bonus
    document.getElementById('transaction-history').style.display = 'none';

    // get-bonus card
    document.getElementById('get-bonus-section').style.display = 'block';
})



// pay bill button & get-bonus section
document.getElementById('pay-bill-card').addEventListener('click', function(){
    // hide add money section by pay bill
    document.getElementById('add-money-section').style.display = 'none';

    // hide cashout money section by pay bill
    document.getElementById('cashout-section').style.display = 'none';

    // hide transfer money section by pay bill
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide get bonus section by pay bill
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide transtion section by pay bill
    document.getElementById('transaction-history').style.display = 'none';

    // pay bill card
    document.getElementById('pay-bill-section').style.display = 'block';
})



// transaction button & transaction section 
document.getElementById('transaction-card').addEventListener('click', function(){
    // hide add money section by transaction
    document.getElementById('add-money-section').style.display = 'none';

    // hide cashout section by transaction
    document.getElementById('cashout-section').style.display = 'none';

    // hide transfer money section by transaction
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide get bonus section by transaction
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide pay bill section by transaction
    document.getElementById('pay-bill-section').style.display = 'none';

    // transaction
    document.getElementById('transaction-history').style.display = 'block';
})







