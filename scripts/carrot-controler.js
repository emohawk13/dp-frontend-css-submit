document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    
    function openDropdown() {
        dropdown.classList.add('open');
    }
    function closeDropdown() {
        dropdown.classList.remove('open');
    }
    dropdown.addEventListener('mouseenter', openDropdown);
    dropdown.addEventListener('mouseleave', closeDropdown);
});
