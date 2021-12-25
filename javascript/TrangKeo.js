let app = angular.module("CandyApp",[])
app.controller("CandyController",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Products.json"
    })
    .then(
        function success(response){
            $scope.ListCandy = response.data                   
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