const creacionCuenta = document.getElementById("Nuevo")
const inicioCuenta = document.getElementById("Entrar")
const boxLogin = document.getElementById("box-login")
const boxSingin = document.getElementById("box-signin")

creacionCuenta.addEventListener("click", ()=>{
    boxLogin.style.display = "none";
    boxSingin.style.display = "flex";
    console.log("cambio")
})
inicioCuenta.addEventListener("click", ()=>{
    boxLogin.style.display = "flex";
    boxSingin.style.display = "none";
    console.log("cambio")
})