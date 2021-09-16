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
            observerService.unobserve(service)
       }
       else {

            entry.target.classList.remove('section-on')
            entry.target.classList.add('section-off')
       }
    })
}

const observerService = new IntersectionObserver(handleIntersectService, options)
observerService.observe(service)