var signUpName=document.getElementById('signName');
var signUpEmail=document.getElementById('signEmail');
var signUpPassword=document.getElementById('signPassword');
varuser =[];

if(localStorage.getItem('user')  =null){
    user =JSON.parse(localStorage.getItem('user'))
}else{
    user =[];
}



function add(){
    if(signUpName.value=='' || signUpEmail.value=='' || signUpPassword.value=='' ){
        document.getElementById('massage').innerHTML= `<p class ='text center'>all inputs is required</p>`
    }else{
        var obj ={
            name :signUpName.value,
            email:signUpEmail.value,
            password :signUpPassword.value,
        }

        UserActivation.push(obj);
        location.href ='../../login/index.html';
        localStorage.setItem('user',JSON.stringify(user));
    }
}

