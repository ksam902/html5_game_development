//Class for Arrow
var Projectile = function(stage, assetManager) {
    // initialization
    var xPos;
    var yPos;
    var arrowCount = 0;
    // to keep track of scope
    var myScope = this;

    //get arrw
    var arrow = assetManager.getSprite("assets");
    var arrowMover = new MoverDiagonal(arrow, stage);;
    // ---------------------------------------------- get/set methods

    // ---------------------------------------------- private methods
    this.setupMe = function(mouseX, mouseY, willyX, willyY) {
        // random selection of speed of bug
        arrowMover.setSpeed(3);

        // get bounds of sprite so we can determine width / height
        var dimensions = arrow.getBounds();

        //placing arrow based on willy's whereabouts
        arrow.x = willyX + 40;
        arrow.y = willyY + 20;

        var deltaX = mouseX - arrow.x;
        var deltaY = mouseY - arrow.y;
        var rad = Math.atan2(deltaX,deltaY);
        var deg = rad * (Math.PI/180);
        console.log("Radians : " + rad + " - Degrees : " + deg);
        console.log("Willy X : " + arrow.x + " - Mouse X position : " + mouseX);
        console.log("Willy Y : " + arrow.y + " - Mouse Y position : " + mouseY);
        arrow.rotation = rad;
        //arrow.rotation = getRandomNum(45, -45);

        arrow.gotoAndStop("arrowPointer");
        arrowMover.startMe();
        stage.addChild(arrow);

    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
    
};
