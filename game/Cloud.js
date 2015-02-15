// Cloud Class
var Cloud = function(stage, assetManager) {
    // initialization
    var xPos = 0;
    // to keep track of scope
    var myScope = this;

    //get cloud
    var cloud = assetManager.getSprite("assets");
    cloud.x = 0;
    cloud.y = 300;
    cloud.gotoAndStop("cloud1");
    stage.addChild(cloud);


    // ---------------------------------------------- get/set methods


    // ---------------------------------------------- public methods



    // ----------------------------------------------- event handlers

};
