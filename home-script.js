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
        "client_id": "411007623187-ddf19tkeb68ji8fjrqj4ild7hg1iqeao.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5501/home.html",
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    }

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






// function to check email format
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


// function to to check phone number should contain only numbers
function isValidNumber(phone) {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
}

// function to add message in alert
function setalertmsg(id, msg) {
    ele = document.getElementById(id);
    ele.innerText = msg;
}

function validateform() {
    let returnval = true;
    // for name should be more not short.
    var name = document.forms['myform']['fname'].value;
    if (name.length < 3) {
        setalertmsg("fnb", "Length of First name is too short!");
        returnval = false;
    } else {
        setalertmsg("fnb", "");
    }

    // for proper format of mail and mail shouldn't be too long.
    var email = document.forms['myform']['email'].value;
    if (email.length > 28) {
        setalertmsg("eb", "Length of your email is too big!");
        returnval = false;
    } else if (!isValidEmail(email)) {
        setalertmsg("eb", "Invalid email format!");
        returnval = false;
    } else {
        setalertmsg("eb", "");
    }

    // for length of phone number and only digits are allowed
    var phone = document.forms['myform']['phone'].value;
    if (phone.length != 10) {
        setalertmsg("pnb", "Phone number should be of 10 digits only!");
        returnval = false;
    } else if (!isValidNumber(phone)) {
        setalertmsg("pnb", "Phone number should contain numbers only!");
        returnval = false;
    } else {
        setalertmsg("pnb", "");
    }

    // for password validation
    var pwd = document.forms['myform']['password'].value;
    if (!isPasswordLong(pwd)) {
        setalertmsg("pb", "password must contain Minimum six characters!");
        returnval = false;
    } else if (!isPasswordspecal(pwd)) {
        setalertmsg("pb", "password must contain a special characters!");
        returnval = false;
    } else if (!isPasswordupper(pwd)) {
        setalertmsg("pb", "password must contain a uppercase characters!");
        returnval = false;
    }
    else {
        setalertmsg("pb", "");
    }



    return false;
}