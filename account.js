document.getElementById("deposit_button").addEventListener("click",function(){
    const depoAmmount = document.getElementById("deposit_input")
    const intdepo = parseFloat(depoAmmount.value)
    // console.log(typeof(intdepo));
    const money = document.getElementById("depoTotal");
    const total = document.getElementById("balTotal");
    


    const intmoney = parseFloat(money.innerText)
    const intTotal = parseFloat(total.innerText)
    // console.log(intdepo,intmoney,intTotal);
    
    if (isNaN(intdepo) == false){
        total.innerText = intdepo + intTotal;
        money.innerText = intmoney+intdepo;
    }
    else{
        alert("Please give a number")
    }

    depoAmmount.value="";

})

document.getElementById("withdraw_button").addEventListener("click",function(){
    const withAmmount = document.getElementById("withdraw_input")
    const intwith = parseFloat(withAmmount.value)
    // console.log(intwith);
    const money = document.getElementById("withTotal");
    const total = document.getElementById("balTotal");


    const intmoney = parseFloat(money.innerText);
    const intTotal = parseFloat(total.innerText)
    // console.log(intwith,intmoney,intTotal);
    if (isNaN(intwith) == false) {
        if (intwith <= intTotal ) {
            total.innerText = intTotal-intwith;
            money.innerText = intmoney+intwith;
            withAmmount.value="";
        }
        else{
            alert("you haven't money")
            withAmmount.value="";
        }
        
        
    }
    else{
        alert("Please give a number")
        withAmmount.value="";
    }
    




    
    
})