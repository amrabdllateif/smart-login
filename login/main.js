var user = [];
user = JSON.parse(localStorage.getItem('user'))

var singInEmail = document.getElementById('signEmail');
var singInPassword = document.getElementById('signPassword');

document.getElementById('login').addEventListener('click', function () {
    if (singInEmail.value == '' || singInPassword.value == '') {
        document.getElementById('massage').innerHTML = `<p class ='text center'>all inputs is required</p>`
    } else {
        checkUser();
    }


})
function checkUser() {
    for (let i = 0; i < user.length; index++) {
        if (singInEmail.value == user[i].email && singInPassword.value == user[i].password)
            var y = user[i].name;
        localStorage.setItem('userName', y)
        location.href = '../../home/index.html';
        break;
    }
}



