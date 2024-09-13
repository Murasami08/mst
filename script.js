let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let body = document.querySelector(".body")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    body.classList.toggle("active")
})