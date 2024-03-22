/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/

const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL REVEAL ANIMATION =====*/
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })

/*SCROLL HOME*/
sr.reveal('.home_title', { delay: 200 , interval: 300})
sr.reveal('.button', { delay: 400 })
sr.reveal('.home_social-icon', { interval: 400 })
/*SCROLL ABOUT*/
sr.reveal('.about_img', { delay: 400 })
sr.reveal('.about_subtitle', { delay: 500 })
sr.reveal('.about_profession', { delay: 300 })
sr.reveal('.about_text', { delay: 400 })
sr.reveal('.about_social-icon', { delay: 500 })

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {delay: 200})
sr.reveal('.skills_name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills_data', { delay: 400 })
sr.reveal('.skills_text', { delay: 600 })

/*SCROLL WORK*/
sr.reveal('.work_img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact_input', { interval: 300 })

sr.reveal('.footer', { origin: 'bottom', distance: '10px', delay: 2000})


