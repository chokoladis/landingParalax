
$(document).ready(function(){
  
  $('.form_subscribe').on('click', function(){
    $(this).toggleClass('open');
    $('header .menu form').toggleClass('open');
  });

});



// gsap

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);

// let scroller = ScrollSmoother.create({});
// scroller.effects("section", {speed: 0.5, lag: 0.1});

gsap.to("header .content, header .header_browser", {
  scrollTrigger: {
    trigger: '#Features',
    start: 'top center',
    end: 'bottom center',
    scrub:  true
  },  
  y:-150,
  opacity: 0,
  duration: 2
});

gsap.to("#Features", {
  scrollTrigger: {
    trigger: '#Features',
    start: 'top center',
    end: 'bottom center',
    scrub:  0.5,
    // pin:true,
  },  
  opacity: 1,
  y: -50,
  duration: 2
});

gsap.to("#Features .block", {
  scrollTrigger: {
    trigger: '#Features .block',
    start: 'top center',
    end: 'center center',
    scrub:  0.5,
  },  
  
  y:-100,
  opacity:1,
  duration: 2
});

gsap.to("#Features .block .img", {
  scrollTrigger: {
    trigger: '#Features .img',
    start: 'top center',
    end: 'top center',
    scrub:  true
  },  
  rotate:-45,
  duration: 4
});


gsap.to("#Features_2", {
  scrollTrigger: {
    trigger: '#Features2',
    start: '850 center',
    end: "+=500",
    scrub:  true,
    pin: ".pin",
    
  },  
  opacity: 1,
  y: -100,
  duration: 3
});

gsap.to("#Features_2 .block", {
  scrollTrigger: {
    trigger: '#Features_2 .block',
    start: 'top center',
    end: 'top center',
    scrub:  true
  },  
  
  y:-100,
  opacity:1,
  duration: 2
});

gsap.to("#proto", {
  scrollTrigger: {
    trigger: '#proto',
    start: 'top center',
    end: 'top center',
    scrub:  true
  },  
  opacity: 1,
  y: -50,
  duration: 2
});

// const changeH2 = (selector, obj) => {
//   const el = document.querySelector(selector);
//   el.innerHTML = JSON.stringify({
//     text: obj.text,
//     value: obj.value
//   }, null, '') ;
// }
// const newobj = {
//   text: 'Features',
//   value: 1,
// }

// gsap.to("#Features", { 
  
//   opacity: 1,
//   duration: 1
// });

// gsap.to(newobj, {
//   text: 'Featureseeesese',
//   value: 232,
//   delay: 1,
//   duration: 3,
//   onUpdate: function() { changeH2('.box',newobj) }
// });

// gsap.to('#Features_2', {
  
//   onStart: scrollhead()
// })

