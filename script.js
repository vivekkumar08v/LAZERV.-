var nav = document.querySelector(".nav-element");

nav.addEventListener("mouseenter", function(){

    let tl=gsap.timeline();

    tl.to(".nav-element-sub2",{
        display: "block",
    })

    tl.to(".nav-element ",{
        stagger: {
            amount: 0.6
        },
        paddingl:"2vh"
    })

    tl.to(".nav-part2 h4",{
        color: "white",
    
    })

})

nav.addEventListener("mouseleave", function(){

    let tl=gsap.timeline();

    tl.to(".nav-element-sub2",{
        display: "none",
        duration:0.1
    })

    tl.to(".nav-element",{
        stagger: {
            amount: 0.2
        }
    })

})