var slider;
var c;

function setup() {
  slider = createSlider(0, 255, 0);
  slider.position(10, 80);
  slider.style('width', '80px');

  createCanvas(640, 480);
}

function draw() {
  var val = slider.value();
  var ellipsePosition = map(val, 0, 255, -50, width+50);
  var ellipseOpacity = map(val, 0, 255, 0, 1);
  var c = color('hsla(53, 89%, 55%, ellipseOpacity)');
  
  background(val);
  ellipse(ellipsePosition, height/2, 100, 100);
  noStroke();
  fill(c);

}