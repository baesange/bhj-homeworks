document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        valueElement.addEventListener('click', function(event) {
            event.stopPropagation();
            
            document.querySelectorAll('.dropdown__list_active').forEach(openList => {
                if (openList !== listElement) {
                    openList.classList.remove('dropdown__list_active');
                }
            });
            
            listElement.classList.toggle('dropdown__list_active');
        });
        
        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');
            
            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                valueElement.textContent = this.textContent;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
    
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown__list_active').forEach(openList => {
            openList.classList.remove('dropdown__list_active');
        });
    });
});
