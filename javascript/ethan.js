$(document).ready(function(){

	let spinny = document.getElementById("spinny");
    let ethan = document.getElementById("ethan");

    let t1 = new TimelineLite();

    t1.fromTo(spinny, 1,{y:"-705vh",x:"0"}, {y:"110",x:"-80"});
    t1.to(spinny, 1,{rotation:350},"-=1");
    t1.to('body', 1, {backgroundColor: '#38ced7'});
	//Init ScrollMagic
	let controller = new ScrollMagic.Controller();

	let scene = new ScrollMagic.Scene({
		offset: 0.5,
		duration: 3000
	}).setTween(t1)
	.addTo(controller);

    let fadein_tween0 = TweenMax.to('#selfroast', 0.375,{ opacity: 1 });
	let scene2 = new ScrollMagic.Scene({
		offset: '3100px',
    }).setClassToggle("#hello",'alive')
    .setTween(fadein_tween0)
    .addTo(controller);
    
    let scene2text = new ScrollMagic.Scene({
		offset: '3100px',
	}).setClassToggle("#hello",'alive')
	.addTo(controller);

	let scene3 = new ScrollMagic.Scene({
		offset: '3800px',
	}).setClassToggle("#im",'alive')
	.addTo(controller);
	
	let scene4 = new ScrollMagic.Scene({
		offset: '4500px',
	}).setClassToggle("#LETS",'alive')
	.addTo(controller);
    let fadeout_tween = TweenMax.to('#toDie', 0.375,{ opacity: 0 });

	let scene5 = new ScrollMagic.Scene({
		offset: '5700px',
	})
	.setTween(fadeout_tween)
	.addTo(controller);
	let fadein_tween = TweenMax.to('#navigation', 0.375,{ opacity: 1 });

	let scene6 = new ScrollMagic.Scene({
		offset: '5999px',
	})
	.setTween(fadein_tween)
	.setClassToggle("#toDie",'die')
    .addTo(controller);
});
