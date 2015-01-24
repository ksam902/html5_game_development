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


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiwBJQgKgFgCgIIABgOIgdgBQgPgFgEgLIgBgPIgBgNQgBgFADgEQAIgMArgLQASgFAEgIQADgJACgEQAJgPBSgCQAlgdAvAFQArAFAqAbQBZAEAZAOQAIAFABAHQABAEgBAGQAAAMgCACQgGAIgcAGIApAVQAIAFAAAMQAAAGgGAEIgcAQIg0gBIgXgBIgEAIQgQAbgUAAQgMAAgGgDQghgCgTgFIgRgEQgHgCgKAAQgDABgGAHQgFAGgLACQhugNgbgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-9.9,47.8,20);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiwBJQgKgFgCgIIABgOIgdgBQgPgFgEgLIgBgPIgBgNQgBgFADgEQAIgMArgLQASgFAEgIQADgJACgEQAJgPBSgCQAlgdAvAFQArAFAqAbQBZAEAZAOQAIAFABAHQABAEgBAGQAAAMgCACQgGAIgcAGIApAVQAIAFAAAMQAAAGgGAEIgcAQIg0gBIgXgBIgEAIQgQAbgUAAQgMAAgGgDQghgCgTgFIgRgEQgHgCgKAAQgDABgGAHQgFAGgLACQhugNgbgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-9.9,47.8,20);


