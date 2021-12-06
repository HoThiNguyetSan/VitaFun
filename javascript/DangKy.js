document.getElementById('show-pwd').addEventListener('click',function(){ 
    if(this.checked){
       document.getElementById('pwd').type='text'
    }
    else{
        document.getElementById('pwd').type='password'
    }
})

// Tiếp tục facebook
var fullName=document.querySelectorAll('.name'),
pnb=document.getElementById('pnb'),

nameLogin=document.getElementById('nameLogin')
document.getElementById('facebook').addEventListener('click',function(){
    for(var i=0;i<fullName.length;i++){
        fullName[i].style.display='none'
    }
    nameLogin.innerHTML='Tên tài khoản facebook:'
})
   
// Tiếp tục Email
document.getElementById('email').addEventListener('click',function(){
    for(var i=0;i<fullName.length;i++){
        fullName[i].style.display='none'
    }
    nameLogin.innerHTML='Tên tài khoản email:'
})

// Tiếp tục Google
document.getElementById('google').addEventListener('click',function(){
    for(var i=0;i<fullName.length;i++){
        fullName[i].style.display='none'
    }
    nameLogin.innerHTML='Tên tài khoản google:'
    pnb.type='email'
})