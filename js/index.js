//Parallax Scrolling

function parallaxScrolling(){
    window.addEventListener('scroll', () => {
        let scroll = this.pageYOffset;
    
        const header = document.getElementById('header');
    
        if(scroll > 100) {
            header.classList.add('bgheader')
        } else {
            header.classList.remove('bgheader')
        }
    
        const heroText = document.getElementById('heroText');
        const choiseText1 = document.getElementById('choiseText1');
        const choiseText2 = document.getElementById('choiseText2');
        const splitText1 = document.getElementById('splitText1');
        const splitText2 = document.getElementById('splitText2');
    
        heroText.style.transform = `translateY(${-(scroll / 10) + '%'})`;
        /*choiseText1.style.transform = `translateY(${-(scroll / 10) + '%'})`;
        choiseText2.style.transform = `translateY(${-(scroll / 10) + '%'})`;*/
        splitText1.style.transform = `translateY(${-(scroll / 50) + '%'})`;
        splitText2.style.transform = `translateY(${-(scroll / 50) + '%'})`;
    });
};

function matrix3d() {
    window.addEventListener('scroll', () => {
        let scroll = this.pageYOffset / 20;

        let container = document.querySelector('.body--container');
        container.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-scroll}, 0, 1)`;
    });
};

matrix3d();
parallaxScrolling();

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('handle');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('handle');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.add('handle');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; // stop fn from running;
    e.preventDefault();
    let x = e.pageX- slider.offsetLeft;
    let walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchmove', (e) => {
    if(!isDown) return; // stop fn from running;
    e.preventDefault();
    let x = e.pageX- slider.offsetLeft;
    let walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});