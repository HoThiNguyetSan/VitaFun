// function Gia1(){
//     var a=document.getElementById("item1").value;
//     a = parseFloat(a);
//     var kq= 99000*a;
//     document.getElementById("kq1").value = kq;
//     document.getElementById("checkbox1").value = kq;
// }

// function Gia2(){
//     var a=document.getElementById("item2").value;
//     a = parseFloat(a);
//     var kq= 40000*a;
//     document.getElementById("kq2").value = kq;
//     document.getElementById("checkbox2").value = kq;
// } 

// document.getElementById('btn').onclick = function()
// {
//     var checkbox = document.getElementsByName('chon');
//     var result = 0;    
    
//     for (var i = 0; i < checkbox.length; i++){
//         if (checkbox[i].checked === true){           
//             var a = parseFloat(checkbox[i].value);
//             result += a ;
//         }
//     }      
//     document.getElementById('Total').innerHTML=result+'đ'      
    
// };
let app = angular.module("BestsellerApp",[])
app.controller("BestsellerProduct",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/ProductsBuyed.json"
    })
    .then(
        function success(response){
            $scope.ProductBuyed = response.data
            
        },
        function error(response){
            $scope.error = response.statusText
        }
    );   
   $scope.Tong=0
   $scope.TongAll= function(){
       return Tong+2
   }
})


