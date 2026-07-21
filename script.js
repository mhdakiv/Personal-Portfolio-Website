const menuIcon=document.getElementById('menu-icon');
const navbar=document.querySelector('.navbar')

    menuIcon.onclick= ()=> {
        navbar.classList.toggle('active');
    }

document.querySelectorAll('*').forEach(el => {
    if(el.scrollWidth> document.documentElement.clientWidth) {
        console.log(el.tagName, el.className, 'scrollwidth:', el.scrollWidth, 'computed width:', getComputedStyle(el).width);
    }
});