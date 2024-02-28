
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