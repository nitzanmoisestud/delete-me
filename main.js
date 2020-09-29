let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  const x = Math.random() * 100;
    const y = Math.random() * 100;
    const hue =  Math.random()*360;
    if(scroll_pos%10 ===0){

        document.querySelector("body").style.background = `hsl(${hue}, 70%,70%)`
        console.log('not ticking', ticking,last_known_scroll_position);
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});