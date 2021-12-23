var e = 4;
let app = angular.module("BestsellerApp",[])
app.controller("BestsellerProduct",function($scope,$http){
    $http({
        method:"GET",
        url:"./Data/Products.json"
    })
    .then(
        function success(response){
            $scope.BestSellerList = response.data
            
        },
        function error(response){
            $scope.error = response.statusText
        }
    );    
   
  
    
    
    $scope.lick = function(){
        $scope.number = '6'
    }
    window.addEventListener('resize',function($scope){
       
        var c=screen.width       
        if(c<800){
            alert("ok")

            $scope.number = '3'  
           
        }
        
       
    })  
})

   


// $(window).resize(function() {
// $scope.windowWidth = $( window ).width()



var bestseller=document.querySelectorAll(".ng-scope")
// var bestseller=Array.from(document.querySelectorAll('.bestseller-list>div')) 
var newproduct=Array.from(document.querySelectorAll('.newproduct-list>div')) 
console.log(bestseller)
// window.addEventListener('resize',function(){
//     var c=screen.width
//     alert(bestseller.length)
//     if(c<378){
//         for(var i=2;i<bestseller.length;i++){
          
//             bestseller[i].style.display='none'
//         }
//     }
//     else{
//         for(var i=0;i<bestseller.length;i++){
           
//             bestseller[i].style.display='block'
//         }
//     }
   
// })  
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

 


   