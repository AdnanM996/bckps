
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();

    timeline
    .staggerTo('.loader', 1, {
        y: '-100%',
        ease: Expo.easeInOut
    })

    .staggerFrom('.hero__right', 1, {
        scale: 1.2,
        ease: Expo.easeInOut
    })

    .staggerFrom('.hero--heading, #heroParagraph', 1, {
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut,
    }, 0.2)

    .staggerFrom('#header', 1, {
        delay: .5,
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut
    })

    .staggerFrom('#heroCta', .5, {
        opacity: 0,
        ease: Expo.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.hero',
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
    .staggerFrom('#bagImg', 1 ,{
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
        triggerHook: 0
    })
    .setTween(timeline3)
    .addTo(controller);

    //tl4
    let timeline4 = new TimelineMax();

    timeline3
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

    timeline3
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
    .staggerFrom(['#splitText1 h2, p, .cta, #splitText2 h2, p, .cta'], 1 ,{
        opacity: 0,
        y: 10,
    }, 0.2)

    let scene6 = new ScrollMagic.Scene({
        triggerElement: '.ul',
        triggerHook: 0
    })
    .setTween(timeline6)
    .addTo(controller);

    //tl7
    let timeline7 = new TimelineMax();

    timeline7
    .staggerFrom(['#sliderHeading, #sleaderP'], 1 ,{
        opacity: 0,
        y: -10,
    }, 0.2)

    let scene7 = new ScrollMagic.Scene({
        triggerElement: '#splitText1',
        triggerHook: 0
    })
    .setTween(timeline7)
    .addTo(controller);

    //tl8
    let timeline8 = new TimelineMax();

    timeline8
    .staggerFrom(['.slider'], 1 ,{
        x: "100%",
    })

    let scene8 = new ScrollMagic.Scene({
        triggerElement: '#sliderP',
        triggerHook: 0,
        offset: '-300'
    })
    .setTween(timeline8)
    .addTo(controller);
