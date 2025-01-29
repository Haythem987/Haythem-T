class User {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

let userList = []
const resultTextDom = document.getElementById('resultText')

function register(email, username, password) {
    if (userList.find(user => user.email === email)) {
        resultTextDom.innerText = "User already exists!"
        return
    }

    let user = new User(email, username, password)
    userList.push(user)
    resultTextDom.innerText = "User registered successfully!"
}

function login(email, password) {
    let user = userList.find(user => user.email === email)
    if (!user) {
        resultTextDom.innerText = "User not found!"
        return
    }
    if (user.password !== password) {
        resultTextDom.innerText = "Password incorrect!"
        return
    }
    resultTextDom.innerText = `Welcome back~ User ${user.username}`
}

function viewUserList() {
    userList.forEach(item => {
        console.log(`username：${item.username} email：${item.email} password：${item.password}`)
    })
}


function main() {
    const emailTextDom = document.getElementById('emailText');
    const usernameTextDom = document.getElementById('usernameText');
    const passwordTextDom = document.getElementById('passwordText');
    const registerBtnDom = document.getElementById('registerBtn');
    const loginBtnDom = document.getElementById('loginBtn');
    const viewUserListBtnDom = document.getElementById('viewUserListBtn');

    registerBtnDom.addEventListener('click', () => {
        register(emailTextDom.value, usernameTextDom.value, passwordTextDom.value)
    })

    loginBtnDom.addEventListener('click', () => {
        login(emailTextDom.value, passwordTextDom.value)
    })

    viewUserListBtnDom.addEventListener('click', () => {
        viewUserList()
    })
}

main()