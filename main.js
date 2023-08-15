var btn = document.getElementById('btn');
var midea_section_main = document.querySelector('.midea-section-main');
var btn2 = document.getElementById('btn2')


function fun1() {
    midea_section_main.style.opacity = '1';
    btn.style.display = 'none'; 
    btn2.style.display = 'flex';
    gsap.from('.midea-section-main', {
        duraction: 1,
        delay: 0.5,
        opacity: 0,
        scale: 0.8,
    })
    gsap.from('#btn2', {
        duraction: 1,
        delay: 0.5,
        opacity: 0,
        scale: 0.8,
    })
}
btn.addEventListener('click', fun1);
function fun2() {
    midea_section_main.style.opacity = '0';
    btn2.style.display = 'none'; 
    btn.style.display = 'flex';
}
btn2.addEventListener('click', fun2)