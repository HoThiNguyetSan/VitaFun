let app = angular.module("CakeApp",[])
app.controller("CakeController",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Products.json"
    })
    .then(
        function success(response){
            $scope.ListCake = response.data
                  
        },
        function error(response){
            $scope.error = response.statusText
        }
    );      
    $scope.ketQua = function(x){
        if(x < 10){
            return true
        } 
    }
})  