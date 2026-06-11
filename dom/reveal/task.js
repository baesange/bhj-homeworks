function checkReveal() {
    let reveals = document.querySelectorAll('.reveal');
    
    for (let reveal of reveals) {
        let rect = reveal.getBoundingClientRect();
        let windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', checkReveal);
checkReveal();
