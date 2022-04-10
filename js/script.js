const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

// const title1 = document.getElementById('h51')
// const title2 = document.getElementById('h52')
// const title3 = document.getElementById('h53')
// const title4 = document.getElementById('h54')

const header = document.getElementById('header')
const aPropos = document.getElementById('a-propos')
const tarifs = document.getElementById('tarifs')

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
       if (entry.intersectionRatio >= ratio){
            
            entry.target.classList.remove('header-off')
            entry.target.classList.add('header-on')
       }
       else {

            entry.target.classList.remove('header-on')
            entry.target.classList.add('header-off')
       }
    })
}

const observerHeader = new IntersectionObserver(handleIntersect, options)
observerHeader.observe(header)

// const handleIntersectSection = function (entries, observer) {
//     entries.forEach(function (entry) {
//         if (entry.intersectionRatio >= ratio) {

//             observerHeader.unobserve(header)
//             observerSection2.unobserve(tarifs)
//             entry.target.classList.remove('section-off')
//             entry.target.classList.add('section-on')
//             title1.classList.remove('title')
//         }
//        else {

//             entry.target.classList.remove('section-on')
//             entry.target.classList.add('section-off')
//             title1.classList.add('title')
//             observerHeader.observe(header)
//             observerSection2.observe(tarifs)
//        }  
//     })
// }

// const observerSection = new IntersectionObserver(handleIntersectSection, options)


// const handleIntersectSection2 = function (entries, observer) {
//     entries.forEach(function (entry) {
//        if (entry.intersectionRatio >= ratio){
            
//             observerSection.unobserve(aPropos)
//             observerSection3.unobserve(contact)
//             entry.target.classList.remove('section-off')
//             entry.target.classList.add('section-on')
//             title2.classList.remove('title')
//             title4.classList.remove('title')
//         }
//        else {

//             entry.target.classList.remove('section-on')
//             entry.target.classList.add('section-off')
//             title2.classList.add('title')
//             title4.classList.add('title')
//             observerSection3.observe(contact)
//             observerSection.observe(aPropos)
//        }
//     })
// }

// const observerSection2 = new IntersectionObserver(handleIntersectSection2, options)

// const handleIntersectSection3 = function (entries, observer) {
//     entries.forEach(function (entry) {
//        if (entry.intersectionRatio >= ratio){

//             observerSection2.unobserve(tarifs)
//             entry.target.classList.remove('section-off')
//             entry.target.classList.add('section-on')
//             title3.classList.remove('title')
//        }
//        else {
           
//             entry.target.classList.remove('section-on')
//             entry.target.classList.add('section-off')
//             title3.classList.add('title')
//             observerSection2.observe(tarifs)
//        }
//     })
// }

// const observerSection3 = new IntersectionObserver(handleIntersectSection3, options)

const nav = document.getElementById('nav')
const navOffsetTop = nav.offsetTop

    window.addEventListener('scroll', () => {
    if (window.scrollY >= navOffsetTop) {
        nav.classList.add('fixed')
    }
    else {
        nav.classList.remove('fixed')
    }
})

const footerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}

const handleIntersectFooter = function (entries, footerObserver) {
    entries.forEach(function(entry) {
       if (entry.intersectionRatio >= .3){

            entry.target.classList.remove('reveal-off')
            entry.target.classList.add('reveal') 
       }
       else {
            entry.target.classList.add('reveal-off')
            entry.target.classList.remove('reveal')
       }
    })
}

const footerObserver = new IntersectionObserver(handleIntersectFooter, footerOptions)
footerObserver.observe(document.getElementById('footer'))

//fonction qui permet de fermer la liste déroulante de la navigation

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(navItem => {
    
    navItem.addEventListener('click', event => {
        
        document.querySelector('.navbar-toggler').click()
    })
})

const bgHeader = document.querySelectorAll('[class*="header-"]')
const changeBackground = (elements) => {
    elements.forEach((element) => {

        element.style.backgroundImage = 'url("./ressources/nettoyage12.jpg")'

        setTimeout(() => {
            element.style.backgroundImage = 'url("./ressources/nettoyage22.jpg")'

            setTimeout(() => {
                element.style.backgroundImage = 'url("./ressources/nettoyage32.jpg")'
            }, 10000)

        }, 10000) 
    })
}
changeBackground(bgHeader)

setInterval(() => {
    changeBackground(bgHeader)
}, 30000);