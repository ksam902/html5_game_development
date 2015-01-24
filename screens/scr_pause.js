(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.scr_pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txtPause
	this.text = new cjs.Text("PAUSE!", "36px 'Chalkduster'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 192;
	this.text.setTransform(272.4,80.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(301));

	// score6
	this.text_1 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(409,268.2);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(301));

	// score5
	this.text_2 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_2.lineHeight = 12;
	this.text_2.lineWidth = 100;
	this.text_2.setTransform(409,251.2);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(301));

	// score4
	this.text_3 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(409,234.6);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(301));

	// score3
	this.text_4 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 100;
	this.text_4.setTransform(409,216.4);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(301));

	// score2
	this.text_5 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 100;
	this.text_5.setTransform(409,199.4);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(301));

	// score1
	this.text_6 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_6.lineHeight = 12;
	this.text_6.lineWidth = 100;
	this.text_6.setTransform(409,182.8);

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(301));

	// highScores
	this.text_7 = new cjs.Text("High Scores", "14px 'Chalkduster'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 114;
	this.text_7.setTransform(457,144.2);

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(301));

	// brdHighScores
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.251)").s().p("AmJNpQh+AAhZhXQhZhWAAh7IAAyBQAAh6BZhWQBZhYB+AAIMTAAQB+AABYBYQBaBWAAB6IAASBQAAB7haBWQhYBXh+AAg");
	this.shape.setTransform(458.8,225.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(301));

	// accuaracy
	this.text_8 = new cjs.Text("Accuracy:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_8.lineHeight = 12;
	this.text_8.lineWidth = 132;
	this.text_8.setTransform(19.4,203.7);

	this.timeline.addTween(cjs.Tween.get(this.text_8).wait(301));

	// wavesCompleted
	this.text_9 = new cjs.Text("Waves Completed:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_9.lineHeight = 12;
	this.text_9.lineWidth = 132;
	this.text_9.setTransform(19.4,186.7);

	this.timeline.addTween(cjs.Tween.get(this.text_9).wait(301));

	// kills
	this.text_10 = new cjs.Text("Kills:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_10.lineHeight = 12;
	this.text_10.lineWidth = 100;
	this.text_10.setTransform(19.4,170.1);

	this.timeline.addTween(cjs.Tween.get(this.text_10).wait(301));

	// stats
	this.text_11 = new cjs.Text("Stats", "14px 'Chalkduster'", "#FFFFFF");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 16;
	this.text_11.lineWidth = 70;
	this.text_11.setTransform(80,144.2);

	this.timeline.addTween(cjs.Tween.get(this.text_11).wait(301));

	// brdInstructions
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.251)").s().p("AmJNpQh+AAhZhXQhZhWAAh7IAAyBQAAh6BZhWQBZhYB+AAIMTAAQB+AABYBYQBaBWAAB6IAASBQAAB7haBWQhYBXh+AAg");
	this.shape_1.setTransform(89.2,225.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(301));

	// resume
	this.text_12 = new cjs.Text("Resume", "12px 'Chalkduster'", "#FFFFFF");
	this.text_12.lineHeight = 14;
	this.text_12.lineWidth = 100;
	this.text_12.setTransform(226.5,165.8);

	this.timeline.addTween(cjs.Tween.get(this.text_12).to({_off:true},300).wait(1));

	// newGame
	this.text_13 = new cjs.Text("New Game", "12px 'Chalkduster'", "#FFFFFF");
	this.text_13.lineHeight = 14;
	this.text_13.lineWidth = 100;
	this.text_13.setTransform(226.5,189.8);

	this.timeline.addTween(cjs.Tween.get(this.text_13).to({_off:true},300).wait(1));

	// instructions
	this.text_14 = new cjs.Text("Instructions", "12px 'Chalkduster'", "#FFFFFF");
	this.text_14.lineHeight = 14;
	this.text_14.lineWidth = 100;
	this.text_14.setTransform(226.5,214.3);

	this.timeline.addTween(cjs.Tween.get(this.text_14).to({_off:true},300).wait(1));

	// quit
	this.text_15 = new cjs.Text("Quit", "12px 'Chalkduster'", "#FFFFFF");
	this.text_15.lineHeight = 14;
	this.text_15.lineWidth = 100;
	this.text_15.setTransform(226.5,234.6);

	this.timeline.addTween(cjs.Tween.get(this.text_15).to({_off:true},300).wait(1));

	// developerInfo
	this.text_16 = new cjs.Text("Developed By: Kyle Samson", "12px 'Chalkduster'", "#FFFFFF");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 14;
	this.text_16.lineWidth = 226;
	this.text_16.setTransform(272,380.8);

	this.timeline.addTween(cjs.Tween.get(this.text_16).wait(301));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC0EE").s().p("Egq8AZ3IAAAAMAAAgztMBV5AAAMAAAAztg");
	this.shape_2.setTransform(275.3,165.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#458B00").s().p("Egq8AFYIAAqvMBV5AAAIAAAAIAAKvg");
	this.shape_3.setTransform(275.3,365.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:275.3}},{t:this.shape_2,p:{x:275.3}}]}).to({state:[{t:this.shape_3,p:{x:275}},{t:this.shape_2,p:{x:275}}]},299).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275.3,200,550,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;