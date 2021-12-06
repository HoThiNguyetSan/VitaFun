function soluong(change){
    var total=(parseInt( document.getElementById("amount").value ));
    document.getElementById("amount").value=change(total);
}
function raise(total){
      
        if(total>=1){
            total=total+1;
        }
        else total=1;

       return total;
    }
    function upraise(total){
      
        if(total>1){
            total=total-1;
        }
        else total=1;

       return total;
    }
function dieukien(total){
   if(total>=1)
   {
       total=total;
   }
   else total=1;
   return total;
}

function themvaogio(){
    alert("Đã thêm sản phẩm vào giỏ hàng")
}