(lib.heartIcon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguBjIg+gzQgigUgJgaQgDgIgBghQAAhgBDACQAdACAaAVQAWAQALAYQAFgRAJgMQAXgfBKgIQAtATAAA7QgBAjgtA+QgSAZg+BIIgBAAIABABIAAACQgCACgGAAQgVAAgvgog");
	this.shape.setTransform(15.6,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,27.9);


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


// stage content:
(lib.scr_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{heart_icon:0,"heart_icon":300});

	// volOff
	this.instance = new lib.volOff();
	this.instance.setTransform(443.9,382,1,1,0,0,0,9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(301));

	// volOn
	this.instance_1 = new lib.volOn();
	this.instance_1.setTransform(443.9,382,1,1,0,0,0,9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(301));

	// menu
	this.text = new cjs.Text("Menu", "7px 'Verdana'", "#444444");
	this.text.lineHeight = 9;
	this.text.lineWidth = 20;
	this.text.setTransform(494.4,374.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s("#000000").ss(0.7,1,1).rr(-45,-10,90,20,4);
	this.shape.setTransform(507.2,381.8,0.551,0.966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(301));

	// stats
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("EAq9gCVIAAErMhV5AAAIAAkr");
	this.shape_1.setTransform(275,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Egq8ACVIAAkqMBV5AAAIAAEqg");
	this.shape_2.setTransform(275,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(301));

	// developerInfo
	this.text_1 = new cjs.Text("Developed by: Kyle Samson", "7px 'Verdana'", "#66CCFF");
	this.text_1.lineHeight = 9;
	this.text_1.lineWidth = 172;
	this.text_1.setTransform(0.1,372.1,0.848,1.433);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(301));

	// healthIcon
	this.instance_2 = new lib.heartIcon();
	this.instance_2.setTransform(178.1,384.4,1,1,0,0,0,15.6,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.52,scaleY:0.7},90).to({scaleX:1,scaleY:1},210).wait(1));

	// healthBar
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.7,1,1).p("AxLgxMAiXAAAIAABjMgiXAAAg");
	this.shape_3.setTransform(308.1,385);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AxKAxIAAhiMAiVAAAIAABig");
	this.shape_4.setTransform(308.1,385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(301));

	// cloud2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiwBJQgKgFgCgIIABgOIgdgBQgPgFgEgLIgBgPIgBgNQgBgFADgEQAIgMArgLQASgFAEgIQADgJACgEQAJgPBSgCQAlgdAvAFQArAFAqAbQBZAEAZAOQAIAFABAHQABAEgBAGQAAAMgCACQgGAIgcAGIApAVQAIAFAAAMQAAAGgGAEIgcAQIg0gBIgXgBIgEAIQgQAbgUAAQgMAAgGgDQghgCgTgFIgRgEQgHgCgKAAQgDABgGAHQgFAGgLACQhugNgbgNg");
	this.shape_5.setTransform(-23.9,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiwBJQgKgFgCgIIABgOIgdgBQgPgFgEgLQgBgEAAgLIgBgNQgBgFADgEQAIgMArgLQASgFAEgIQADgJACgEQAJgPBSgCQAlgdAvAFQArAFAqAbQBZAEAZAOQAIAFABAHQABAEgBAGQAAAMgCACQgGAIgcAGIApAVQAIAFAAAMQAAAGgGAEIgcAQIg0gBIgXgBIgEAIQgQAbgUAAQgMAAgGgDQghgCgTgFIgRgEQgHgCgKAAQgDABgGAHQgFAGgLACQhugNgbgNg");
	this.shape_6.setTransform(-19.9,40);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({x:-21.9},0).to({_off:true},1).wait(1).to({_off:false,x:-17.9},0).wait(1).to({x:-16},0).wait(1).to({x:-14},0).wait(1).to({x:-12},0).to({_off:true},1).wait(1).to({_off:false,x:-8},0).wait(1).to({x:-6.1},0).wait(1).to({x:-4.1},0).wait(1).to({x:-2.1},0).to({_off:true},1).wait(1).to({_off:false,x:1.9},0).wait(1).to({x:3.8},0).wait(1).to({x:5.8},0).wait(1).to({x:7.8},0).to({_off:true},1).wait(1).to({_off:false,x:11.8},0).wait(1).to({x:13.7},0).wait(1).to({x:15.7},0).wait(1).to({x:17.7},0).to({_off:true},1).wait(1).to({_off:false,x:21.6},0).wait(1).to({x:23.6},0).wait(1).to({x:25.6},0).wait(1).to({x:27.6},0).to({_off:true},1).wait(1).to({_off:false,x:31.6},0).wait(1).to({x:33.5},0).wait(1).to({x:35.5},0).wait(1).to({x:37.5},0).to({_off:true},1).wait(1).to({_off:false,x:41.4},0).wait(1).to({x:43.4},0).wait(1).to({x:45.4},0).wait(1).to({x:47.4},0).to({_off:true},1).wait(1).to({_off:false,x:51.3},0).wait(1).to({x:53.3},0).wait(1).to({x:55.3},0).wait(1).to({x:57.3},0).to({_off:true},1).wait(1).to({_off:false,x:61.2},0).wait(1).to({x:63.2},0).wait(1).to({x:65.2},0).wait(1).to({x:67.2},0).to({_off:true},1).wait(1).to({_off:false,x:71.1},0).wait(1).to({x:73.1},0).wait(1).to({x:75.1},0).wait(1).to({x:77.1},0).to({_off:true},1).wait(1).to({_off:false,x:81},0).wait(1).to({x:83},0).wait(1).to({x:85},0).wait(1).to({x:87},0).to({_off:true},1).wait(1).to({_off:false,x:90.9},0).wait(1).to({x:92.9},0).wait(1).to({x:94.9},0).wait(1).to({x:96.9},0).to({_off:true},1).wait(1).to({_off:false,x:100.8},0).wait(1).to({x:102.8},0).wait(1).to({x:104.8},0).wait(1).to({x:106.8},0).wait(1).to({x:108.7},0).wait(1).to({x:110.7},0).wait(1).to({x:112.7},0).wait(1).to({x:114.7},0).wait(1).to({x:116.7},0).to({_off:true},1).wait(1).to({_off:false,x:120.6},0).wait(1).to({x:122.6},0).wait(1).to({x:124.6},0).wait(1).to({x:126.6},0).wait(1).to({x:128.5},0).wait(1).to({x:130.5},0).wait(1).to({x:132.5},0).wait(1).to({x:134.5},0).wait(1).to({x:136.5},0).wait(1).to({x:138.4},0).wait(1).to({x:140.4},0).wait(1).to({x:142.4},0).wait(1).to({x:144.4},0).wait(1).to({x:146.4},0).wait(1).to({x:148.3},0).wait(1).to({x:150.3},0).wait(1).to({x:152.3},0).wait(1).to({x:154.3},0).wait(1).to({x:156.3},0).wait(1).to({x:158.2},0).wait(1).to({x:160.2},0).wait(1).to({x:162.2},0).wait(1).to({x:164.2},0).wait(1).to({x:166.2},0).wait(1).to({x:168.1},0).wait(1).to({x:170.1},0).wait(1).to({x:172.1},0).wait(1).to({x:174.1},0).wait(1).to({x:176.1},0).wait(1).to({x:178},0).wait(1).to({x:180},0).wait(1).to({x:182},0).wait(1).to({x:184},0).wait(1).to({x:186},0).wait(1).to({x:187.9},0).wait(1).to({x:189.9},0).wait(1).to({x:191.9},0).wait(1).to({x:193.9},0).wait(1).to({x:195.8},0).wait(1).to({x:197.8},0).wait(1).to({x:199.8},0).wait(1).to({x:201.8},0).wait(1).to({x:203.8},0).wait(1).to({x:205.8},0).wait(1).to({x:207.7},0).wait(1).to({x:209.7},0).wait(1).to({x:211.7},0).wait(1).to({x:213.7},0).wait(1).to({x:215.6},0).wait(1).to({x:217.6},0).wait(1).to({x:219.6},0).wait(1).to({x:221.6},0).wait(1).to({x:223.6},0).wait(1).to({x:225.5},0).wait(1).to({x:227.5},0).wait(1).to({x:229.5},0).wait(1).to({x:231.5},0).wait(1).to({x:233.5},0).wait(1).to({x:235.4},0).wait(1).to({x:237.4},0).wait(1).to({x:239.4},0).wait(1).to({x:241.4},0).wait(1).to({x:243.4},0).wait(1).to({x:245.3},0).wait(1).to({x:247.3},0).wait(1).to({x:249.3},0).wait(1).to({x:251.3},0).wait(1).to({x:253.3},0).wait(1).to({x:255.2},0).wait(1).to({x:257.2},0).wait(1).to({x:259.2},0).wait(1).to({x:261.2},0).wait(1).to({x:263.2},0).wait(1).to({x:265.1},0).wait(1).to({x:267.1},0).wait(1).to({x:269.1},0).wait(1).to({x:271.1},0).wait(1).to({x:273.1},0).wait(1).to({x:275},0).wait(1).to({x:277},0).wait(1).to({x:279},0).wait(1).to({x:281},0).to({_off:true},1).wait(1).to({_off:false,x:284.9},0).wait(1).to({x:286.9},0).wait(1).to({x:288.9},0).wait(1).to({x:290.9},0).to({_off:true},1).wait(1).to({_off:false,x:294.8},0).wait(1).to({x:296.8},0).wait(1).to({x:298.8},0).wait(1).to({x:300.8},0).to({_off:true},1).wait(1).to({_off:false,x:304.7},0).wait(1).to({x:306.7},0).wait(1).to({x:308.7},0).wait(1).to({x:310.7},0).to({_off:true},1).wait(1).to({_off:false,x:314.6},0).wait(1).to({x:316.6},0).wait(1).to({x:318.6},0).wait(1).to({x:320.6},0).to({_off:true},1).wait(1).to({_off:false,x:324.5},0).wait(1).to({x:326.5},0).wait(1).to({x:328.5},0).wait(1).to({x:330.5},0).to({_off:true},1).wait(1).to({_off:false,x:334.4},0).wait(1).to({x:336.4},0).wait(1).to({x:338.4},0).wait(1).to({x:340.3},0).to({_off:true},1).wait(1).to({_off:false,x:344.3},0).wait(1).to({x:346.3},0).wait(1).to({x:348.3},0).wait(1).to({x:350.3},0).to({_off:true},1).wait(1).to({_off:false,x:354.2},0).wait(1).to({x:356.2},0).wait(1).to({x:358.2},0).wait(1).to({x:360.1},0).to({_off:true},1).wait(1).to({_off:false,x:364.1},0).wait(1).to({x:366.1},0).wait(1).to({x:368.1},0).wait(1).to({x:370},0).to({_off:true},1).wait(1).to({_off:false,x:374},0).wait(1).to({x:376},0).wait(1).to({x:378},0).wait(1).to({x:379.9},0).to({_off:true},1).wait(1).to({_off:false,x:383.9},0).wait(1).to({x:385.9},0).wait(1).to({x:387.9},0).wait(1).to({x:389.8},0).to({_off:true},1).wait(1).to({_off:false,x:393.8},0).wait(1).to({x:395.8},0).wait(1).to({x:397.8},0).wait(1).to({x:399.7},0).to({_off:true},1).wait(1).to({_off:false,x:403.7},0).wait(1).to({x:405.7},0).wait(1).to({x:407.7},0).wait(1).to({x:409.6},0).to({_off:true},1).wait(1).to({_off:false,x:413.6},0).wait(1).to({x:415.6},0).wait(1).to({x:417.6},0).wait(1).to({x:419.5},0).to({_off:true},1).wait(1).to({_off:false,x:423.5},0).wait(1).to({x:425.5},0).wait(1).to({x:427.4},0).wait(1).to({x:429.4},0).to({_off:true},1).wait(1).to({_off:false,x:433.4},0).wait(1).to({x:435.4},0).wait(1).to({x:437.4},0).wait(1).to({x:439.3},0).to({_off:true},1).wait(1).to({_off:false,x:443.3},0).wait(1).to({x:445.3},0).wait(1).to({x:447.2},0).wait(1).to({x:449.2},0).to({_off:true},1).wait(1).to({_off:false,x:453.2},0).wait(1).to({x:455.2},0).wait(1).to({x:457.1},0).wait(1).to({x:459.1},0).to({_off:true},1).wait(1).to({_off:false,x:463.1},0).wait(1).to({x:465.1},0).wait(1).to({x:467},0).wait(1).to({x:469},0).wait(1).to({x:471},0).wait(1).to({x:473},0).wait(1).to({x:475},0).wait(1).to({x:476.9},0).wait(1).to({x:478.9},0).to({_off:true},1).wait(1).to({_off:false,x:482.9},0).wait(1).to({x:484.9},0).wait(1).to({x:486.8},0).wait(1).to({x:488.8},0).wait(1).to({x:490.8},0).wait(1).to({x:492.8},0).wait(1).to({x:494.8},0).wait(1).to({x:496.7},0).wait(1).to({x:498.7},0).wait(1).to({x:500.7},0).wait(1).to({x:502.7},0).wait(1).to({x:504.7},0).wait(1).to({x:506.6},0).wait(1).to({x:508.6},0).wait(1).to({x:510.6},0).wait(1).to({x:512.6},0).wait(1).to({x:514.5},0).wait(1).to({x:516.5},0).wait(1).to({x:518.5},0).wait(1).to({x:520.5},0).wait(1).to({x:522.5},0).wait(1).to({x:524.5},0).wait(1).to({x:526.4},0).wait(1).to({x:528.4},0).wait(1).to({x:530.4},0).wait(1).to({x:532.4},0).wait(1).to({x:534.3},0).wait(1).to({x:536.3},0).wait(1).to({x:538.3},0).wait(1).to({x:540.3},0).wait(1).to({x:542.3},0).wait(1).to({x:544.2},0).wait(1).to({x:546.2},0).wait(1).to({x:548.2},0).wait(1).to({x:550.2},0).wait(1).to({x:552.2},0).wait(1).to({x:554.1},0).wait(1).to({x:556.1},0).wait(1).to({x:558.1},0).wait(1).to({x:560.1},0).wait(1).to({x:562.1},0).wait(1).to({x:564},0).wait(1).to({x:566},0).wait(1).to({x:568},0).wait(1).to({x:570},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:-10},0).to({_off:true},1).wait(4).to({_off:false,x:-0.1},0).to({_off:true},1).wait(4).to({_off:false,x:9.8},0).to({_off:true},1).wait(4).to({_off:false,x:19.7},0).to({_off:true},1).wait(4).to({_off:false,x:29.6},0).to({_off:true},1).wait(4).to({_off:false,x:39.5},0).to({_off:true},1).wait(4).to({_off:false,x:49.4},0).to({_off:true},1).wait(4).to({_off:false,x:59.3},0).to({_off:true},1).wait(4).to({_off:false,x:69.2},0).to({_off:true},1).wait(4).to({_off:false,x:79.1},0).to({_off:true},1).wait(4).to({_off:false,x:89},0).to({_off:true},1).wait(4).to({_off:false,x:98.9},0).to({_off:true},1).wait(9).to({_off:false,x:118.7},0).to({_off:true},1).wait(82).to({_off:false,x:282.9},0).to({_off:true},1).wait(4).to({_off:false,x:292.8},0).to({_off:true},1).wait(4).to({_off:false,x:302.7},0).to({_off:true},1).wait(4).to({_off:false,x:312.6},0).to({_off:true},1).wait(4).to({_off:false,x:322.5},0).to({_off:true},1).wait(4).to({_off:false,x:332.4},0).to({_off:true},1).wait(4).to({_off:false,x:342.3},0).to({_off:true},1).wait(4).to({_off:false,x:352.2},0).to({_off:true},1).wait(4).to({_off:false,x:362.1},0).to({_off:true},1).wait(4).to({_off:false,x:372},0).to({_off:true},1).wait(4).to({_off:false,x:381.9},0).to({_off:true},1).wait(4).to({_off:false,x:391.8},0).to({_off:true},1).wait(4).to({_off:false,x:401.7},0).to({_off:true},1).wait(4).to({_off:false,x:411.6},0).to({_off:true},1).wait(4).to({_off:false,x:421.5},0).to({_off:true},1).wait(4).to({_off:false,x:431.4},0).to({_off:true},1).wait(4).to({_off:false,x:441.3},0).to({_off:true},1).wait(4).to({_off:false,x:451.2},0).to({_off:true},1).wait(4).to({_off:false,x:461.1},0).to({_off:true},1).wait(9).to({_off:false,x:480.9},0).to({_off:true},1).wait(45));

	// cloud1
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(-50,59.9);

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(560,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},300).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:560},300).wait(1));

	// background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7EC0EE").s().p("Egq8AIqIAAxUMBV5AAAIAARUg");
	this.shape_7.setTransform(275,55.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#458B00").s().p("Egq8AWkMAAAgtIMBV5AAAIAAAAMAAAAtIg");
	this.shape_8.setTransform(275,255.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7EC0EE").s().p("Egq8AZ3IAAAAMAAAgztMBV5AAAMAAAAztg");
	this.shape_9.setTransform(275,165.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#458B00").s().p("Egq8AFYIAAqvMBV5AAAIAAAAIAAKvg");
	this.shape_10.setTransform(275,365.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},299).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201.1,199,624.9,401);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;