
var flag=0
document.querySelector(".circle").addEventListener("click",function(){
    if(flag===0){
    gsap.to("#center",{
        width : "100%"
    })
    gsap.to("#types",{
        display : "block",
        ease:Expo.ease
        
    })

    gsap.to(".circle",{
        backgroundColor:"#103939",
        rotate:"180deg",
        gap:0
    })
    gsap.to("#line1",{
        rotate:"45deg",
        backgroundColor:"#fff"
    })
    gsap.to("#line2",{
        rotate:"-45deg",
        backgroundColor:"#fff"
    })
    gsap.to(" .rose",{
        opacity:0

    })
    gsap.to("#nine",{
        left:"30%",

        
    })
    gsap.to("#eight",{
        right:"30%"
    })
    gsap.to("#midnav h3",{
        color:"#103939"
    })
    gsap.to("#midnav h4",{
        color:"#103939"
    })
    gsap.to("#bottom",{
       display:"block",
       display:"flex"
    })
    gsap.to("#types h1",{
        stagger:0.2,
        y:0,
        opacity:1,
        ease:"Expo.easeInOut",
        duration:2
    })
    flag=1;
}else{
    gsap.to("#center",{
        width : "0%"
    })
    gsap.to("#types",{
        display : "none",
        ease:Expo.ease,
        y:50,
        stagger:0.5
        
    })


    gsap.to(".circle",{
        backgroundColor:"#fff",
        rotate:"0deg",
        gap:"4%"
    })
    gsap.to("#line1",{
        rotate:"0deg",
        backgroundColor:"#000"
    })
    gsap.to("#line2",{
        rotate:"0deg",
        backgroundColor:"#000"
    })
    gsap.to(" .rose",{
        opacity:1

    })
    gsap.to("#nine",{
        left:"0%"
    })
    gsap.to("#eight",{
        right:"0%"
    })
    gsap.to("#midnav h3",{
        color:"#fff"
    })
    gsap.to("#midnav h4",{
        color:"#fff"
    })
    gsap.to("#bottom",{
       display:"none",
    //    display:"flex"
    })
    gsap.to("#types h1",{
        stagger:0.2,
        y:"50px",
        opacity:0,
        ease:"Expo.easeInOut",
        // duration:1
    })
    

    flag=0;

}
    
})

var tl=gsap.timeline();
tl.from(".alone",{
    width:"0",
        duration:3.2,
        ease:Linear.easeIn,
        // opacity:0
        delay:0.5

})
tl.to("#loder h1",{
    y:50,
    opacity:0,
    ease:Expo.ease,
    delay:0.5,
    
})
tl.to(" #loder #bottom",{
    y:50,
    opacity:0,
    ease:Expo.ease
})
tl.to("#loder",{
    width:0,
    ease:Expo.ease,

})
tl.from("#text h2",{
    y:80,
    ease:"ExpoeaseInOut",
    duration:0.5,
    opacity:0,
 })
var z=Number(document.querySelector("#loder h1").textContent)
function convertToRange(value, srcRange, dstRange) {
   if (value < srcRange[0] || value > srcRange[1]) {
       return NaN;
   }
   var srcMax = srcRange[1] - srcRange[0],
       dstMax = dstRange[1] - dstRange[0],
       adjValue = value - srcRange[0];

   return (adjValue * dstMax / srcMax) + dstRange[0];
}
 var dets= setInterval(function(){
    z++
    document.querySelector("#loder h1").textContent=z
    var clr=convertToRange(z,[1982,2022],[0,1])
    document.querySelector("#loder h1").style.color=`rgb(25,25,25,${clr})`
    if(z>2021){
        clearInterval(dets)
    }
 },100)



 




 