document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    console.log(addMoney)

    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById('account-balance').innerText = newBalance
    
})