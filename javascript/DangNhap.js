
let app = angular.module("LoginApp",[])
app.controller("LoginController",function($scope,$http){
    $http({
        method:"GET",
        url:"../Data/User.json"
    })
    .then(
        function success(response){
            $scope.ListUser = response.data.user                   
        },
        function error(response){
            $scope.error = response.statusText
        }
    );    
   
    $scope.Show = function(x,y){    
        var z="Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại"
        keepGoing = true;         
        $scope.ListUser.forEach(element => {
            
            if(keepGoing == true){
                if(element.sdt==x && element.matkhau==y){              
                    z = "Đăng nhập thành công"
                    $scope.ur="../index.html"
                    keepGoing = false;
                }
            }                                        
        });
        alert(z)      
    }    
}) 




document.getElementById('show-pwd').addEventListener('click',function(){ 
    if(this.checked){
       document.getElementById('pwd').type='text'
    }
    else{
        document.getElementById('pwd').type='password'
    }
})

//Đăng nhập bằng facebook
var facebook=document.getElementById('facebook-dn'),
    email=document.getElementById('email-dn'),
    google=document.getElementById('google-dn'),
    nameLogin=document.getElementById('nameLogin')

    document.getElementById('facebook-dn').addEventListener('click',function(){               
        nameLogin.placeholder='Tên tài khoản facebook'
       
    })
       
    // Tiếp tục Email
    email.addEventListener('click',function(){        
        nameLogin.placeholder='Tên tài khoản email'
        nameLogin.type='email'
    })
    
    // Tiếp tục Google
    google.addEventListener('click',function(){        
        nameLogin.placeholder='Tên tài khoản google'      
    })


