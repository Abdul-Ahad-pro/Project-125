noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
text="";
function preload() {
    text=loadImage("Ahadlmage.png");
}
function setup() {
    video=createCapture(VIDEO);
    video.size(600,400);
    video.position(150,150);
    
    canvas=createCanvas(550,500);
    canvas.position(750,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#FF0000');
    document.getElementById("text_sides").innerHTML=" The Length and Width Of The Text Is " + difference + " px ";
    
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX,noseY"+noseX+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWrist and rightWrist"+leftWristX+rightWristX+difference);
  }
}