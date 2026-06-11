function startRotator(rotator) {
    let cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;
    
    function rotate() {
        cases[activeIndex].classList.remove('rotator__case_active');
        
        activeIndex = (activeIndex + 1) % cases.length;
        
        cases[activeIndex].classList.add('rotator__case_active');
        
        let speed = cases[activeIndex].dataset.speed || 1000;
        let color = cases[activeIndex].dataset.color || 'black';
        
        cases[activeIndex].style.color = color;
        
        setTimeout(rotate, speed);
    }
    
    let initialSpeed = cases[activeIndex].dataset.speed || 1000;
    setTimeout(rotate, initialSpeed);
}

let rotators = document.querySelectorAll('.rotator');

rotators.forEach(startRotator);
