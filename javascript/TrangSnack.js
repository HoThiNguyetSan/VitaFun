let app = angular.module("SnackApp",[])
app.controller("SnackController",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Products.json"
    })
    .then(
        function success(response){
            $scope.ListSnack = response.data                   
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