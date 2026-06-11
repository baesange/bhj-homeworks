let tabs = document.querySelectorAll('.tab');
let contents = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        for (let tab of tabs) {
            tab.classList.remove('tab_active');
        }
        for (let content of contents) {
            content.classList.remove('tab__content_active');
        }
        
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    });
}
