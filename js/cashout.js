document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-add-money').value;
    const cashOutNumber = parseFloat(cashOut);
    const money = document.getElementById('account-money').innerText;
    const moneyNumber = parseFloat(money);
    
    const newMoney = moneyNumber - cashOutNumber;
    document.getElementById('account-money').innerText = newMoney;
})