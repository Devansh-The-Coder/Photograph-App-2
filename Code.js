function draw() {
    image(video,0,0,640,480);
    tint(tintColor);
}
function AddFilterColor() {
    tintColor = document.getElementById("Input_color").value 
}
function setup() {
    canvas = createCanvas(640,480); canvas.position(430,945)
    video = createCapture(VIDEO); video.hide(); tintColor = ""
}
function TakeSnapshot() { 
    save("selfie.png")
}; 