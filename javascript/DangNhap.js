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


