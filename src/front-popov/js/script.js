let elY = 0;
let scrollY = 0;
window.addEventListener("scroll", function() {
    const el = document.querySelector('.navbar');
    const height = el.offsetHeight;
    const pos = window.pageYOffset;
    const diff = scrollY - pos;

    elY = Math.min(0, Math.max(-height, elY + diff));
    el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
    el.style.transform = `translateY(${el.style.position === 'fixed' ? elY : 0}px)`;
    el.style.transition = `0.3s ease-in-out`;

    scrollY = pos;
})