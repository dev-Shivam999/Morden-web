
const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline()


tl.from(".img,ul>li,.btn>h4,.btn>button", {
    y: -50,

    stagger: .1,
    opacity: 0,
})

tl.from(" .h2", {
    y: 200,
    opacity: 0,
    scale: 0,
    stagger: .1,
})
tl.from("#bottom-img,#top-img", {
    x: -200,
    scale: 0,
    opacity: 0,
    // stagger: .3
})
tl.from("#right-img,#left-img", {
    x: 200,
    scale: 0,
    opacity: 0,
})
tl.from(".h5", {
    scale: 0,
    opacity: 0,
})
document.querySelectorAll("ul li").forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        document.querySelector(".pink").classList.add("active");
        document.querySelector("marquee").innerHTML = e.childNodes[1].innerHTML +' '+ e.childNodes[1].innerHTML
    })
    e.addEventListener("mouseleave", function () {
        document.querySelector(".pink").classList.remove("active");
    })
  

})

gsap.to(".ddiv", {
    left:1300,
    stagger:.1,
    scrollTrigger: {
        trigger: '.ddiv',
        start:"top 10%",
        end:"top 0%",
        scroller: 'body',
        scrub: 8
    }

})


tl.to(".h5", {
    y: 40,
    repeat: -1,
    yoyo: true
})
gsap.to('.th h2', {


    x:"-100%",
    fontWeight: "normal",
    scrollTrigger: {
        trigger: '.th',
        scroller: 'body',
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: 8,
        pin: true
    }
})
gsap.to(".side .span span", {
    y: 50,
    repeat: -1,
    stagger:.1,
    yoyo: true
})



gsap.from('.side .span,.side .span span', {
    y: 100,
    opacity: 0,
    // scale: 0,
    stagger: .3,
    // fontSize: 0,
    scrollTrigger: {
        trigger: '.side .span',
        scroller: 'body',
        start: "top 110%",
        end: "top 0%",
        scrub: 8
    }

})
gsap.from('.aside .box', {
    
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: '.aside .box',
        scroller: 'body',
        start:"top 90%",
        end:"top 10%",
        scrub:8
    }

})
gsap.from('.ddv', {
    
    opacity: 0,
    scale: 0,
    height:0,
    scrollTrigger: {
        trigger: '.ddv',
        scroller: 'body',
        start:"top 8%",
        end:"top 0%",
        scrub:8
    }

})


gsap.from('.aside .pic img',{
    opacity: 0,
    scale: 1.3,
    // x:100,
stagger:0.01,
    scrollTrigger: {
        trigger: '.aside',
        scroller: 'body',
        start: "top 90%",
        end: "top 5%",
        scrub: 8
    }
})


gsap.to('.png',{
y:300,
x:800,
    scrollTrigger: {
        trigger: '.for',
        scroller: 'body',
        start: "top 10%",
        end: "top -15%",
        // scrub: 8,
                markers: true,
    }
})
gsap.to('.png',{
    y:1000,

    scrollTrigger: {
        trigger: '.left',
        scroller: 'body',
        markers: true,
        start: "top 50%",
        end: "top -10%",
        scrub: 8
    }
})

Shery.mouseFollower()
Shery.makeMagnet('.btn>button')
Shery.hoverWithMediaCircle('.la', { images: ['https://plus.unsplash.com/premium_photo-1678935941664-b137b94a4c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pcXVlfGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1623162900891-e582ab1d55a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pcXVlfGVufDB8fDB8fHww']})
Shery.imageMasker(".th h2" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shivam",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});







gsap.set(".photo:not(:first-child)", { y: "150%" })

const animation = gsap.to(".photo:not(:first-child)", {
    y: "0", stagger: 33, duration: 30
})




ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".right",
    animation: animation,
    scrub: true,
    // markers: true
})




gsap.to(".textlm", {
    width: "100%",
    scrollTrigger: {
        trigger: ".two",

        scroller: 'body',
        start: "top center",
        end: "top top",
        // markers: true,
        scrub: 8,
        // pin: true

    }
})





