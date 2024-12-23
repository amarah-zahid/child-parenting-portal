window.addEventListener('scroll', function() {
    const image = document.getElementById('image1');
    if (window.scrollY > 50) {
        image.classList.add('scrolled');
    } else {
        image.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const image = document.getElementById('image2');
    if (window.scrollY > 50) {
        image.classList.add('scrolled');
    } else {
        image.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const image = document.getElementById('image3');
    if (window.scrollY > 50) {
        image.classList.add('scrolled');
    } else {
        image.classList.remove('scrolled');
    }
});