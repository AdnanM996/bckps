if (document.body.id === 'home') {
    matrix3d();
    parallaxScrolling();
    slider();
}

if(document.body.id === 'account') {
    matrix3d();
}

if(document.body.id === 'acc-register') {
    matrix3d();
}

if(document.body.id === 'recover') {
    matrix3d();
}

//Parallax Scrolling
function parallaxScrolling(){
    window.addEventListener('scroll', () => {
        let scroll = this.pageYOffset;
    
        const heroText = document.getElementById('heroText');
        const choiseText1 = document.getElementById('choiseText1');
        const choiseText2 = document.getElementById('choiseText2');
        const splitText1 = document.getElementById('splitText1');
        const splitText2 = document.getElementById('splitText2');
    
        heroText.style.transform = `translateY(${-(scroll / 10) + '%'})`;
        choiseText1.style.transform = `translateY(${-(scroll / 30) + '%'})`;
        choiseText2.style.transform = `translateY(${-(scroll / 30) + '%'})`;
        
        splitText1.style.transform = `translateY(${-(scroll / 50) + '%'})`;
        splitText2.style.transform = `translateY(${-(scroll / 50) + '%'})`;
    });
};

function matrix3d() {
    window.addEventListener('scroll', () => {
        let scroll = this.pageYOffset / 30;

        let container = document.querySelector('.body--container');
        container.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-scroll}, 0, 1)`;
    });
};

//Slider 
function slider() {
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return; // stop fn from running;
        e.preventDefault();
        let x = e.pageX- slider.offsetLeft;
        let walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

//Open Close Nav
function nav() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.logo');

    menu.addEventListener('click', () => {
        nav.classList.toggle('open-nav');
        logo.classList.toggle('logo--dark');
    })
}

nav();