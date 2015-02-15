//Class for Bird
var Bird = function(stage, assetManager) {
    // initialization
    var xPos = 100;
    // to keep track of scope
    var myScope = this;

    //get cloud
    bird = assetManager.getSprite("assets");
    bird.x = xPos;
    bird.y = 20;
    bird.gotoAndStop("bird");
    stage.addChild(bird);


    // ---------------------------------------------- get/set methods
    this.setXPos = function(value){
    	xPos = value;
    }

    // ---------------------------------------------- public methods



    // ----------------------------------------------- event handlers

};
