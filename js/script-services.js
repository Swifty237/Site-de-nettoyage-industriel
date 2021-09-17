const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const service = document.getElementById('service')

const handleIntersectService = function (entries, observer) {
    entries.forEach(function (entry) {
       if (entry.intersectionRatio >= ratio){
            
            entry.target.classList.remove('section-off')
            entry.target.classList.add('section-on')
       }
       else {

            entry.target.classList.remove('section-on')
            entry.target.classList.add('section-off')
       }
    })
}

const observerService = new IntersectionObserver(handleIntersectService, options)
observerService.observe(service)


const footerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}

const handleIntersectFooter = function (entries, footerObserver) {
    entries.forEach(function(entry) {
       if (entry.intersectionRatio >= .3){

            observerService.unobserve(service)
            entry.target.classList.remove('reveal-off')
            entry.target.classList.add('reveal') 
       }
       else {
            entry.target.classList.add('reveal-off')
            entry.target.classList.remove('reveal')
            observerService.observe(service)
       }
    })
}

const footerObserver = new IntersectionObserver(handleIntersectFooter, footerOptions)
footerObserver.observe(document.getElementById('footer2'))