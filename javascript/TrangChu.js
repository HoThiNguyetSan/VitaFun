
let app = angular.module("HomeApp",[])
app.controller("ProductController",function($scope,$http){
    $http({
        method:"GET",
        url:"./Data/Products.json"
    })
    .then(
        function success(response){
            $scope.ListProduct = response.data
            
        },
        function error(response){
            $scope.error = response.statusText
        }
    );      
  
})  
