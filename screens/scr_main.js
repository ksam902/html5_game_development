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



(lib.volOn = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("AhMgbQAAABAAACQAEAQAAAVQAAAIAAAIQgBANgDAKQgDARgGAAQgFAAgEgRQgEgQAAgXQAAgVAEgQQAEgQAFAAQAFAAAEANIBmhCIAAC7IhigtABNgtQApAwgnA6AA4gaQApAegnAl");
	this.shape.setTransform(9.9,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.8,20.9);


(lib.menu = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Menu", "12px 'Chalkduster'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 38;
	this.text.setTransform(27.2,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EC0EE").s().rr(-30,-10,60,20,6);
	this.shape.setTransform(30,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.749)").s().rr(-30,-10,60,20,6);
	this.shape_1.setTransform(32.6,12.8);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,62.6,21.8);


(lib.heartIcon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguBjIg+gzQgigUgJgaQgDgIgBghQAAhgBDACQAdACAaAVQAWAQALAYQAFgRAJgMQAXgfBKgIQAtATAAA7QgBAjgtA+QgSAZg+BIIgBAAIABABIAAACQgCACgGAAQgVAAgvgog");
	this.shape.setTransform(15.6,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,27.9);


(lib.cloud1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("Ap0GvQgXgngLgvIgGgoQAAgaAihcIAhhYIgNg4QgOgzAAgTQgJhSAfhDQBAiEDMAnQARg4AQgsQAfhWA2gsQCqiLGsDgQAZAQAVAsQAMAXAMAdQA+AQAwAiQAmAbATAcQAjA1ALA+QAGAlAABDIACBJQgDBCgaAxQhNCWkJgVQAMA3gaAyQg0Bki9AAQhhAAhFgmQg0glgMAAQgXAVgkAVQhGArhLAAQikAAhJh7gAktEnIAIgNIgCgDIgGAAIAAAQg");
	this.shape.setTransform(67,55.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.9,110.8);


(lib.volOff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.volOn();
	this.instance.setTransform(9.9,9.5,1,1,0,0,0,9.9,9.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("AAAAAIBjBeABjhdIhjBdAhihdIBiBdIhiBe");
	this.shape.setTransform(9.9,9.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.8,20.9);


(lib.cloud = function() {
	this.initialize();

	// Layer 1
	this.cloud1 = new lib.cloud1();
	this.cloud1.setTransform(67,45.4,1,0.819,0,0,0,67,55.4);

	this.addChild(this.cloud1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.9,90.8);


// stage content:
(lib.scr_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// volOff
	this.instance = new lib.volOff();
	this.instance.setTransform(24.1,378.4,1.368,1.117,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},301).wait(1));

	// volOn
	this.instance_1 = new lib.volOn();
	this.instance_1.setTransform(22.9,379.2,1.232,1.296,0,0,0,9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},301).wait(1));

	// menu
	this.menu = new lib.menu();
	this.menu.setTransform(500.7,380.5,1,1,0,0,0,31.2,11.8);

	this.timeline.addTween(cjs.Tween.get(this.menu).to({_off:true},301).wait(1));

	// score
	this.text = new cjs.Text("Score:", "14px 'Chalkduster'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 110;
	this.text.setTransform(223,340.8);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},301).wait(1));

	// numWave
	this.text_1 = new cjs.Text("Wave #:", "12px 'Chalkduster'", "#FFFFFF");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 75;
	this.text_1.setTransform(453,7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({_off:true},301).wait(1));

	// numEnemies
	this.text_2 = new cjs.Text("# Birds Remaining:", "12px 'Chalkduster'", "#FFFFFF");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 157;
	this.text_2.setTransform(291.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_2).to({_off:true},301).wait(1));

	// numProjectiles
	this.text_3 = new cjs.Text("# Arrows Fired:", "12px 'Chalkduster'", "#FFFFFF");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 127;
	this.text_3.setTransform(159.1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_3).to({_off:true},301).wait(1));

	// numKills
	this.text_4 = new cjs.Text("# Kills:", "12px 'Chalkduster'", "#FFFFFF");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 65;
	this.text_4.setTransform(90.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_4).to({_off:true},301).wait(1));

	// numLives
	this.text_5 = new cjs.Text("# Lives:", "12px 'Chalkduster'", "#FFFFFF");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 76;
	this.text_5.setTransform(10.7,7.2);

	this.timeline.addTween(cjs.Tween.get(this.text_5).to({_off:true},301).wait(1));

	// developerInfo
	this.text_6 = new cjs.Text("Developed By: Kyle Samson", "12px 'Chalkduster'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 226;
	this.text_6.setTransform(278,380.9);

	this.timeline.addTween(cjs.Tween.get(this.text_6).to({_off:true},301).wait(1));

	// heartIcon
	this.instance_2 = new lib.heartIcon();
	this.instance_2.setTransform(170,373.2,1,1,0,0,0,15.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.64,scaleY:0.95},23).to({scaleX:1,scaleY:1},24).to({scaleX:0.64,scaleY:0.95},23).to({scaleX:1,scaleY:1},24).wait(23).to({scaleX:0.64,scaleY:0.95},23).wait(115).to({scaleX:1,scaleY:1},0).wait(23).to({scaleX:0.64,scaleY:0.95},0).wait(24));

	// healthBar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().rr(-99.4,-3.55,198.8,7.1,3.55);
	this.shape.setTransform(290.6,369);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},301).wait(1));

	// cloud2
	this.instance_3 = new lib.cloud1();
	this.instance_3.setTransform(-80,60,0.448,0.289,0,0,0,67,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:530,y:68.4},299).wait(3));

	// cloud1
	this.instance_4 = new lib.cloud();
	this.instance_4.setTransform(-36.9,39.4,0.553,0.286,0,0,0,67,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:569.1},299).wait(3));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EC0EE").s().p("Egq8AIqIAAxUMBV5AAAIAARUg");
	this.shape_1.setTransform(275,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#458B00").s().p("Egq8AWkMAAAgtIMBV5AAAIAAAAMAAAAtIg");
	this.shape_2.setTransform(275,255.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7EC0EE").s().p("Egq8AZ3IAAAAMAAAgztMBV5AAAMAAAAztg");
	this.shape_3.setTransform(275,165.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#458B00").s().p("Egq8AFYIAAqvMBV5AAAIAAAAIAAKvg");
	this.shape_4.setTransform(275,365.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},299).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165,200,660,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;