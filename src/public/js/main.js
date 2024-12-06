// ==== MENU SHOW =====
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav__menu')

// ===== REMOVE MENU =====
const navLink = document.querySelectorAll('.nav__link')
const navMenu = document.getElementById('nav__menu')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('.nav__menu .nav__list a')
sections.forEach((section) => {
    section.addEventListener('click', (e) => {
        document.querySelector('.nav__menu .nav__list a.active').classList.remove('active')
        e.currentTarget.classList.add('active')
    })
})

// ====== CHANGE COLOR HEADER =======
window.onscroll = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) 
        nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}