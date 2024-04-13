img = "dog_cat.jpg";

function preload() {

}



function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}


function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#0000FF");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 345 );
}
