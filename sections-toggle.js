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

    // add money card
    document.getElementById('add-money-section').style.display = 'block';
})



// cashout button & cashout section
document.getElementById('cashout-card').addEventListener('click', function(){
    // hide add money section by cashout card
    document.getElementById('add-money-section').style.display = 'none';

    // hide transfer money section by cashout card
    document.getElementById('transfer-money-section').style.display = 'none';

    // hide get bonus section by cashout card
    document.getElementById('get-bonus-section').style.display = 'none';

    // hide pay bill section by cashout card
    document.getElementById('pay-bill-section').style.display = 'none';

    // add money card
    document.getElementById('cashout-section').style.display = 'block';
})




