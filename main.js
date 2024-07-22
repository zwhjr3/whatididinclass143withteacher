function preload() {
mario_gameover =  loadSound("gameover.wav");
mario_kick = loadSound("kick.wav");
mario_jump = loadSound("jump.wav");
mario_die = loadSound("mariodie.wav");
world_start = loadSound("world_start.wav");
mario_coin = loadSound("coin.wav");
setSprites();
MarioAnimation();
}
function setup() {
	canvas = createCanvas(1200, 350);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('game_console');
	video.size(800,400);
	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
	console.log("model loaded");
}

function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}

}

function draw() {
	game();
}