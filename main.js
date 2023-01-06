cl = "";
function perload(){
cl = loadImage('https://i.postimg.cc/85dKwcGf/nose.jpg');
}
noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(300, 300); 
    canvas.center();
video = createCapture(VIDEO);
video.size(300 ,300);
video.hide();
posnet = ml5.poseNet(video,modalloaded);
posnet.on('pose',gotPoses);

}

function draw(){
image(video , 0 , 0 , 300 , 300);
image(cl, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myfilter.png');
}

function modalloaded(){
console.log("modal is insilized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y ;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }


}