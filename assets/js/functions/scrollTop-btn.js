
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('scrollToTopButton');
    if (button) {
        button.addEventListener('click', scrollToTop);
    }
});