//Login with google using oAuth Google API 


document.addEventListener('DOMContentLoaded', function () {
    const googleSignInBtn = document.getElementById('google-sign-in-btn');
    googleSignInBtn.addEventListener('click', function (event) {
        signIn(event);
    });
});



function signIn(event) {
    event.preventDefault();

    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', oauth2Endpoint)


    let params = {
        "client_id": "819499027932-7cjrchl64hj4909san3i6p8cn5ofldqh.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5502/home.html",
        // create your client id and redirect_uri from google ref:https://www.youtube.com/watch?v=XiuA-xO5Pz8
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    }
    // http://demo.careerpavers.com
    for (var p in params) {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', p)
        input.setAttribute('value', params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
}

//End of Login with google using oAuth Google API





// form validation
// function to to check email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// function to check password characters
function isPasswordLong(pwd) {
    const pwdRegex = /^.{6,}$/;
    return pwdRegex.test(pwd);
}
function isPasswordspecal(pwd) {
    const pwdRegex = /.*[!@#$%^&*()_+{}|:"<>?~`\-=[\];',./].*/;
    return pwdRegex.test(pwd);
}
function isPasswordupper(pwd) {
    const pwdRegex = /^(?=.*[A-Z])/;
    return pwdRegex.test(pwd);
}

// function to add message in alert
function setalertmsg(id, msg) {
    ele = document.getElementById(id);
    ele.getElementsByClassName('formerror')[0].innerText = msg;
}

function validateform() {
    let returnval = true;

    // for proper format of mail and mail shouldn't be too long.
    var email = document.forms['myform']['email'].value;
    if (email.length > 28) {
        let a = document.getElementById('forth')
        a.classList.remove('d-none');
        setalertmsg("eb", "Length of your email is too big!");
        returnval = false;
    } else if (!isValidEmail(email)) {
        let a = document.getElementById('forth')
        a.classList.remove('d-none');
        setalertmsg("eb", "Invalid email format!");
        returnval = false;
    } else {
        let a = document.getElementById('forth')
        a.classList.add('d-none');
    }

    // for password validation
    var pwd = document.forms['myform']['password'].value;
    if (!isPasswordLong(pwd)) {
        let a = document.getElementById('fifth')
        a.classList.remove('d-none');
        setalertmsg("pb", "Minimum six characters!");
        returnval = false;
    } else if (!isPasswordspecal(pwd)) {
        let a = document.getElementById('fifth')
        a.classList.remove('d-none');
        setalertmsg("pb", "One special characters!");
        returnval = false;
    } else if (!isPasswordupper(pwd)) {
        let a = document.getElementById('fifth')
        a.classList.remove('d-none');
        setalertmsg("pb", "One uppercase characters!");
        returnval = false;
    }
    else {
        let a = document.getElementById('fifth')
        a.classList.add('d-none');
    }

    // final message for form submissiion
    if (returnval == true) {
        let a = document.getElementById('first')
        a.classList.remove('d-none');
        a.firstElementChild.innerText = "Login successfully!"
    }
    return false;
}