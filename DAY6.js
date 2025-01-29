class User {
    constructor(email, username, password,) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

function main() {
    const emailTextDOM = document.getElementById('email');
    const usernameTextDOM = document.getElementById('username');
    const passwordTextDOM = document.getElementById('password');
    const registerBtnDOM = document.getElementById('register');
    const LoginBtnDOM = document.getElementById('Login');
    const listBtnDOM = document.getElementById('list');
    registerBtnDOM.addEventListener('click', () => {
        register(emailTextDOM.value, usernameTextDOM.value, passwordTextDOM.value);
    })
    LoginBtnDOM.addEventListener('click', () => {
        login(emailTextDOM.value, usernameTextDOM.value, passwordTextDOM.value);
    })
    listBtnDOM.addEventListener('click', () => {list();
    })
}

let Userlist = []
const resultTextDOM = document.getElementById('ResultText');

function register(email, username, password) {
    if (Userlist.find(item => item.email === email)) {
        resultTextDOM.innerText = "您已注册";
        return
    }
    let user = new User(email, username, password);
    Userlist.push(user);
    resultTextDOM.innerText = "注册成功"
}

function login(email, password) {
    let user = Userlist.find(item => item.email === email)
    if (!user) {
        resultTextDOM.innerText = "您未注册";
        return
    }
    if (user.password === password) {
        resultTextDOM.innerText = '欢迎回家$(user.username)';}
    else{
        resultTextDOM.innerText = "密码错误";
    }

}
function list() {
    console.log(Userlist)
}

main();