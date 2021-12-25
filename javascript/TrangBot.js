let app = angular.module("BotApp",[])
app.controller("BotController",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/Products.json"
    })
    .then(
        function success(response){
            $scope.ListBot = response.data                   
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