$(document).ready(function () {
  //init

  let logo = document.getElementById("logo");
  let sina = document.getElementById("sina");
  //let tween = TweenLite.to(logo, 5, {y:"500" , x: "40", scale: 1.01});

  let t1 = new TimelineLite();

  t1.fromTo(logo, 1, { y: "-705vh", x: "0" }, { y: "105", x: "-40" });
  t1.to(logo, 1, { rotation: 350 }, "-=1");
  t1.to("body", 1, { backgroundColor: "#D78C4D" });
  //Init ScrollMagic
  let controller = new ScrollMagic.Controller();

  let scene = new ScrollMagic.Scene({
    //triggerElement: '.trigger',
    offset: 0.5,
    duration: 3000,
  })
    .setTween(t1)
    //.addIndicators()
    .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
    offset: "3100px",
  })
    .setClassToggle("#hello", "alive")
    //.addIndicators()
    .addTo(controller);

  let scene3 = new ScrollMagic.Scene({
    offset: "3800px",
  })
    .setClassToggle("#im", "alive")
    //.addIndicators()
    .addTo(controller);

  let scene4 = new ScrollMagic.Scene({
    offset: "4500px",
  })
    .setClassToggle("#LETS", "alive")
    //.addIndicators()
    .addTo(controller);
  let fadeout_tween = TweenMax.to("#toDie", 0.375, { opacity: 0 });

  let scene5 = new ScrollMagic.Scene({
    offset: "5700px",
  })
    .setTween(fadeout_tween)
    //.setClassToggle("#toDie",'die')
    //.addIndicators()
    .addTo(controller);

  let t2 = new TimelineLite();
  t2.to("body", 1, { backgroundColor: "#e5eaf5" });
  t2.to("#navigation", 0.375, { opacity: 1 });

  let scene6 = new ScrollMagic.Scene({
    offset: "5900px",
  })
    .setTween(t2)
    .setClassToggle("#toDie", "die")
    //.setClassToggle("#navigation",'alive')
    //.addIndicators()
    .addTo(controller);

  //Commented out, but here's my contact info if you're here

  //$( "#middle" ).click(function() {
  //	$("#middle").html("<h3> E-mail: khalili@sfu.ca or sinakhalili@outlook.com or sina@sinakhalili.com  Feel free to connect on linkedin by clicking the links below and on github above.  </h3>");
  //});
});

function url_looper() {
  let frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let x = 0;
  loop();
  setTimeout(url_looper, 50);
}
let clocks = ["🕑", "🕒", "🕓", "🕕", "🕖", "🕘", "🕙", "🕛"];
let moons = ["🌑", "🌒", "🌓", "🌔", "🌝", "🌖", "🌗", "🌘"];
let typing = ["*click*", "*click*", "*click*", "*clack*", "*clack*", "*clack*"];
let hands = [
  "👉" + "\u{1F3FD}" + "⠡",
  "👉" + "\u{1F3FD}" + "⠌",
  "👉" + "\u{1F3FD}" + "⠌",
  "\u{2583}" + "👉" + "\u{1F3FD}",
  "\u{2583}" + "👉" + "\u{1F3FD}",
  "\u{2583}" + "👉" + "\u{1F3FD}",
];
//U+257x
function loop() {
  let status_line = "";
  let time = Math.floor(Date.now() / 100);

  status_line = moons[time % moons.length];
  status_line += clocks[time % moons.length];
  status_line += "\u{1F468}" + "\u{1F3FD}"; // Brown face
  status_line += hands[time % hands.length]; // Brown finger
  status_line += "💻";
  status_line += typing[time % typing.length];

  location.hash = status_line;
}

url_looper();
