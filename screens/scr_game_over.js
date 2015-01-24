(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 20,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.cloud1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("Ap0GvQgXgngLgvIgGgoQAAgaAihcIAhhYIgNg4QgOgzAAgTQgJhSAfhDQBAiEDMAnQARg4AQgsQAfhWA2gsQCqiLGsDgQAZAQAVAsQAMAXAMAdQA+AQAwAiQAmAbATAcQAjA1ALA+QAGAlAABDIACBJQgDBCgaAxQhNCWkJgVQAMA3gaAyQg0Bki9AAQhhAAhFgmQg0glgMAAQgXAVgkAVQhGArhLAAQikAAhJh7gAktEnIAIgNIgCgDIgGAAIAAAQg");
	this.shape.setTransform(67,55.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.9,110.8);


// stage content:
(lib.scr_game_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud3
	this.instance = new lib.cloud1();
	this.instance.setTransform(-151.9,163,0.701,0.445,0,0,0,67,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:597.4},301).wait(1));

	// cloud2
	this.cloud2 = new lib.cloud1();
	this.cloud2.setTransform(-28.9,26.4,0.507,0.206,0,0,0,67,55.4);

	this.timeline.addTween(cjs.Tween.get(this.cloud2).to({x:584.4},301).wait(1));

	// cloud1
	this.cloud1 = new lib.cloud1();
	this.cloud1.setTransform(-66.5,74.4,1,0.819,0,0,0,67,55.4);

	this.timeline.addTween(cjs.Tween.get(this.cloud1).to({x:617.4},301).wait(1));

	// txtGameOver
	this.text = new cjs.Text("Game Over!", "36px 'Chalkduster'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 262;
	this.text.setTransform(274.2,80.3);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},301).wait(1));

	// score6
	this.text_1 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(409,268.2);

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({_off:true},301).wait(1));

	// score5
	this.text_2 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_2.lineHeight = 12;
	this.text_2.lineWidth = 100;
	this.text_2.setTransform(409,251.2);

	this.timeline.addTween(cjs.Tween.get(this.text_2).to({_off:true},301).wait(1));

	// score4
	this.text_3 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(409,234.6);

	this.timeline.addTween(cjs.Tween.get(this.text_3).to({_off:true},301).wait(1));

	// score3
	this.text_4 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 100;
	this.text_4.setTransform(409,216.4);

	this.timeline.addTween(cjs.Tween.get(this.text_4).to({_off:true},301).wait(1));

	// score2
	this.text_5 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 100;
	this.text_5.setTransform(409,199.4);

	this.timeline.addTween(cjs.Tween.get(this.text_5).to({_off:true},301).wait(1));

	// score1
	this.text_6 = new cjs.Text("KTS - 10000", "10px 'Chalkduster'", "#FFFFFF");
	this.text_6.lineHeight = 12;
	this.text_6.lineWidth = 100;
	this.text_6.setTransform(409,182.8);

	this.timeline.addTween(cjs.Tween.get(this.text_6).to({_off:true},301).wait(1));

	// highScores
	this.text_7 = new cjs.Text("High Scores", "14px 'Chalkduster'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 114;
	this.text_7.setTransform(457,144.2);

	this.timeline.addTween(cjs.Tween.get(this.text_7).to({_off:true},301).wait(1));

	// brdHighScores
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.251)").s().p("AmJNpQh+AAhZhXQhZhWAAh7IAAyBQAAh6BZhWQBZhYB+AAIMTAAQB+AABYBYQBaBWAAB6IAASBQAAB7haBWQhYBXh+AAg");
	this.shape.setTransform(458.8,225.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},301).wait(1));

	// accuaracy
	this.text_8 = new cjs.Text("Accuracy:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_8.lineHeight = 12;
	this.text_8.lineWidth = 99;
	this.text_8.setTransform(32.4,216.4);

	this.timeline.addTween(cjs.Tween.get(this.text_8).to({_off:true},301).wait(1));

	// wavesCompleted
	this.text_9 = new cjs.Text("# Waves:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_9.lineHeight = 12;
	this.text_9.lineWidth = 101;
	this.text_9.setTransform(32.4,199.4);

	this.timeline.addTween(cjs.Tween.get(this.text_9).to({_off:true},301).wait(1));

	// kills
	this.text_10 = new cjs.Text("Kills:", "10px 'Chalkduster'", "#FFFFFF");
	this.text_10.lineHeight = 12;
	this.text_10.lineWidth = 100;
	this.text_10.setTransform(32.4,182.8);

	this.timeline.addTween(cjs.Tween.get(this.text_10).to({_off:true},301).wait(1));

	// finalStats
	this.text_11 = new cjs.Text("Final Stats", "14px 'Chalkduster'", "#FFFFFF");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 16;
	this.text_11.lineWidth = 96;
	this.text_11.setTransform(86,144.2);

	this.timeline.addTween(cjs.Tween.get(this.text_11).to({_off:true},301).wait(1));

	// brdInstructions
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.251)").s().p("AmJNpQh+AAhZhXQhZhWAAh7IAAyBQAAh6BZhWQBZhYB+AAIMTAAQB+AABYBYQBaBWAAB6IAASBQAAB7haBWQhYBXh+AAg");
	this.shape_1.setTransform(89.2,225.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},301).wait(1));

	// newGame
	this.text_12 = new cjs.Text("New Game", "12px 'Chalkduster'", "#FFFFFF");
	this.text_12.lineHeight = 14;
	this.text_12.lineWidth = 100;
	this.text_12.setTransform(226.5,182.8);

	this.timeline.addTween(cjs.Tween.get(this.text_12).to({_off:true},300).wait(2));

	// instructions
	this.text_13 = new cjs.Text("Instructions", "12px 'Chalkduster'", "#FFFFFF");
	this.text_13.lineHeight = 14;
	this.text_13.lineWidth = 100;
	this.text_13.setTransform(226.5,206.2);

	this.timeline.addTween(cjs.Tween.get(this.text_13).to({_off:true},300).wait(2));

	// quit
	this.text_14 = new cjs.Text("Quit", "12px 'Chalkduster'", "#FFFFFF");
	this.text_14.lineHeight = 14;
	this.text_14.lineWidth = 100;
	this.text_14.setTransform(226.5,226.5);

	this.timeline.addTween(cjs.Tween.get(this.text_14).to({_off:true},300).wait(2));

	// developerInfo
	this.text_15 = new cjs.Text("Developed By: Kyle Samson", "12px 'Chalkduster'", "#FFFFFF");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 14;
	this.text_15.lineWidth = 226;
	this.text_15.setTransform(272,380.8);

	this.timeline.addTween(cjs.Tween.get(this.text_15).to({_off:true},301).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC0EE").s().p("Egq8AZ3IAAAAMAAAgztMBV5AAAMAAAAztg");
	this.shape_2.setTransform(275.3,165.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#458B00").s().p("Egq8AFYIAAqvMBV5AAAIAAAAIAAKvg");
	this.shape_3.setTransform(275.3,365.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:275.3}},{t:this.shape_2,p:{x:275.3}}]}).to({state:[{t:this.shape_3,p:{x:275}},{t:this.shape_2,p:{x:275}}]},299).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.1,200,749.3,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;