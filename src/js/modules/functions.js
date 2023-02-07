export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    });
}

export function burger() {
    let b = document.querySelector('.burger');
    let nav = document.querySelector('.header__nav');
    let links = document.querySelectorAll('.header__item');
    let body = document.querySelector('body');
    
    b.addEventListener('click', e => {
        
        if (b.classList.contains('active')) {
            b.classList.remove('active')
            nav.classList.remove('active')
            body.classList.remove('lock')
        } else {
            b.classList.add('active')
            nav.classList.add('active')
            body.classList.add('lock')
        }
        
    })
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            b.classList.remove('active')
            nav.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}
