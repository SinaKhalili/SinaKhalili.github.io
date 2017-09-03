$(document).ready(function(){
	//init

	var logo = document.getElementById("logo");
    var sina = document.getElementById("sina");
    //var tween = TweenLite.to(logo, 5, {y:"500" , x: "40", scale: 1.01});


    var t1 = new TimelineLite();

    t1.fromTo(logo, 1,{y:"-705vh",x:"0"}, {y:"105",x:"-40"});
    t1.to(logo, 1,{rotation:350},"-=1");
    t1.to('body', 1, {backgroundColor: '#D78C4D'});
	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		//triggerElement: '.trigger',
		offset: 0.5,
		duration: 3000
	}).setTween(t1)
	.addIndicators()
	.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		offset: '3100px',
	}).setClassToggle("#hello",'alive')
	.addIndicators()
	.addTo(controller);

	var scene3 = new ScrollMagic.Scene({
		offset: '3800px',
	}).setClassToggle("#im",'alive')
	.addIndicators()
	.addTo(controller);
	
	var scene3 = new ScrollMagic.Scene({
		offset: '4500px',
	}).setClassToggle("#LETS",'alive')
	.addIndicators()
	.addTo(controller);
var fadeout_tween = TweenMax.to('#toDie', 0.375,{ opacity: 0 });

	var scene4 = new ScrollMagic.Scene({
		offset: '5700px',
	})
	.setTween(fadeout_tween)
	//.setClassToggle("#toDie",'die')
	.addIndicators()
	.addTo(controller);
	var fadein_tween = TweenMax.to('#navigation', 0.375,{ opacity: 1 });

	

	var scene5 = new ScrollMagic.Scene({
		offset: '5999px',
	})
	.setTween(fadein_tween)
	.setClassToggle("#toDie",'die')
	//.setClassToggle("#navigation",'alive')
	.addIndicators()
	.addTo(controller);


	$( "#middle" ).click(function() {
  		$("#middle").html("<h3> E-mail: khalili@sfu.ca or sinakhalili@outlook.com or sina@sinakhalili.com <br> Phone:(+1)778-927-6771 <br> Feel free to connect on linkedin by clicking the links below and on github above.  </h3>");
	});








});