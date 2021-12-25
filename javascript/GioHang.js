
let app = angular.module("CartApp",[])
app.controller("CartrProduct",function($scope,$http){
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
    $scope.getAmount = function(){
        var amount = 0;
        $scope.ProductBuyed.forEach(element => {
            if(element.buy){
                amount+=element.Gia*element.Soluong
            }
            
        });
        return amount
    }
    
})

document.getElementsByTagName()
