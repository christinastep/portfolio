$(document).ready(function(){
	console.log("läuft!");

  $('.english').click(function() {
      console.log("Englsich");
        $('.en').toggleClass('active');
        $('.fr').toggleClass('active');
        $('.french').removeClass('active');
          $('.english').addClass('active');
  });

  $('.french').click(function() {
        console.log("Französisch");
          $('.fr').toggleClass('active');
          $('.en').toggleClass('active');
          $('.french').addClass('active');
          $('.english').removeClass('active');
  });

   $('.navIcon').click(function() {
        console.log("Test");
          $('.navFull').toggleClass('active');
          $('.navIcon').toggleClass('active');
  });



  //DEXTER///////////

	$('.play').click(function(){
		console.log("Play");
		$('.video').toggleClass('active');
		$('.video--close').toggleClass('active');

		$('.video--close').click(function() {
			console.log("schließen");
    		$('.video').toggleClass('active');
        $('video')[0].pause();
        $('.video--close').toggleClass('active');
		});
	});


	//ANIMATION DIE IMMER LÄUFT///////////

	var tlWelle1 = new TimelineMax({repeat:-1}),
   		Welle1 = $(".welle1"),

  		tlWelle2 = new TimelineMax({repeat:-1}),
    	Welle2 = $(".welle2"),

    	tlWelle3 = new TimelineMax({repeat:-1}),
    	Welle3 = $(".welle3"),

    	tlBoot = new TimelineMax({repeat:-1}),
   		boot = $(".boot");

  tlWelle1
    .fromTo(Welle1,3,{x:-15, y:-5},{x:15, y:5},'-=0.5')
    .fromTo(Welle1,3,{x:15, y:5},{x:-15, y:-5});

  tlWelle2
    .fromTo(Welle2,3,{x:15, y:3.5},{x:-15, y:-3.5},'-=0.5')
    .fromTo(Welle2,3,{x:-15, y:-3.5},{x:15, y:3.5});

  tlWelle3
    .fromTo(Welle3,3,{x:-15, y:-5},{x:15, y:5},'-=0.5')
    .fromTo(Welle3,3,{x:15, y:5},{x:-15, y:-5});


  tlBoot
    .fromTo(boot,3,{rotation:3,x:-15, y:-5},{rotation:-5,x:15, y:5},'-=0.5')
    .fromTo(boot,3,{rotation:-5,x:15, y:5},{rotation:3,x:-15, y:-5});




  //__HOVER__///////////

  var play = $(".play");
  play.hover(function(){
    TweenMax.to(this, .2,{scale:1.1})
  }, function(){
    TweenMax.to(this, .2,{scale:1})
  })

  var arrorw = $(".arrorw");
  arrorw.hover(function(){
    TweenMax.to(this, .2,{scale:1.3})
  }, function(){
    TweenMax.to(this, .2,{scale:1})
  })

  var sack_gross = $(".sack_gross");
  sack_gross.hover(function(){
    TweenMax.to(this, 1.2,{rotation:-3})
  }, function(){
    TweenMax.to(this, 1.2,{rotation:3})
  })


  var sack_klein = $(".sack_klein");
  sack_klein.hover(function(){
    TweenMax.to('.sack_klein', 2.5, {rotation:30})
  }, function(){
      TweenMax.to('.sack_klein', 1.5, {rotation:-10})
  })



//SCROLLMAGIC//////

    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({
              triggerElement: ".text"
            })
            .setTween(".luft", 4.5, {y:-700, scale:1.1})
             // trigger a TweenMax.to tween
            .addTo(controller);




    TweenMax.to('.arrorw--down', 2.5, {autoAlpha:0});



  //KLOPPIER///////////

var mq = window.matchMedia( "(min-width: 470px)" );
  if (mq.matches) {
    $(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: ".papier_rosen",
          duration: 1350
        })
        .setPin(".cover")
        .addTo(controller);
  });

$(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: ".papier_rosen",
          triggerHook:0,
          duration: 1300
        })

        .setPin(".papier_lang")
        .addTo(controller);
  });

$(function () { // wait for document ready
  var controller = new ScrollMagic.Controller();
        // build scene
        var scene = new ScrollMagic.Scene({
          triggerElement: "video",
          triggerHook:0,
          duration: 300
        })

        .setPin(".papier_rauteRaute")
        .addTo(controller);
  });

  }


 //Karte///////////

    TweenMax.to('.rad', 5.5, {x:300});

    TweenMax.from('.zug', 6.5, {right:70})


    var tlDrache = new TimelineMax({repeat:-1}),
      Drache = $(".drache")
    tlDrache
    .fromTo(Drache,3,{rotation:-10,transformOrigin:'50% 100%'},{rotation:10},'-=0.5')
    .fromTo(Drache,3,{rotation:10,transformOrigin:'50% 100%'},{rotation:-10})


    var tlWindrad = new TimelineMax(),
      Windrad = $(".windrad")
    tlWindrad
    .to(Windrad,3,{rotation:360,transformOrigin:'50% 50%',ease: Power0.easeNone,repeat:-1})


    var tlKuhkopf = new TimelineMax({repeat:-1}),
      Kuhkopf = $(".kuhkopf")
    tlKuhkopf
    .fromTo(Kuhkopf,3,{rotation:-20,transformOrigin:'50% 50%',ease: Power0.easeNone},{rotation:20,ease: Power0.easeNone},'-=0.5')
    .fromTo(Kuhkopf,3,{rotation:20,transformOrigin:'50% 50%',ease: Power0.easeNone},{rotation:-20,ease: Power0.easeNone})


    var tlBallon = new TimelineMax({}),
      Ballon = $(".ballon")
    tlBallon
    .from(Ballon,5,{x:500, y:80,ease: Power0.easeNone, scale:0.7})

  });


 //Port 7///////////


var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({
              triggerElement: ".test--trigger"
            })

            .setTween(".iconbox--image", 4.5, {autoAlpha:1})
             // trigger a TweenMax.to tween
            .addTo(controller);


var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({
              triggerElement: ".test--trigger"
            })

            .setTween(".iconbox--imageHover", 3, {autoAlpha:0})
             // trigger a TweenMax.to tween
            .addTo(controller);


 //Websites///////////
$('.laptop').click (function(){
    console.log("klappt das");
    $('.computer--error').toggleClass('active');
    $('.fenster--nacht').toggleClass('active');
    $('.filter').toggleClass('active');
});

$('.laptop').hover (function(){
    console.log("klappt das");
    $('.computer--error').toggleClass('active');
    $('.fenster--nacht').toggleClass('active');
    $('.filter').toggleClass('active');
});






