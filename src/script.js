document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const body = document.body;

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme + '-theme');
    toggleSwitch.checked = currentTheme === 'dark';

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});
