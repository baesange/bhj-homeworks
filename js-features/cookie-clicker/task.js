let cookie = document.getElementById('cookie');
let counterElement = document.getElementById('clicker__counter');

let isLarge = true;

cookie.onclick = function() {
    let currentCount = parseInt(counterElement.textContent);
    currentCount++;
    counterElement.textContent = currentCount;
    
    if (isLarge) {
        cookie.style.width = '150px';
        cookie.style.height = '150px';
        isLarge = false;
    } else {
        cookie.style.width = '200px';
        cookie.style.height = '200px';
        isLarge = true;
    }
};
