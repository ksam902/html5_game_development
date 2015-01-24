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



(lib.willy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(0.1,1,1).p("ABIAAQAAASgKAOQgCAEgDACQgHAHgJAAQgOAAgJgNQgIgOAAgSQAAgRAIgNQACgCABgBQAIgKAMAAQAMAAAJANQAKANAAARgAA0AYQAAAIgCAFQgDAFgDAAQgDAAgDgFQgCgFAAgIQAAgHACgGQADgFADAAQADAAADAFQACAGAAAHgAgJAAQAAASgIANQgJANgOAAQgMAAgJgNQgKgNAAgSQAAgSAKgNQAJgNAMAAQAOAAAJANQAIANAAASgAgeAXQAAAIgCAGQgCAFgDAAQgEAAgDgFQgCgGAAgIQAAgIACgFQADgGAEAAQADAAACAGQACAFAAAIg");
	this.shape.setTransform(41.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAfQgIgMgBgTQABgQAIgOIADgDQAIgKAMAAQAMAAAJANQAKAOgBAQQABATgKAMIgFAHQgHAHgJAAQgNAAgKgOgAAmALQgCAFgBAIQABAIACAFQACAFAEAAQAEAAACgFQACgFAAgIQAAgIgCgFQgCgFgEAAQgEAAgCAFgAg+AeQgJgMAAgSQAAgRAJgOQAKgNANAAQAMAAAJANQAKAOgBARQABASgKAMQgJAOgMAAQgNAAgKgOgAgsAKQgBAFAAAIQAAAIABAGQADAFAEAAQADAAACgFQADgGAAgIQAAgIgDgFQgCgGgDAAQgEAAgDAGg");
	this.shape_1.setTransform(41.5,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqEhQAOg3AAgkIALAAQACAEABAFIAAASQABANgHAXIgLAmIgJACgABpDaQgjgPgFgDQAGgCABgCQAMABAYAKQAfAOAbAHQABAGgJAEQgSgGgjgOgAjODuIgDgJQAMgjAJgSQAQgiAXAHQgRAmghAzgABQAeIAOACQAPACABAEIgkANQgVAHgSAAQAHgIAmgUgAhLhKQAEAAAogVQAdgNAgAOQgeABgUANQgUANgEAAQgcAAgDgHgAgXjsQgigQgKgEQAHgCAAgCQA9AQAVAXQgOAAgfgPgADDkLQgCgFgBgIQABgIACgFQACgFAEAAQAEAAACAFQACAFAAAIQAAAIgCAFQgCAFgEAAQgEAAgCgFgABvkLQgBgGAAgIQAAgIABgFQADgGAEAAQADAAACAGQADAFAAAIQAAAIgDAGQgCAFgDAAQgEAAgDgFg");
	this.shape_2.setTransform(25.8,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgUACIAAgBIAAAAQAjAAAGgEIgEADIglADIAAABIAAgCg");
	this.shape_3.setTransform(41.8,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AipEfQhCgqAAgkQAAgVAOgTQASgZAeAAQAQAABFAjQBGAiAUAAQA8AAARgIQgLg8ggg0QgRgegpgzQgogtgOgcQgYgtAAg0QAAhAA1gwQAvgrBDgRQBEgQAwASQAJAEAIAEIgDADQgJAOAAASQAAATAJANQAJANANAAQAKAAAHgGQgCAOgJAOQgSAcgjAAQgHAAgXgLQgWgLgFAAQgeAAghAWQgeAUAAANQAAAMBfCKQBfCVAABLQAAAqgZAdQgtAyhwAAQh2AAhRgzgAgVE0IACAMIAKgCIAJgmQAGgXAAgNIAAgSQgBgEgDgFIgIAAQAAAlgPA2gABXDbQAFAEAjAOQAjAOASAGQAIgEAAgGQgbgHgfgOQgYgKgNgBQAAACgGACgAimDDQgJATgMAiIACAJIAIAAQAggzARgmIgHgBQgSAAgNAcgAA4BNQASAAAWgHIAjgNQgBgDgOgDIgPgCQglAVgIAHgAgJhLQgoAUgEAAQADAHAbAAQAFAAASgNQAVgNAfgBQgRgHgQAAQgQAAgMAHgAgtjtQAKAEAiAQQAfAPAOAAQgVgXg+gQQAAACgGACgACgjWQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAngDIAEgFQgGAGglAAIAAAAIAAABgABzk+QgJAOAAASQAAATAJANQAJANANAAQANAAAJgNQAJgNAAgTQAAgSgJgOQgJgNgNAAQgNAAgJANg");
	this.shape_4.setTransform(23.6,33.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.3,49.7,68.1);


(lib.bowArrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.7,1,1).p("AhwjDIDhGH");
	this.shape.setTransform(11.4,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("AiBjDQCfAQBDBzQBCBxhDCT");
	this.shape_1.setTransform(13,19.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.1,41.3);


(lib.bird1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ag5AWIA8gWQAbgKAVgGQADgDAEgCAALARIATAF");
	this.shape.setTransform(5.8,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#454545").ss(0.1,1,1).p("AgsifQAAAMgEAJQgEAIgFAAQgFAAgEgIQgDgJAAgMQAAgMADgIQAEgJAFAAQAFAAAEAJQAEAIAAAMgAgLiYQAAAVgMAPQgJAPgNAAQgMAAgMgPQgJgPAAgVQAAgVAJgPQAMgPAMAAQANAAAJAPQAMAPAAAVgAhRjEQAlggAuAAQBDAAAuBEQAbAlAMAtAiAiIQgBgHAAgJQAAgVAIgPQAMgPAMAAQAKAAAGAHAiLhyQAFgLAGgLQAHgMAJgMQAPgVAQgPACjAjQgIBHgoAzQguBIhDAAQhEAAguhIQgyhAAAhdQAAgTADgS");
	this.shape_1.setTransform(27.1,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AhaA+IghAAIgJgJQgJgJAAgQQAAgFADgLIAAgEQAAgMAJgEQAAgBAAAAQAAgBABAAQAAAAABAAQABgBABAAIgHgFIADgDIgDgDQAAgGALgBIAfAAIAPgIIBWgEQADgGAIgDIADAAIACAAQAMgFAQgEQAegGASAGQATADAJAPIAAAMQALASAAAXQAAAIgCAIQgDACgDAFIAAgkIgGAAIgEAiIAKACIAAADQgGADgGAAQgVgSgJADIAYASIgNAAQgaAAgNgDQgFgDgEAAIgCgDIAAgFIgVAPQgHgKAHgHIACgDQAHgIAAgCQgDAAgEADQgFADgHAJIAAAPIAKAAIgHAGIgxAAQgCgDgDAAIgEgEIgFAAQgEABgJAGQgJAAgFAIQgKADgJABgAh0ApIAOAPIADgDIAAgJIgPgGgAhaAzIAGACIAYgSIgIgCgAgMAeIAMAPIAAgMIgIgFg");
	this.shape_2.setTransform(40.1,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAjAkIgWgDQgagFgggJIgxgPIA9gVIAugRIAHgEIADAAIALgEIAGAAIAEgEIADgDIAAADQAEAAAAAEIAIAAIAAAGQAMAPAHATIARAxIgFADQgigHgVgHgAgYAAQgJADAAABIAGADIAWgDIAFgBIAAgDIgYAAg");
	this.shape_3.setTransform(9.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhfB2IgRgMIADgDIADADIAJAIIAgAAIAHABQAJgBAJgDIgLAHgAACBtQgCgJgMAAQgGAAgHADQAIgFAFgCIAJAEQADAAAAADIAzAAIAGgFIAVgQIAAAGIADADQgOAKgJAEIgHAEgAhbBdIADgCIAOAFIAAAKIgDADgAhBBnIAXgSIAIADIgYASgABkBiIgKgFQANADAaAAIANAAIgYgSQAIgDAVASQAHAAAFgCIAHgJIAAgBQACgIAAgJQAAgYgMgSIAAgNQASAUAAAjIgBAJQAAAXgaACgAAwBiIAAgQQAHgIAFgEQAEgDACAAQAAACgGAJIgDADQgGAHAGAKgAAMBSIADgBIAKAEIAAANgACWBVIAEgkIAFAAIAAAngAhfAWIgFAAIgEgDIAEgDIAhAAIAQgHIAOAAIA4gJQgDABgBADIgDgDQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgDgDIAAADQgGgDgBADIAAACQgLAAgKADIA3gFQADgDAFAAQgLgBgJABIgCgBIAWgEIAJgDQAvgQAgAQQgSgFgeAFQgQAEgNADIgBABIgDAAQgJADgCAFIhWAEIgQAJgAiqhEQgDgIgBgMQABgMADgJQAEgIAFAAQAFAAAEAIQAEAJgBAMQABAMgEAIQgEAJgFAAQgFAAgEgJg");
	this.shape_4.setTransform(37.5,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AhwCdQgxhAgBhdQABgTACgTIAVADQAVAHAiAHIAGgCIgRgzQgIgTgLgQIAAgFIgJAAQAAgFgEAAIAAgCIgDACIgDAFIgHAAIALgWIAQgYQAPgVAQgPQAlggAuAAQBDAAAuBEQAbAlANAtIgJAEIgXADIADADQAIgCAMACQgFAAgDADIg5AGQAKgEALAAIAAgCQADgDAGADIAAgDIACADQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBIADADQAAgDADgDIg5AMIgPAAIgPAGIghAAIgDADIADADIAEAAQgJABAAAGIACACIgCADIAFAGQgBAAgBAAQgBAAAAABQAAAAAAAAQAAABAAAAQgIAFAAANIAAAFQgDAJAAAFQAAAPAJAKIgCgDIgEADIAQANIArAAIAMgHQAFgJAJAAQAHgCAHAAQAOAAACAIIAxAAIAHgDQgIBHgoAzQguBHhDABQhDgBgvhHgAhFi8QgIAQAAAUQAAAVAIAPQAMAPALAAQAPAAAIgPQAMgPAAgVQAAgUgMgQQgIgPgPABQgLgBgMAPgABbAZIAEAAIAFAFg");
	this.shape_5.setTransform(27.1,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAjQgGgPAAgUQAAgTAGgQQAMgPAMABQAOgBAIAPQANAQAAATQAAAUgNAPQgIAPgOAAQgMAAgMgPgAAEgbQgDAJgBAMQABAKADAJQAEAIAFAAQAFAAAEgIQAEgJAAgKQAAgMgEgJQgEgIgFAAQgFAAgEAIgAg5AAQgBgTAJgQQAMgPAMABQAJAAAHAGQgRAPgPAVIgPAWIgBgPg");
	this.shape_6.setTransform(19.9,7.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,56,47.8);


(lib.arrowPouch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#535353").s("#000000").ss(0.7,1,1).dr(-4.5,-12.65,9,25.3);
	this.shape.setTransform(6.5,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#535353").s().p("AAcAfIgCgQIAAgEIgEgBIAEAFQgEgBgDgCIgGgDQgHgBgBgCIAGgDIgDgDIgDAEIgCgBIgBABIgCABIACAVIgBACQgBAAgDgDIAAgPIgIgEIgKgBIABAHQAAAKgCAEIgDAAIgCgVIAAgGIAAgBIgBABIABAAIgBAAIgBABIAAgBQgHAAgFgCIgMgGQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAHAAAHAFIAHAEIAAgBIABgBIgKgFIgOgJQAEAAAMAGIAJAFIAAgBIAAgCIACAAIAGgGIgCgBIgBgEIAGABQAGgEAEABIgEAFIACABIAEgDIgCAEIAFACIgBgDIADAAIAAACIAGgDQADgCAFAAIAAACQgCAAgEAEIgGAFIAAADIADABIAGgFIACAAIgDgEQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAgBIABAAIgBgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAEAAADADIAEgBIgCADIABABIABAAIAAABIAAABIADACIgEgBIgBAAIAGAGIAAgMIADAAIgBAAIgGgDQgIgDgDgDQABAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAHABAGAEIAAgJIAEAAIACALIAIgGQAHgFACAAIgKAPIgGAAIgCACIAAACIAGAAIgBgBIATgFIAAABIgGAEQAEAAACABQgCAEgCAAIgIAAIAAACQAAAEgDADIgIALIgCAAIgBgCIAAAAIAAAJQgBAHgBAEgAAgAHIABAAQAAgEAEgDIgEABIgCAAIABAGgAgDAHIAAgBIgCAAIACABgAgVAEIAEgBIgGgDIACAEgAgSgCIAEACIAEACIAGgBIgMgHIgCAEgAANgBIADABIACAAIADAAIgEgEIABAAIgBgBIgEAEgAACAAIACAAIgCAAgAgOgHIAFACIAGAFIAAgHIACAAIAAgCQgDAAgDgBIgDgCIgEAFgAgYgFIADACIADgFIAAAAIABAAIACgCIADgDIgDgBIgJAJgAAjgFIABgBIAEgBIgFgBgAgsAHQgHgDgEgDQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAOAEAKAGIgDAAQgEAAgIgDgAgqACQgKgCgGgEQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAgBIAcALIgDAAQgEAAgIgDgAgbAFIAAAAg");
	this.shape_1.setTransform(6,3.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,32.7);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("ABFhJIAeA0IAbg0gAh9BKIAHgDIAGgDIABgBIABAAIAMgIIAEgCICsho");
	this.shape.setTransform(15.8,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBdIgCgVIgBgOQgPgCgBgBIgPAAIgCgEQAAgDASABQAKAAAFACIAAgBQADAAADABIgHADIAHgDQAEADABAIQAAAHgBAIQAAAQgEABgAhgBbIAAgJQADgGAAgHQAAgGgCgEQgBgFAAgEIAAgCIABAAIAAgBIAAABIgBAAIAAAAQgbgBgDgFIADgEQADgBAXAEIADADIgBADQAHACACAHIAAANQAAAJgCANIgEABgAhTBSQADgMAAgGIgBgTIAAgEIABgBIgCAAIgBAAIAFgDIAAACIADgBIABAaQACATgJADQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAgAhmAzIAAAAgAhTAoQgKgBgJgCQgNgEgDgGQAHgGAhANIAAADIgFADgAhOAlgABVhdIA5AAIgbA1g");
	this.shape_1.setTransform(14.2,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,29.4,19.8);


// stage content:
(lib.scr_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highScores
	this.text = new cjs.Text("High Scores", "12px 'Verdana'", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(226.5,241.6);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},300).wait(1));

	// developerInfo
	this.text_1 = new cjs.Text("Developed by: Kyle Samson", "12px 'Verdana'", "#66CCFF");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 176;
	this.text_1.setTransform(192.6,358.4);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(301));

	// instructions
	this.text_2 = new cjs.Text("Instructions", "12px 'Verdana'", "#FFFFFF");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 100;
	this.text_2.setTransform(226.5,213.6);

	this.timeline.addTween(cjs.Tween.get(this.text_2).to({_off:true},300).wait(1));

	// newGame
	this.text_3 = new cjs.Text("New Game", "12px 'Verdana'", "#FFFFFF");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(226.5,189.2);

	this.timeline.addTween(cjs.Tween.get(this.text_3).to({_off:true},300).wait(1));

	// bird3
	this.instance = new lib.bird1();
	this.instance.setTransform(577.7,227.2,1,1,0,0,0,27.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:487.5,y:250.2},151).to({_off:true},1).wait(147).to({_off:false,x:403.7,y:264.5},0).wait(2));

	// bird2
	this.instance_1 = new lib.bird1();
	this.instance_1.setTransform(-27,130.7,1,1,0,0,180,27.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:178.4,y:237.2},299).wait(2));

	// bird1
	this.instance_2 = new lib.bird1();
	this.instance_2.setTransform(481.3,-22.9,1,1,0,0,0,27.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:354.7,y:110.9},299).wait(2));

	// cloud2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkUCgQgQgMgDgQIABgfIgtgDQgXgKgHgXQgCgJAAgZIgBgcQgBgMAFgKQAMgZBDgaQAbgKAIgRQAEgUAEgJQAOggB/gEQA6hABLALQBDAKBCA8QCMAJAmAfQANALACAPQABAIgBANQAAAZgEAGQgJASgrAPIBAAsQAMAMAAAaQAAAOgJAIIgsAjQg0AAgegCIgkgDIgHARQgXA7ggAAQgSAAgKgGQgzgEgfgLIgagKQgMgEgPAAQgFAEgKAPQgHAMgTAGQisgdgpgdg");
	this.shape.setTransform(-37.4,161.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-35,y:161.5},0).wait(1).to({x:-32.6,y:161.2},0).wait(1).to({x:-30.3,y:161},0).wait(1).to({x:-27.9,y:160.7},0).wait(1).to({x:-25.5,y:160.4},0).wait(1).to({x:-23.1,y:160.1},0).wait(1).to({x:-20.7,y:159.9},0).wait(1).to({x:-18.3,y:159.6},0).wait(1).to({x:-15.9,y:159.3},0).wait(1).to({x:-13.5,y:159},0).wait(1).to({x:-11.1,y:158.8},0).wait(1).to({x:-8.8,y:158.5},0).wait(1).to({x:-6.4,y:158.2},0).wait(1).to({x:-4,y:158},0).wait(1).to({x:-1.6,y:157.7},0).wait(1).to({x:0.8,y:157.4},0).wait(1).to({x:3.2,y:157.1},0).wait(1).to({x:5.6,y:156.9},0).wait(1).to({x:8,y:156.6},0).wait(1).to({x:10.4,y:156.3},0).wait(1).to({x:12.8,y:156.1},0).wait(1).to({x:15.1,y:155.8},0).wait(1).to({x:17.5,y:155.5},0).wait(1).to({x:19.9,y:155.2},0).wait(1).to({x:22.3,y:155},0).wait(1).to({x:24.7,y:154.7},0).wait(1).to({x:27.1,y:154.4},0).wait(1).to({x:29.5,y:154.1},0).wait(1).to({x:31.9,y:153.9},0).wait(1).to({x:34.3,y:153.6},0).wait(1).to({x:36.6,y:153.3},0).wait(1).to({x:39,y:153.1},0).wait(1).to({x:41.4,y:152.8},0).wait(1).to({x:43.8,y:152.5},0).wait(1).to({x:46.2,y:152.2},0).wait(1).to({x:48.6,y:152},0).wait(1).to({x:51,y:151.7},0).wait(1).to({x:53.4,y:151.4},0).wait(1).to({x:55.8,y:151.1},0).wait(1).to({x:58.2,y:150.9},0).wait(1).to({x:60.5,y:150.6},0).wait(1).to({x:62.9,y:150.3},0).wait(1).to({x:65.3,y:150.1},0).wait(1).to({x:67.7,y:149.8},0).wait(1).to({x:70.1,y:149.5},0).wait(1).to({x:72.5,y:149.2},0).wait(1).to({x:74.9,y:149},0).wait(1).to({x:77.3,y:148.7},0).wait(1).to({x:79.7,y:148.4},0).wait(1).to({x:82.1,y:148.2},0).wait(1).to({x:84.4,y:147.9},0).wait(1).to({x:86.8,y:147.6},0).wait(1).to({x:89.2,y:147.3},0).wait(1).to({x:91.6,y:147.1},0).wait(1).to({x:94,y:146.8},0).wait(1).to({x:96.4,y:146.5},0).wait(1).to({x:98.8,y:146.2},0).wait(1).to({x:101.2,y:146},0).wait(1).to({x:103.6,y:145.7},0).wait(1).to({x:105.9,y:145.4},0).wait(1).to({x:108.3,y:145.2},0).wait(1).to({x:110.7,y:144.9},0).wait(1).to({x:113.1,y:144.6},0).wait(1).to({x:115.5,y:144.3},0).wait(1).to({x:117.9,y:144.1},0).wait(1).to({x:120.3,y:143.8},0).wait(1).to({x:122.7,y:143.5},0).wait(1).to({x:125.1,y:143.2},0).wait(1).to({x:127.5,y:143},0).wait(1).to({x:129.8,y:142.7},0).wait(1).to({x:132.2,y:142.4},0).wait(1).to({x:134.6,y:142.2},0).wait(1).to({x:137,y:141.9},0).wait(1).to({x:139.4,y:141.6},0).wait(1).to({x:141.8,y:141.3},0).wait(1).to({x:144.2,y:141.1},0).wait(1).to({x:146.6,y:140.8},0).wait(1).to({x:149,y:140.5},0).wait(1).to({x:151.3,y:140.2},0).wait(1).to({x:153.7,y:140},0).wait(1).to({x:156.1,y:139.7},0).wait(1).to({x:158.5,y:139.4},0).wait(1).to({x:160.9,y:139.2},0).wait(1).to({x:163.3,y:138.9},0).wait(1).to({x:165.7,y:138.6},0).wait(1).to({x:168.1,y:138.3},0).wait(1).to({x:170.5,y:138.1},0).wait(1).to({x:172.9,y:137.8},0).wait(1).to({x:175.2,y:137.5},0).wait(1).to({x:177.6,y:137.3},0).wait(1).to({x:180,y:137},0).wait(1).to({x:182.4,y:136.7},0).wait(1).to({x:184.8,y:136.4},0).wait(1).to({x:187.2,y:136.2},0).wait(1).to({x:189.6,y:135.9},0).wait(1).to({x:192,y:135.6},0).wait(1).to({x:194.4,y:135.3},0).wait(1).to({x:196.7,y:135.1},0).wait(1).to({x:199.1,y:134.8},0).wait(1).to({x:201.5,y:134.5},0).wait(1).to({x:203.4},0).wait(1).to({x:205.3},0).wait(1).to({x:207.2},0).wait(1).to({x:209},0).wait(1).to({x:210.9},0).wait(1).to({x:212.8},0).wait(1).to({x:214.7},0).wait(1).to({x:216.6},0).wait(1).to({x:218.4},0).wait(1).to({x:220.3},0).wait(1).to({x:222.2},0).wait(1).to({x:224.1},0).wait(1).to({x:225.9},0).wait(1).to({x:227.8},0).wait(1).to({x:229.7},0).wait(1).to({x:231.6},0).wait(1).to({x:233.5},0).wait(1).to({x:235.3},0).wait(1).to({x:237.2},0).wait(1).to({x:239.1},0).wait(1).to({x:241},0).wait(1).to({x:242.9},0).wait(1).to({x:244.7},0).wait(1).to({x:246.6},0).wait(1).to({x:248.5},0).wait(1).to({x:250.4},0).wait(1).to({x:252.3},0).wait(1).to({x:254.1},0).wait(1).to({x:256},0).wait(1).to({x:257.9},0).wait(1).to({x:259.8},0).wait(1).to({x:261.6},0).wait(1).to({x:263.5},0).wait(1).to({x:265.4},0).wait(1).to({x:267.3},0).wait(1).to({x:269.2},0).wait(1).to({x:271},0).wait(1).to({x:272.9},0).wait(1).to({x:274.8},0).wait(1).to({x:276.7},0).wait(1).to({x:278.6},0).wait(1).to({x:280.4},0).wait(1).to({x:282.3},0).wait(1).to({x:284.2},0).wait(1).to({x:286.1},0).wait(1).to({x:287.9},0).wait(1).to({x:289.8},0).wait(1).to({x:291.7},0).wait(1).to({x:293.6},0).wait(1).to({x:295.5},0).wait(1).to({x:297.3},0).wait(1).to({x:299.2},0).wait(1).to({x:301.1},0).wait(1).to({x:303},0).wait(1).to({x:304.9},0).wait(1).to({x:306.7},0).wait(1).to({x:308.6},0).wait(1).to({x:310.5},0).wait(1).to({x:312.4},0).wait(1).to({x:314.3},0).wait(1).to({x:316.1},0).wait(1).to({x:318},0).wait(1).to({x:319.9},0).wait(1).to({x:321.8},0).wait(1).to({x:323.6},0).wait(1).to({x:325.5},0).wait(1).to({x:327.4},0).wait(1).to({x:329.3},0).wait(1).to({x:331.2},0).wait(1).to({x:333},0).wait(1).to({x:334.9},0).wait(1).to({x:336.8},0).wait(1).to({x:338.7},0).wait(1).to({x:340.6},0).wait(1).to({x:342.4},0).wait(1).to({x:344.3},0).wait(1).to({x:346.2},0).wait(1).to({x:348.1},0).wait(1).to({x:349.9},0).wait(1).to({x:351.8},0).wait(1).to({x:353.7},0).wait(1).to({x:355.6},0).wait(1).to({x:357.5},0).wait(1).to({x:359.3},0).wait(1).to({x:361.2},0).wait(1).to({x:363.1},0).wait(1).to({x:365},0).wait(1).to({x:366.9},0).wait(1).to({x:368.7},0).wait(1).to({x:370.6},0).wait(1).to({x:372.5},0).wait(1).to({x:374.4},0).wait(1).to({x:376.3},0).wait(1).to({x:378.1},0).wait(1).to({x:380},0).wait(1).to({x:381.9},0).wait(1).to({x:383.8},0).wait(1).to({x:385.6},0).wait(1).to({x:387.5},0).wait(1).to({x:389.2},0).wait(1).to({x:390.8},0).wait(1).to({x:392.5,y:134.6},0).wait(1).to({x:394.2},0).wait(1).to({x:395.8},0).wait(1).to({x:397.5},0).wait(1).to({x:399.1},0).wait(1).to({x:400.8},0).wait(1).to({x:402.5},0).wait(1).to({x:404.1},0).wait(1).to({x:405.8},0).wait(1).to({x:407.4},0).wait(1).to({x:409.1,y:134.7},0).wait(1).to({x:410.8},0).wait(1).to({x:412.4},0).wait(1).to({x:414.1},0).wait(1).to({x:415.7},0).wait(1).to({x:417.4},0).wait(1).to({x:419},0).wait(1).to({x:420.7},0).wait(1).to({x:422.4},0).wait(1).to({x:424},0).wait(1).to({x:425.7,y:134.8},0).wait(1).to({x:427.3},0).wait(1).to({x:429},0).wait(1).to({x:430.7},0).wait(1).to({x:432.3},0).wait(1).to({x:434},0).wait(1).to({x:435.6},0).wait(1).to({x:437.3},0).wait(1).to({x:439},0).wait(1).to({x:440.6},0).wait(1).to({x:442.3,y:134.9},0).wait(1).to({x:443.9},0).wait(1).to({x:445.6},0).wait(1).to({x:447.2},0).wait(1).to({x:448.9},0).wait(1).to({x:450.6},0).wait(1).to({x:452.2},0).wait(1).to({x:453.9},0).wait(1).to({x:455.5},0).wait(1).to({x:457.2},0).wait(1).to({x:458.9,y:135},0).wait(1).to({x:460.5},0).wait(1).to({x:462.2},0).wait(1).to({x:463.8},0).wait(1).to({x:465.5},0).wait(1).to({x:467.2},0).wait(1).to({x:468.8},0).wait(1).to({x:470.5},0).wait(1).to({x:472.1},0).wait(1).to({x:473.8},0).wait(1).to({x:475.5,y:135.1},0).wait(1).to({x:477.1},0).wait(1).to({x:478.8},0).wait(1).to({x:480.4},0).wait(1).to({x:482.1},0).wait(1).to({x:483.7},0).wait(1).to({x:485.4},0).wait(1).to({x:487.1},0).wait(1).to({x:488.7},0).wait(1).to({x:490.4},0).wait(1).to({x:492,y:135.2},0).wait(1).to({x:493.7},0).wait(1).to({x:495.4},0).wait(1).to({x:497},0).wait(1).to({x:498.7},0).wait(1).to({x:500.3},0).wait(1).to({x:502},0).wait(1).to({x:503.7},0).wait(1).to({x:505.3},0).wait(1).to({x:507},0).wait(1).to({x:508.6,y:135.3},0).wait(1).to({x:510.3},0).wait(1).to({x:512},0).wait(1).to({x:513.6},0).wait(1).to({x:515.3},0).wait(1).to({x:516.9},0).wait(1).to({x:518.6},0).wait(1).to({x:520.2},0).wait(1).to({x:521.9},0).wait(1).to({x:523.6},0).wait(1).to({x:525.2,y:135.4},0).wait(1).to({x:526.9},0).wait(1).to({x:528.5},0).wait(1).to({x:530.2},0).wait(1).to({x:531.9},0).wait(1).to({x:533.5},0).wait(1).to({x:535.2},0).wait(1).to({x:536.8},0).wait(1).to({x:538.5},0).wait(1).to({x:540.2},0).wait(1).to({x:541.8,y:135.5},0).wait(1).to({x:543.5},0).wait(1).to({x:545.1},0).wait(1).to({x:546.8},0).wait(1).to({x:548.4},0).wait(1).to({x:550.1},0).wait(1).to({x:551.8},0).wait(1).to({x:553.4},0).to({_off:true},1).wait(1));

	// cloud1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgsBOIAKAIIAOgLQgNADgLAAgAFIBTIACABIgBgCg");
	this.shape_1.setTransform(-55.9,83.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgjBXIAPgLIgHABIAHgCIgGABIAHgCQgOADgKAAIABABIgCAAIACABIgCAAIAJAIg");
	this.shape_2.setTransform(-53.7,83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgjBXIAPgLIgJACIAJgDQgNADgLAAIACABIgCAAIAJAIgAgqBLQAEAEATgHQgNADgKAAg");
	this.shape_3.setTransform(-51.5,83.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgtBQIAKAIIAOgLQgNADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgqBKQAEAEAUgHQgOADgKAAg");
	this.shape_4.setTransform(-49.2,83.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgtBRIAJAIIAPgLQgNADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgSBGQgNADgLAAQAFAEATgHg");
	this.shape_5.setTransform(-47,83.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgtBSIAJAIIAPgLQgOADgKAAgAgsBOQAFAEATgHQgNADgLAAgAgpBIQAFAEATgHQgOADgKAAg");
	this.shape_6.setTransform(-44.8,83.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAguBSIAJAIIAPgLQgNADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgpBGQAFAEATgGQgNACgLAAg");
	this.shape_7.setTransform(-42.6,83.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAguBTIAJAIIAPgLQgNADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgoBFQAEAEATgHQgNADgKAAg");
	this.shape_8.setTransform(-40.4,83.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgvBUIAKAIIAPgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgnBEQAEAEATgHQgNADgKAAg");
	this.shape_9.setTransform(-38.2,83.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgvBVIAKAIIAPgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgnBDQAFAEATgHQgOADgKAAg");
	this.shape_10.setTransform(-36,83.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgvBVIAJAIIAPgLQgNADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgnBCQAFAEATgHQgNADgLAAg");
	this.shape_11.setTransform(-33.7,83.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgwBWIAKAIIAPgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgmBBQAFAEASgHQgNADgKAAg");
	this.shape_12.setTransform(-31.5,83);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgwBXIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgOA9QgNADgKgBQAEAFATgHg");
	this.shape_13.setTransform(-29.3,82.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgwBYIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAglA+QAFAEASgGQgNACgKAAg");
	this.shape_14.setTransform(-27.1,82.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgxBYIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgkA9QAEAEATgHQgNADgKAAg");
	this.shape_15.setTransform(-24.9,82.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgxBZIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgkA8QAFAEASgHQgNADgKAAg");
	this.shape_16.setTransform(-22.7,82.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgxBaIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgjA7QAFAEASgHQgNADgKAAg");
	this.shape_17.setTransform(-20.5,82.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgxBaIAJAJIAQgLQgOACgLAAgAgsBOQAFAEATgHQgNADgLAAgAgiA6QAEAEASgHQgNADgJAAg");
	this.shape_18.setTransform(-18.3,82.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgyBbIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgiA4QAEAEASgGQgMACgKAAg");
	this.shape_19.setTransform(-16,82.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgyBcIAJAIIAQgLQgOADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgLA0QgNADgKAAQAFAEASgHg");
	this.shape_20.setTransform(-13.8,82.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgzBdIAKAIIAQgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgKAzQgNADgKAAQAFAEASgHg");
	this.shape_21.setTransform(-11.6,82.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAgzBdIAJAJIAQgLQgOACgLAAgAgsBOQAFAEATgHQgNADgLAAgAgKAyQgNADgKAAQAFAEASgHg");
	this.shape_22.setTransform(-9.4,82.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg0BeIAKAIIAQgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAggAzQAFAEARgGQgMACgKAAg");
	this.shape_23.setTransform(-7.2,82);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg0BfIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAggAyQAFAEASgGQgNACgKAAg");
	this.shape_24.setTransform(-5,81.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg0BgIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgfAxQAFAEARgGQgMACgKAAg");
	this.shape_25.setTransform(-2.8,81.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg1BgIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgfAwQAFAEASgHQgNADgKAAg");
	this.shape_26.setTransform(-0.5,81.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg1BhIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgeAvQAFAEARgHQgMADgKAAg");
	this.shape_27.setTransform(1.7,81.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg1BiIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgHArQgNADgJgBQAEAFASgHg");
	this.shape_28.setTransform(3.9,81.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg1BjIAJAHIARgKQgPADgLAAgAgsBOQAFAEATgHQgNADgLAAgAgHAqQgMADgKgBQAFAFARgHg");
	this.shape_29.setTransform(6.1,81.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg2BjIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgHApQgMACgKAAQAFAEARgGg");
	this.shape_30.setTransform(8.3,81.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg2BkIAJAIIARgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgcAqQAFAEARgGQgMACgKAAg");
	this.shape_31.setTransform(10.5,81.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg3BlIAJAHIASgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgbApQAFAEARgGQgNACgJAAg");
	this.shape_32.setTransform(12.7,81.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg3BlIAJAIIASgKQgPACgMAAgAgsBOQAFAEATgHQgNADgLAAgAgaAoQAEAEARgHQgMADgJAAg");
	this.shape_33.setTransform(14.9,81.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg3BmIAIAIIASgLQgOADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgaAmQAFAEAQgGQgMACgJAAg");
	this.shape_34.setTransform(17.2,81.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg4BnIAJAIIASgLQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgEAjQgMACgKAAQAFAEARgGg");
	this.shape_35.setTransform(19.4,81);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg4BoIAJAHIASgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgEAiQgMACgJAAQAFAEAQgGg");
	this.shape_36.setTransform(21.6,80.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg5BoIAJAIIASgKQgOACgNAAgAgsBOQAFAEATgHQgNADgLAAgAgEAhQgLACgKAAQAFAEAQgGg");
	this.shape_37.setTransform(23.8,80.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg5BpIAJAIIASgLQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgDAfQgMADgJgBQAFAEAQgGg");
	this.shape_38.setTransform(26,80.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg5BqIAJAHIASgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgCAeQgMADgKgBQAFAEARgGg");
	this.shape_39.setTransform(28.2,80.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg5BrIAIAHIATgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_40.setTransform(30.4,80.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg6BrIAJAIIATgKQgPACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_41.setTransform(32.6,80.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg6BsIAJAHIASgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAgAgWAdQAFAEAQgGQgMACgJAAg");
	this.shape_42.setTransform(34.9,80.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg6BtIAIAHIATgKQgPADgMAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_43.setTransform(37.1,80.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg7BtIAJAIIATgKQgPACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_44.setTransform(39.3,80.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg7BuIAIAIIATgKQgPACgMAAgAgsBOQAFAEATgHQgNADgLAAgAAAAXQgLADgKgBQAFAFAQgHg");
	this.shape_45.setTransform(41.5,80.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg8BvIAJAHIATgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_46.setTransform(43.7,80);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg8BwIAJAHIATgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_47.setTransform(45.9,79.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg8BwIAJAIIATgKQgPACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_48.setTransform(48.1,79.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg9BxIAJAHIATgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_49.setTransform(50.4,79.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg9ByIAJAHIATgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_50.setTransform(52.6,79.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg9BzIAIAHIAUgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_51.setTransform(54.8,79.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg9BzIAIAIIAUgKQgQACgMAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_52.setTransform(57,79.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg+B0IAIAHIAUgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_53.setTransform(59.2,79.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg+B1IAIAHIAUgKQgPADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_54.setTransform(61.4,79.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg/B2IAJAHIAUgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_55.setTransform(63.6,79.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAg/B2IAIAIIAUgKQgPACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_56.setTransform(65.9,79.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhAB3IAJAHIAUgKQgPADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_57.setTransform(68.1,79.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhAB4IAJAHIAUgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_58.setTransform(70.3,79);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhAB4IAJAIIAUgKQgQACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_59.setTransform(72.5,78.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhBB5IAJAIIAUgKQgPACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_60.setTransform(74.7,78.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhBB6IAIAHIAVgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_61.setTransform(76.9,78.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhBB7IAIAHIAVgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_62.setTransform(79.1,78.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhBB7IAIAIIAVgKQgQACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_63.setTransform(81.3,78.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhCB8IAIAIIAVgKQgQACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_64.setTransform(83.6,78.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhCB9IAIAHIAVgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_65.setTransform(85.8,78.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhCB+IAIAHIAVgKQgQADgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_66.setTransform(88,78.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhDB+IAJAIIAVgKQgQACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_67.setTransform(90.2,78.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhDB/IAIAHIAVgJQgQACgNAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_68.setTransform(92.4,78.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhECAIAJAHIAVgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_69.setTransform(94.6,78);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhECBIAIAHIAWgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_70.setTransform(96.8,77.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhFCBIAJAHIAVgJQgQACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_71.setTransform(99.1,77.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhFCCIAIAHIAWgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_72.setTransform(101.3,77.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhFCDIAIAHIAWgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_73.setTransform(103.5,77.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhFCDIAIAIIAWgKQgQACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_74.setTransform(105.7,77.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhGCEIAIAHIAWgJQgQACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_75.setTransform(107.9,77.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhGCFIAIAHIAWgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_76.setTransform(110.1,77.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhGCGIAIAHIAWgKQgQADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_77.setTransform(112.3,77.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhHCGIAIAHIAXgJQgRACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_78.setTransform(114.5,77.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhHCHIAIAHIAWgJQgQACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_79.setTransform(116.8,77.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhICIIAJAHIAWgKQgQADgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_80.setTransform(119,77.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhICJIAIAGIAXgJQgRADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_81.setTransform(121.2,77);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhICJIAIAHIAXgJQgRACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_82.setTransform(123.4,76.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhJCKIAIAHIAXgJQgQACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_83.setTransform(125.6,76.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhJCLIAIAGIAXgJQgRADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_84.setTransform(127.8,76.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhJCMIAIAGIAXgJQgRADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_85.setTransform(130,76.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhKCMIAIAHIAXgJQgQACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_86.setTransform(132.3,76.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhKCNIAIAHIAXgJQgRACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_87.setTransform(134.5,76.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhKCOIAIAGIAXgJQgRADgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_88.setTransform(136.7,76.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhLCOIAIAHIAYgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_89.setTransform(138.9,76.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhLCPIAIAHIAYgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_90.setTransform(141.1,76.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhLCQIAHAHIAYgJQgRACgOAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_91.setTransform(143.3,76.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhMCRIAIAGIAYgJQgRADgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_92.setTransform(145.5,76);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhMCRIAIAHIAYgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_93.setTransform(147.7,75.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhNCSIAIAHIAYgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_94.setTransform(150,75.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhNCTIAIAGIAYgIQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_95.setTransform(152.2,75.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhNCUIAIAGIAYgJQgRADgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_96.setTransform(154.4,75.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhNCUIAHAHIAZgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_97.setTransform(156.6,75.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhOCVIAIAHIAYgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_98.setTransform(158.8,75.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhOCWIAHAGIAZgIQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_99.setTransform(161,75.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhOCXIAHAGIAZgJQgRADgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_100.setTransform(163.2,75.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhPCXIAIAHIAZgJQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_101.setTransform(165.4,75.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhPCYIAHAHIAZgJQgRACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_102.setTransform(167.7,75.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhQCZIAIAGIAZgIQgRACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_103.setTransform(169.9,75.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhQCZIAIAHIAZgIIghABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_104.setTransform(172.1,75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhQCaIAIAHIAZgJQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_105.setTransform(174.3,74.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhRCbIAIAHIAZgJQgRACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_106.setTransform(176.5,74.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhRCcIAIAGIAZgIQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_107.setTransform(178.7,74.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhRCcIAHAHIAagIIghABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_108.setTransform(180.9,74.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhSCdIAIAHIAZgJQgRACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_109.setTransform(183.2,74.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhSCeIAHAGIAagIQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_110.setTransform(185.4,74.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhSCfIAHAGIAagIQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_111.setTransform(187.6,74.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhTCfIAIAHIAagIIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_112.setTransform(189.8,74.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhTCgIAHAHIAagJQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_113.setTransform(192,74.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhTChIAHAGIAagIQgSACgPAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_114.setTransform(194.2,74.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhUChIAIAHIAagIIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_115.setTransform(196.4,74);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhUCiIAHAHIAbgIIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_116.setTransform(198.6,73.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhVCjIAIAGIAagIQgSACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_117.setTransform(200.9,73.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhVCkIAIAGIAagIQgSACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_118.setTransform(203.1,73.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhVCkIAHAHIAbgIIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_119.setTransform(205.3,73.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhVClIAHAGIAbgHIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_120.setTransform(207.5,73.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhWCmIAHAGIAbgIQgSACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_121.setTransform(209.7,73.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhWCnIAHAGIAbgIQgSACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_122.setTransform(211.9,73.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhXCnIAIAGIAbgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_123.setTransform(214.1,73.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhXCoIAHAGIAbgHIgiABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_124.setTransform(216.4,73.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhXCpIAHAGIAbgIQgSACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_125.setTransform(218.6,73.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhYCqIAIAGIAbgIQgSACgRAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_126.setTransform(220.8,73.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhYCqIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_127.setTransform(223,73);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhYCrIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_128.setTransform(225.2,72.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhZCsIAHAGIAcgIQgSACgRAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_129.setTransform(227.4,72.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhZCsIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_130.setTransform(229.6,72.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhZCtIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_131.setTransform(231.8,72.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhaCuIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_132.setTransform(234.1,72.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhaCvIAHAGIAcgIQgTACgQAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_133.setTransform(236.3,72.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhaCvIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_134.setTransform(238.5,72.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhbCwIAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_135.setTransform(240.7,72.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhbCxIAHAGIAcgHIgjABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_136.setTransform(242.9,72.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhcCyIAHAGIAdgIQgTACgRAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_137.setTransform(245.1,72.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhcCyIAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_138.setTransform(247.3,72);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhcCzIAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_139.setTransform(249.5,71.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhdC0IAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_140.setTransform(251.8,71.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhdC1IAHAFIAdgHQgTACgRAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_141.setTransform(254,71.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhdC1IAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_142.setTransform(256.2,71.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhdC2IAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_143.setTransform(258.4,71.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAheC3IAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_144.setTransform(260.6,71.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAheC4IAGAGIAegHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_145.setTransform(265,71.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhfC5IAHAGIAdgHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_146.setTransform(267.3,71.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhfC6IAGAGIAegHIgkABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_147.setTransform(269.5,71.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhgC6IAHAGIAegHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_148.setTransform(271.7,71.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhgC7IAHAGIAegHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_149.setTransform(273.9,71);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhhC8IAHAGIAegHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_150.setTransform(276.1,70.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhhC9IAHAGIAegHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_151.setTransform(278.3,70.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhhC+IAGAGIAfgHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_152.setTransform(282.7,70.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhiC/IAHAGIAegHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_153.setTransform(285,70.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhiDAIAGAFIAfgGIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_154.setTransform(287.2,70.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhiDAIAGAGIAfgHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_155.setTransform(289.4,70.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhjDBIAGAGIAfgHIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_156.setTransform(291.6,70.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhjDCIAGAFIAfgGIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_157.setTransform(293.8,70.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhkDDIAHAFIAfgGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_158.setTransform(296,70.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhkDDIAHAGIAfgHIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_159.setTransform(298.2,70);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhkDEIAGAFIAfgGIglABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_160.setTransform(300.5,69.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhlDFIAHAFIAfgGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_161.setTransform(302.7,69.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhlDFIAHAGIAfgHIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_162.setTransform(304.9,69.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhlDGIAGAGIAggHIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_163.setTransform(307.1,69.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhmDHIAHAFIAfgGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_164.setTransform(309.3,69.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhmDIIAGAFIAggGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_165.setTransform(311.5,69.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhmDIIAGAGIAggHIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_166.setTransform(313.7,69.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhnDJIAHAFIAggGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_167.setTransform(315.9,69.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhnDKIAGAFIAggGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_168.setTransform(318.2,69.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhoDLIAHAFIAggGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_169.setTransform(320.4,69.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhoDMIAGAFIAggGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_170.setTransform(324.8,69);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhpDNIAHAFIAggGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_171.setTransform(327,68.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhpDOIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_172.setTransform(329.2,68.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhpDPIAGAFIAggGIgmABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_173.setTransform(333.6,68.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhqDQIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_174.setTransform(335.9,68.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhqDRIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_175.setTransform(338.1,68.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhrDSIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_176.setTransform(342.5,68.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhrDTIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_177.setTransform(344.7,68.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhsDUIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_178.setTransform(346.9,68.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhsDUIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_179.setTransform(349.1,68);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhtDVIAHAFIAhgGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_180.setTransform(351.4,67.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhtDWIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_181.setTransform(353.6,67.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhtDXIAGAFIAhgGIgnABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_182.setTransform(358,67.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhuDYIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_183.setTransform(360.2,67.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhuDZIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_184.setTransform(362.4,67.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhvDaIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_185.setTransform(366.8,67.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhvDbIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_186.setTransform(369.1,67.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhvDcIAFAFIAjgGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_187.setTransform(371.3,67.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhwDcIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_188.setTransform(373.5,67.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhwDdIAFAFIAjgGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_189.setTransform(375.7,67);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhxDeIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_190.setTransform(377.9,66.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhxDfIAGAEIAjgFIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_191.setTransform(380.1,66.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhxDfIAGAFIAigGIgoABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_192.setTransform(382.3,66.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhyDgIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_193.setTransform(384.6,66.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhyDhIAGAEIAjgFIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_194.setTransform(386.8,66.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhyDiIAGAEIAjgFIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_195.setTransform(389,66.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhzDiIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_196.setTransform(391.2,66.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhzDjIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_197.setTransform(393.4,66.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAhzDkIAFAEIAkgFIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_198.setTransform(395.6,66.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh0DlIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_199.setTransform(397.8,66.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh0DlIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_200.setTransform(400,66);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh1DmIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_201.setTransform(402.3,65.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh1DnIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_202.setTransform(404.5,65.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh1DnIAGAFIAjgGIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_203.setTransform(406.7,65.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh2DoIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_204.setTransform(408.9,65.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh2DpIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_205.setTransform(411.1,65.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh2DqIAFAEIAlgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_206.setTransform(413.3,65.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh2DqIAFAEIAkgFIgpABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_207.setTransform(415.5,65.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh3DrIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_208.setTransform(417.7,65.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh3DsIAFAEIAlgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_209.setTransform(420,65.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh4DtIAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_210.setTransform(422.2,65.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh4DtIAGAEIAkgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_211.setTransform(424.4,65.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh5DuIAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_212.setTransform(426.6,65);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh5DvIAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_213.setTransform(428.8,64.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh5DwIAFAEIAlgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_214.setTransform(431,64.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh6DxIAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_215.setTransform(435.5,64.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh6DyIAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_216.setTransform(437.7,64.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh6DzIAFAEIAlgFIgqABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_217.setTransform(439.9,64.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh7DzIAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_218.setTransform(442.1,64.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh7D0IAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_219.setTransform(444.3,64.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh7D1IAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_220.setTransform(446.5,64.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh8D2IAGAEIAlgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_221.setTransform(448.7,64.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh8D2IAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_222.setTransform(450.9,64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh9D3IAGAEIAmgFIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_223.setTransform(453.2,63.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh9D4IAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_224.setTransform(455.4,63.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh9D4IAFAEIAmgEIgrAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_225.setTransform(457.6,63.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh+D5IAFAEIAngFIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_226.setTransform(459.8,63.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh+D6IAFAEIAngFIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_227.setTransform(462,63.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh+D7IAFAEIAmgFIgrABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_228.setTransform(464.2,63.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh+D7IAFAEIAmgEIgrAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_229.setTransform(466.4,63.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh/D8IAFAEIAngFIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_230.setTransform(468.7,63.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAh/D9IAFAEIAngFIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_231.setTransform(470.9,63.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiAD+IAGADIAmgEIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_232.setTransform(473.1,63.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiAD+IAFAEIAngEIgsAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_233.setTransform(475.3,63.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiBD/IAFAEIAogFIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_234.setTransform(477.5,63);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiBEAIAFAEIAogFIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_235.setTransform(479.7,62.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiBEBIAFADIAngEIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_236.setTransform(481.9,62.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiBEBIAFAEIAngEIgsAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_237.setTransform(484.1,62.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiCECIAFAEIAogFIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_238.setTransform(486.4,62.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiCEDIAFADIAngEIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_239.setTransform(488.6,62.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiCEEIAFADIAngEIgsABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_240.setTransform(490.8,62.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiDEEIAFAEIAogEIgtAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_241.setTransform(493,62.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiDEFIAFADIAogEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_242.setTransform(495.2,62.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiEEGIAFADIAogEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_243.setTransform(497.4,62.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiEEHIAFADIAogEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_244.setTransform(499.6,62.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiEEHIAEADIApgDIgtAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_245.setTransform(501.9,62);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiFEIIAFADIApgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_246.setTransform(504.1,61.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiFEJIAFADIAogEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_247.setTransform(506.3,61.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiFEJIAFAEIAogEIgtAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_248.setTransform(508.5,61.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiGEKIAFADIApgDIguAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_249.setTransform(510.7,61.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiGELIAFADIAogEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_250.setTransform(512.9,61.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiGEMIAEADIApgEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_251.setTransform(515.1,61.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiHEMIAFADIApgDIguAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_252.setTransform(517.4,61.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiCEQIApgDIguAAIAFADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_253.setTransform(519.6,61.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiHEOIAEADIApgEIgtABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_254.setTransform(521.8,61.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiIEPIAFADIApgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_255.setTransform(524,61.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiIEPIAFADIApgDIguAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_256.setTransform(526.2,61.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiEETIAqgDIgvAAIAFADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_257.setTransform(528.4,61);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiJERIAFADIApgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_258.setTransform(530.6,60.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiJESIAFADIApgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_259.setTransform(532.8,60.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiKESIAFADIAqgDIgvAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_260.setTransform(535.1,60.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiFEWIApgDIguAAIAFADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_261.setTransform(537.3,60.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiKEUIAEADIAqgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_262.setTransform(539.5,60.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiKEVIAEADIAqgEIguABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_263.setTransform(541.7,60.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiHEYIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_264.setTransform(543.9,60.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiHEZIAqgDIguAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_265.setTransform(546.1,60.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiMEXIAFADIAqgEIgvABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_266.setTransform(548.3,60.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiMEYIAFADIAqgEIgvABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_267.setTransform(550.5,60.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiIEbIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_268.setTransform(552.8,60);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiIEcIAqgDIgvAAIAFADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_269.setTransform(555,59.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiNEaIAEADIArgEIgvABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_270.setTransform(557.2,59.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiNEaIAEADIArgDIgvAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_271.setTransform(559.4,59.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiKEeIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_272.setTransform(561.6,59.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiKEfIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_273.setTransform(563.8,59.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiOEdIAEADIArgEIgvABgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_274.setTransform(566,59.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiPEdIAEADIAsgDIgwAAgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_275.setTransform(568.3,59.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiLEhIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAg");
	this.shape_276.setTransform(570.5,59.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiLEiIArgDIgvAAIAEADgAgsBOQAFAEATgHQgNADgLAAgABskAQAFABgIgFIADAEg");
	this.shape_277.setTransform(572.7,59.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiQEgIAFACIArgDIgwABgAgsBOQAFAEATgHQgNADgLAAgABskBQAGABgIgFIACAEg");
	this.shape_278.setTransform(574.9,59.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiMEjIAsgDIgwAAIAEADgAgsBOQAFAEATgHQgNADgLAAgABtkCQAFABgIgGIADAFg");
	this.shape_279.setTransform(577.1,59.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiMEkIArgDIgwAAIAFADgAgsBOQAFAEATgHQgNADgLAAgABtkDQAGAAgIgFIACAFg");
	this.shape_280.setTransform(579.3,59);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiNEkIAsgCIgwAAIAEACgAgsBOQAFAEATgHQgNADgLAAgABukEQAFAAgIgFIADAFg");
	this.shape_281.setTransform(581.5,58.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiREjIAEACIAsgDIgwABgAgsBOQAFAEATgHQgNADgLAAgABukFQAGAAgIgFIACAFg");
	this.shape_282.setTransform(583.7,58.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiOEmIAsgDIgwAAIAEADgAgsBOQAFAEATgHQgNADgLAAgABukHQAGABgIgGIACAFg");
	this.shape_283.setTransform(586,58.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiOEmIAsgCIgwAAIAEACgAgsBOQAFAEATgHQgNADgLAAgABvkIQAGABgIgGIACAFg");
	this.shape_284.setTransform(588.2,58.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiOEnIAsgCIgwAAIAEACgAgsBOQAFAEATgHQgNADgLAAgABwkJQAGABgIgGIACAFg");
	this.shape_285.setTransform(590.4,58.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiSEmIAEACIAsgDIgwABgAgsBOQAFAEATgHQgNADgLAAgABwkKQAGABgIgGIACAFg");
	this.shape_286.setTransform(592.6,58.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiPEpIAsgDIgwAAIAEADgAgsBOQAFAEATgHQgNADgLAAgABwkMQAGABgIgFIACAEg");
	this.shape_287.setTransform(594.8,58.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiPEpIAsgCIgwAAIAEACgAgsBOQAFAEATgHQgNADgLAAgABxkNQAGABgIgFIACAEg");
	this.shape_288.setTransform(597,58.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiQEqIAtgCIgxAAIAEACgAgsBOQAFAEATgHQgNADgLAAgABxkOQAHABgIgGIABAFg");
	this.shape_289.setTransform(599.2,58.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiUEpIAEACIAtgDIgxABgAgsBOQAFAEATgHQgNADgLAAgABykPQAGABgIgGIACAFg");
	this.shape_290.setTransform(601.5,58.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiQErIAsgCIgxAAIAFACgAgsBOQAFAEATgHQgNADgLAAgABykQQAHAAgIgFIABAFg");
	this.shape_291.setTransform(603.7,58);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AoZEjQgPgfgEgkIgBghQAAhBAJgYQAPgjA9g7QgbgLgGgkQgCgLAAgiQAAhKAigkQBBhEC6AJQAyijCtAjQCBAaCKBuQC8AJBDBXQAjAtAABIQAAAmgPAYQgZAohGAcIANAyQAHAfAAAQQAAA5gTAhQgrBJiAAAQhCAAgkgYQgZgYgIAAQgGAAgRALQgaAQgPAHQhFAihfAAQhgAAgggUQgJgGgGgJQgFgJgEgBQgKAEgTAaQgcAZg9AAQiHAAgvhhgAiREsIAtgCIgxAAIAEACgAgsBOIAKAIIAOgLQgNADgLAAgAFIBTIACABIgBgCgABzkRIAPAMQgJgMgIgFIACAFg");
	this.shape_292.setTransform(605.9,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144,p:{x:260.6,y:71.5}}]},1).to({state:[{t:this.shape_144,p:{x:262.8,y:71.4}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151,p:{x:278.3,y:70.8}}]},1).to({state:[{t:this.shape_151,p:{x:280.5,y:70.7}}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169,p:{x:320.4}}]},1).to({state:[{t:this.shape_169,p:{x:322.6}}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172,p:{x:329.2,y:68.8}}]},1).to({state:[{t:this.shape_172,p:{x:331.4,y:68.7}}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175,p:{x:338.1}}]},1).to({state:[{t:this.shape_175,p:{x:340.3}}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181,p:{x:353.6}}]},1).to({state:[{t:this.shape_181,p:{x:355.8}}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184,p:{x:362.4,y:67.5}}]},1).to({state:[{t:this.shape_184,p:{x:364.6,y:67.4}}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214,p:{x:431,y:64.8}}]},1).to({state:[{t:this.shape_214,p:{x:433.2,y:64.7}}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[]},1).wait(1));

	// arrow
	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(302.6,288.3,1,1,15,0,0,14.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:455.6,y:259},152).wait(149));

	// bowArrow
	this.instance_4 = new lib.bowArrow();
	this.instance_4.setTransform(299.5,290.3,1,1,15,0,0,13,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(301));

	// willy
	this.instance_5 = new lib.arrowPouch();
	this.instance_5.setTransform(253.3,298.3,1,1,-20.9,0,0,6,16);

	this.instance_6 = new lib.willy();
	this.instance_6.setTransform(273,307.8,1,1,-20.9,0,0,24.4,33.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#535353").s().p("AgMAFQgSgLgEgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAIAYAKQAQAIAagDQAEAAgGACQgLAEgKAAQgLAAgMgGg");
	this.shape_293.setTransform(251,297.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_293},{t:this.instance_6},{t:this.instance_5}]}).wait(301));

	// background
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7EC0EE").s().p("Egq8AZ3IAAAAMAAAgztMBV5AAAMAAAAztg");
	this.shape_294.setTransform(275.3,165.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#458B00").s().p("Egq8AFYIAAqvMBV5AAAIAAAAIAAKvg");
	this.shape_295.setTransform(275.3,365.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_295,p:{x:275.3}},{t:this.shape_294,p:{x:275.3}}]}).to({state:[{t:this.shape_295,p:{x:275}},{t:this.shape_294,p:{x:275}}]},299).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.3,154.2,717,445.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;