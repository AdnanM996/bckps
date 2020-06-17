let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

if(document.body.id === 'home') {
    
    timeline
    .to('.loader', 1.5, {
        y: '-100%',
        ease: Expo.easeInOut
    })

    .from('.hero__right', 1, {
        scale: 1.2,
        ease: Expo.easeInOut
    })

    .staggerFrom('.hero--heading, #heroParagraph', 1, {
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut,
    }, 0.25)

    .from('#header', 1, {
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut
    })

    .from('#heroCta', 0.5, {
        opacity: 0,
        ease: Expo.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '#hero',
        triggerHook: 0
    })
    .setTween(timeline)
    .addTo(controller);


    //tl2

    let timeline2 = new TimelineMax();

    timeline2
    .staggerFrom(['#choiseText1', '#choiseText2'], 1, {
        opacity: 0,
        ease: Expo.easeInOut
    }, 0.5)

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '#heroCta',
        triggerHook: 0
    })
    .setTween(timeline2)
    .addTo(controller);

    //tl3

    let timeline3 = new TimelineMax();

    timeline3
    .from('#bagImg', 1 ,{
        opacity: 0,
        x: -100,
        ease: Expo.easeOut
    })
    .staggerFrom(['#bagHeading, #bagP, #bagCta'], 1 ,{
        opacity: 0,
        y: 10,
    }, 0.2)

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.bag-text',
        triggerHook: 0,
        offset: '-150'
    })
    .setTween(timeline3)
    .addTo(controller);

    //tl4
    let timeline4 = new TimelineMax();

    timeline4
    .staggerFrom(['#sponsorsHeading, .sponsors--paragraph, .line'], 1 ,{
        opacity: 0,
        y: 10,
    }, 0.2)

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '#bagImg',
        triggerHook: 0
    })
    .setTween(timeline4)
    .addTo(controller);

    //tl5
    let timeline5 = new TimelineMax();

    timeline5
    .staggerFrom(['#howItWorksHeading, .how-it-works-li'], 1 ,{
        opacity: 0,
        y: 10,
    }, 0.2)

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.line',
        triggerHook: 0
    })
    .setTween(timeline5)
    .addTo(controller);

    //tl6
    let timeline6 = new TimelineMax();

    timeline6
    .staggerFrom(['#splitText1, #splitText2'], 0.5 ,{
        opacity: 0,
        y: 10
    }, 0.2)

    let scene6 = new ScrollMagic.Scene({
        triggerElement: '#ul',
        triggerHook: 0
    })
    .setTween(timeline6)
    .addTo(controller);

    //tl7
    let timeline7 = new TimelineMax();

    timeline7
    .staggerFrom(['#sliderHeading, #sliderP'], 1 ,{
        y: 40,
        opacity: 0,
    }, 0.2)

    let scene7 = new ScrollMagic.Scene({
        triggerElement: '.slider__text',
        triggerHook: 0,
        offset: "-300"
    })
    .setTween(timeline7)
    .addTo(controller);

    //tl8
    let timeline8 = new TimelineMax();

    timeline8
    .from('.slider', 1 ,{
        x: "100%",
    })

    let scene8 = new ScrollMagic.Scene({
        triggerElement: '#sliderP',
        triggerHook: 0,
        offset: '-300'
    })
    .setTween(timeline8)
    .addTo(controller);
}

if(document.body.id === 'mens' || document.body.id === 'womens') {
    //tl9
    let timeline9 = new TimelineMax();

    let products = document.querySelectorAll('.product');
    timeline9
    .to('.loader', 1.5, {
        y: '-100%',
        ease: Expo.easeInOut
    })
    .from('.banner--text', 1 ,{
        y: 50,
        opacity: 0,
        ease: Expo.easeInOut
    })

    let scene9 = new ScrollMagic.Scene({
    })
    .setTween(timeline9)
    .addTo(controller);

    //tl10
    let timeline10 = new TimelineMax();

    timeline10
    .staggerFrom(document.querySelectorAll('.product'), 1 ,{
        //delay: 0.4,
        x: -50,
        opacity: 0,
        ease: Power3.easeIn
    }, 0.25)

    let scene10 = new ScrollMagic.Scene({
        triggerElement: '.banner--text',
        triggerHook: 0
    })
    .setTween(timeline10)
    .addTo(controller);
}

    