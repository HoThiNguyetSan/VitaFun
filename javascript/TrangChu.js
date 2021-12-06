var bestseller=Array.from(document.querySelectorAll('.bestseller-list>div')) 
var newproduct=Array.from(document.querySelectorAll('.newproduct-list>div')) 

window.addEventListener('resize',function(){
    var c=screen.width
 
    if(c<378){
        for(var i=2;i<bestseller.length;i++){
          
            bestseller[i].style.display='none'
        }
    }
    else{
        for(var i=0;i<bestseller.length;i++){
           
            bestseller[i].style.display='block'
        }
    }
   
})
window.addEventListener('resize',function(){
    var d=screen.width
 
    if(d<378){
        for(var i=3;i<newproduct.length;i++){
            
            newproduct[i].style.display='none'
        }
    }
    else{
        for(var i=0;i<newproduct.length;i++){
           
            newproduct[i].style.display='block'
        }
    }
   
})

document.getElementById('chk-bestmore').addEventListener('click',function(){
    for(var i=0;i<bestseller.length;i++){        
        bestseller[i].style.display='block'       
    }
    document.getElementById('chk-bestmore').style.display='none'
})

document.getElementById('chk-newmore').addEventListener('click',function(){
    for(var i=0;i<newproduct.length;i++){        
        newproduct[i].style.display='block'       
    }
    document.getElementById('chk-newmore').style.display='none'
})

 