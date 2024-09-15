// gsap is javascript library which is use for moving animation;//
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    let videocon = document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter",function(){
    
    
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
    
    })
    
    videocon.addEventListener("mouseleave",function(){
    
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
        
    
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-5,
            top:dets.y-8
        })
    })
    
}

videoconAnimation();

function loadingAnimation(){
gsap.from("#page1 h1",{
   y:100,
   opacity:0,
   delay:0.5,
   duration:0.9,
   stagger:0.3
});
gsap.from("#page1 #video-container",{
    scal:0.8,
    opacity:0,
    delay:1.3,
    duration:0.9,
    
 });

}

loadingAnimation();


document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%,-50%) scale(1)'
//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%,-50%) scale(0)'
//     })
// })
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
                    transform: 'translate(-50%,-50%) scale(1)'
                })
    });

    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
                    transform: 'translate(-50%,-50%) scale(0)'
                })
    });   
});
