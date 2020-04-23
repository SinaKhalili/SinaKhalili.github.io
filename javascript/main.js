$(document).ready(function(){
	//init

	let logo = document.getElementById("logo");
    let sina = document.getElementById("sina");
    //let tween = TweenLite.to(logo, 5, {y:"500" , x: "40", scale: 1.01});


    let t1 = new TimelineLite();

    t1.fromTo(logo, 1,{y:"-705vh",x:"0"}, {y:"105",x:"-40"});
    t1.to(logo, 1,{rotation:350},"-=1");
    t1.to('body', 1, {backgroundColor: '#D78C4D'});
	//Init ScrollMagic
	let controller = new ScrollMagic.Controller();

	let scene = new ScrollMagic.Scene({
		//triggerElement: '.trigger',
		offset: 0.5,
		duration: 3000
	}).setTween(t1)
	//.addIndicators()
	.addTo(controller);

	var scenex = new ScrollMagic.Scene({offset: '3200px'})
	// animate color and top border in relation to scroll position
	.setTween("#hello", {borderTop: "30px solid white", color: "blue", scale: 0.7}) // the tween durtion can be omitted and defaults to 1
	.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
	.addTo(controller);

	let scene2 = new ScrollMagic.Scene({
		offset: '3100px',
	}).setClassToggle("#hello",'alive')
	//.addIndicators()
	.addTo(controller);

	let scene3 = new ScrollMagic.Scene({
		offset: '3800px',
	}).setClassToggle("#im",'alive')
	//.addIndicators()
	.addTo(controller);
	
	let scene4 = new ScrollMagic.Scene({
		offset: '4500px',
	}).setClassToggle("#LETS",'alive')
	//.addIndicators()
	.addTo(controller);
	let fadeout_tween = TweenMax.to('#toDie', 0.375,{ opacity: 0 });

	let scene5 = new ScrollMagic.Scene({
		offset: '5700px',
	})
	.setTween(fadeout_tween)
	//.setClassToggle("#toDie",'die')
	//.addIndicators()
	.addTo(controller);
	let fadein_tween = TweenMax.to('#navigation', 0.375,{ opacity: 1 });

	

	let scene6 = new ScrollMagic.Scene({
		offset: '5999px',
	})
	.setTween(fadein_tween)
	.setClassToggle("#toDie",'die')
	//.setClassToggle("#navigation",'alive')
	//.addIndicators()
	.addTo(controller);

	//Commented out, but here's my contact info if you're here

	//$( "#middle" ).click(function() {
  	//	$("#middle").html("<h3> E-mail: khalili@sfu.ca or sinakhalili@outlook.com or sina@sinakhalili.com  Feel free to connect on linkedin by clicking the links below and on github above.  </h3>");
	//});








});
