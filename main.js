statusobject="";

picture="";
function preload(){
 picture=loadImage("Lisa_9.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function draw(){
image(picture,0,0,640,420);
fill("#000000");
text("Person",45,75);
noFill();
stroke("#000000");
rect(30,60,450,350);
fill("#F300FF");
text("Cat",65,200);
noFill();
stroke("#F300FF");
rect(60,180,450,350);
}
function modelLoaded(){
    console.log("modelLoaded");
statusobject=true;
objectDetector.detect(picture,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
            }
            console.log(results);
}