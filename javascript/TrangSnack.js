var productList = document.querySelectorAll(".product-list__container>div")
console.log(productList)
window.addEventListener('resize',function(){
    var d = screen.width
 
    if(d<378){
        for(var i=2;i<productList.length;i++){
          
            productList[i].style.display='none'
        }
    }
    else{
        for(var i=0;i<productList.length;i++){
           
            productList[i].style.display='block'
        }
    }
   
}) 


document.getElementById('chk-Snack').addEventListener('click',function(){
    for(var i=0;i<productList.length;i++){        
        productList[i].style.display='block'       
    }
    document.getElementById('chk-Snack').style.display='none'
})