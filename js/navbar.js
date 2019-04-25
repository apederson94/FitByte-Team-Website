let navbar = document.getElementById('navMenu')
let burger = document.getElementById('navBurger')

function toggleActivity() {
    navbar.classList.toggle('is-active')
    burger.classList.toggle('is-active')
}

burger.addEventListener('click', toggleActivity)