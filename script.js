function loadingAnimation(){
    var tl = gsap.timeline()

    tl.from("#line h1",{
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    })

    tl.from("#line1-part1 h5, #line1-part1 h6",{
        opacity:0,
        onStart:function () {
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function(){
                if(grow < 100){
                    grow++
                    h5timer.innerHTML = grow
                } else{
                    h5timer.innerHTML = grow
                }
            },35)
        }
    })

    tl.to("#line h2",{
        opacity:1
    })

    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:2
    })

    tl.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        ease: Power4,
        duration:0.6
    })

    tl.to("#loader",{
        display: "none"
    })

    
    tl.from(".hero h1, .hero h2, .hero h3",{
        y:120,
        opacity:0,
        stagger:0.2
    })

    tl.from("#nav",{
        opacity:0
    })
}

loadingAnimation()

function cursorAnimation(){
    const crsr = document.querySelector(".crsr")

    document.addEventListener("mousemove",function(dets){
        if(!crsr) return
        gsap.to(crsr,{
            left:dets.x,
            top:dets.y,
            duration:0.15
        })
    })

    if(document.querySelector("#nav-part2 h4")){
        Shery.makeMagnet("#nav-part2 h4", {})
    }
}

cursorAnimation()