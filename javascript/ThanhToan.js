
let app = angular.module("PaymentApp",[])
app.controller("PaymentProduct",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/ProductsBuyed.json"
    })
    .then(
        function success(response){
            $scope.ProductPayment = response.data
                  
        },
        function error(response){
            $scope.error = response.statusText
        }
    );   
    $scope.getAmount = function(){
        var amount = 0;
        $scope.ProductPayment.forEach(element => {           
            amount+=element.Gia*element.Soluong             
    });
        return amount
    }
})



