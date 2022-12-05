// Processing for horizontal scroll
const wrapper = document.querySelector('#js-wrapper');

if(wrapper) {
    const item = document.querySelectorAll('#js-item');
    const wrapperLeft = wrapper.offsetLeft;
    
    gsap.to( item, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            pin: true,
            ease: "power3.inOut", x: -100,
            scrub: 1.5,
            markers: false,
            },
            end: () => "+=" + wrapperLeft
        });
};

// Fade out and in the herovideo scroll
const heroVideo = document.querySelector(".top_video");

gsap.to( heroVideo, .5,{
    autoAlpha: 0,
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        trigger: '#horizontal-area',
        pin: false,
        ease: "power3.inOut", x: -500,
        scrub: true,
        markers: true,
        start: 'top top',
        end: 'top+=10% top',
        scrub: .5,
    }
});

// About title
const aboutTitle = document.querySelector("#about-link h1");

gsap.from( aboutTitle, .5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: '#about-link',
        start: '20% top',
        end: 'bottom 20%',
        scrub: true,
        markers: true,
    }
});
// About text
const aboutText = document.querySelectorAll("#about-link div");

gsap.from( aboutText, 2, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: '#about-link',
        delay: 4,
        start: '30% top',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
    }
});

// Interest title
const interestTitle = document.querySelector("#interest-link h1");

gsap.from( interestTitle, .5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: '#interest-link',
        start: '20% top',
        end: 'bottom 20%',
        scrub: true,
        markers: true,
    }
});
// Interest text
const interestText = document.querySelector("#interest-link div");

gsap.from( interestText, .5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: '#interest-link',
        start: '20% top',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
    }
});

// Portfolios title
const portfoliosTitle = document.querySelector("#portfolio-link h1");

gsap.from( aboutText, .5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: '#portfolio-link',
        start: '20% top',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
    }
});