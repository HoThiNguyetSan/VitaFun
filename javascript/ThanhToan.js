var txtQuantity=Array.from(document.querySelectorAll('.txtQuanti')),
    price=Array.from(document.querySelectorAll('.payment-product__price')),
    money=Array.from(document.querySelectorAll('.payment-product__money')),
    totalOrder=document.getElementById('totalOrder'),
    feeDelive=document.getElementById('feeDelive'),
    totalPayment=document.getElementById('totalPayment')
  

for(var i=0;i<txtQuantity.length;i++){
    txtQuantity[i].addEventListener('change',function(e){        
        var c=e.target.id
        console.log(c)
        money[c].innerHTML=parseFloat(price[c].innerHTML)*parseFloat(txtQuantity[c].value)+'đ'
        var tong=0;

        for(var z=0;z<txtQuantity.length;z++){
            
            tong+=parseFloat(money[z].innerHTML)
        }
        console.log(tong)
        totalOrder.innerHTML=tong+'đ';

        if(parseFloat(totalOrder.innerHTML)>500000){
            feeDelive.innerHTML='0đ'
        }
        else if(parseFloat(totalOrder.innerHTML)>250000){
            feeDelive.innerHTML='5000đ'
        }
        else{
            feeDelive.innerHTML='10000đ'
        }

        totalPayment.innerHTML=parseFloat(totalOrder.innerHTML)+parseFloat(feeDelive.innerHTML)
        
    })
}



