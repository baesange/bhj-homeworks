let book = document.getElementById('book');
let fontControls = document.querySelectorAll('.font-size');

function removeFontSizeClasses() {
    book.classList.remove('book_fs-big', 'book_fs-small');
}

function setActiveFont(target) {
    fontControls.forEach(control => {
        control.classList.remove('font_size_active');
    });
    target.classList.add('font_size_active');
}

fontControls.forEach(control => {
    control.addEventListener('click', function(event) {
        event.preventDefault();
        
        let size = this.dataset.size;
        
        removeFontSizeClasses();
        
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
        
        setActiveFont(this);
    });
});
