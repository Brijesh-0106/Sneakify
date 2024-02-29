
// Navbar Toggle BUtton Javascript


const menu = document.querySelector('.menu-1');
const navbar = document.querySelector('.navbar-main-container')

menu.addEventListener('click', () => {
    menu.classList.toggle('change')
    navbar.classList.toggle('change')
})

//End of Navbar Toggle BUtton Javascript


// form validation
// function to to check email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// function to to check phone number should contain only numbers
function isValidNumber(phone) {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
}
// function to add message in alert
function setalertmsg(id, msg) {
    ele = document.getElementById(id);
    ele.getElementsByClassName('formerror')[0].innerText = msg;
}

function validateform() {
    let returnval = true;
    // for name should be more not short.
    var name = document.forms['myform']['fname'].value;
    if (name.length < 3) {
        let a = document.getElementById('second')
        a.classList.remove('d-none');
        setalertmsg("fnb", "Length of First name is too short!");
        returnval = false;
    } else {
        let a = document.getElementById('second')
        a.classList.add('d-none');
    }

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

    // for length of phone number and only digits are allowed
    var phone = document.forms['myform']['phone'].value;
    if (phone.length != 10) {
        let a = document.getElementById('third')
        a.classList.remove('d-none');
        setalertmsg("pnb", "Phone number should be of 10 digits only!");
        returnval = false;

    } else if (!isValidNumber(phone)) {
        let a = document.getElementById('third')
        a.classList.remove('d-none');
        setalertmsg("pnb", "Phone number should contain numbers only!");
        returnval = false;
    } else {
        let a = document.getElementById('third')
        a.classList.add('d-none');
    }

    // final message for form submissiion
    if (returnval == true) {
        let a = document.getElementById('first')
        a.classList.remove('d-none');
        a.firstElementChild.innerText = "Form submitted successfully!"
    }
    return returnval;
}

// fetching dynammic data
const list = document.querySelector('.swiper-wrapper')

let products = [
    {
        id: 1,
        name: "Adidas Stan Smith",
        image: "http://127.0.0.1:5502/images/bestseller-img-1.png",
        price: 20000,
        wrongprice: 1000,
    },
    {
        id: 2,
        name: "New Balance 574",
        image: "http://127.0.0.1:5502/images/bestseller-img-2.png",
        price: 20000,
        wrongprice: 2000,
    },
    {
        id: 3,
        name: "Nike Air Force 1 Low '07 - White",
        image: "http://127.0.0.1:5502/images/bestseller-img-3.png",
        price: 30000,
        wrongprice: 3000,
    },
    {
        id: 4,
        name: "Converse Chuck Taylor All-Star",
        image: "http://127.0.0.1:5502/images/bestseller-img-4.png",
        price: 40000,
        wrongprice: 4000,
    },
    {
        id: 5,
        name: "Veja V-10",
        image: "http://127.0.0.1:5502/images/bestseller-img-5.png",
        price: 50000,
        wrongprice: 5000,
    },
    {
        id: 6,
        name: "Comet X Lows Ash",
        image: "http://127.0.0.1:5502/images/bestseller-img-6.png",
        price: 10000,
        wrongprice: 1000,
    },
]

let listcards = [];

const initapp = () => {
    products.forEach((value, key) => {
        let newdiv2 = document.createElement("div");
        newdiv2.classList.add('swiper-slide');
        newdiv2.innerHTML = `<div class="section-4-card"><a href="sneaker-description-2.html" onclick="localStorage.setItem('keyid', ${value.id})"><img src="${value.image}" class="section-4-card-image"><div class="section-card-price-container"><h1 class="section-card-price">${value.price.toLocaleString()}&#8377</h1><span>${value.wrongprice.toLocaleString()}&#8377</span></div><div href="#" class="section-card-name-link">${value.name}</div></a></div>`
        list.appendChild(newdiv2);
    })
}
initapp()

