let img;
let deconstructionLevel = 0;
let link;

function preload() {
  img = loadImage('image1.png'); // Replace with your image path or URL
}

function setup() {
  createCanvas(img.width, img.height + 70); // Extra space for text area
  image(img, 0, 0);

  // Link to your project or site
  link = createA('https://futurism.com/chatbot-abuse', 'Read this Article', '_blank');
  link.position(10, img.height + 80); // Position below canvas
  link.style('font-size', '25px');
  link.style('color', '#007acc');
}

function draw() {
  // Draw semi-transparent instruction box
  noStroke();
  fill(0, 150);
  rect(0, height - 80, width, 100);

  // Draw instructional text
  fill(255);
  textSize(25);
  textAlign(LEFT, CENTER);
  text('Click the image to deconstruct it.', 10, height - 50);
  text('Press "s" to save the current result.', 10, height - 30);
}

function mousePressed() {
  if (mouseY < img.height) {
    deconstructImage();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('deconstructed_image', 'png');
  }
}

function deconstructImage() {
  deconstructionLevel++;
  let tiles = pow(2, deconstructionLevel);
  let w = img.width / tiles;
  let h = img.height / tiles;

  for (let i = 0; i < tiles; i++) {
    for (let j = 0; j < tiles; j++) {
      let sx = int(random(tiles)) * w;
      let sy = int(random(tiles)) * h;
      let dx = i * w;
      let dy = j * h;
      copy(img, sx, sy, w, h, dx, dy, w, h);
    }
  }
}
