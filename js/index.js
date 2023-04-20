const user = JSON.parse(localStorage.getItem("login_success")) || false
if (!user) {
    window.location.href = 'login.html'
}

const logout = document.getElementById("logout")
logout.addEventListener('click', ()=>{
    alert("Hasta pronto!")
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})