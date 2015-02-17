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
        arrow.rotation = mouseX;        
        //arrow.rotation = getRandomNum(45, -45);

        // fire startMe again to take the new rotation of the bug
        arrow.gotoAndStop("arrowPointer");
        arrowMover.startMe();
        stage.addChild(arrow);
        // setup listener to listen for ticker to monitor collisions
        //createjs.Ticker.addEventListener("tick", onCollisionTest);
        
        // add bugs so they are below the snake (snake)
        //stage.addChildAt(clip, stage.getChildIndex(snakeClip));     

        // listen for when my bug goes off the screen and kill it if it does
        //clip.addEventListener("onMovingDiagonalOffStage", onKillMe);
    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ----------------------------------------------- event handlers
    
    function onMove(e) {
        
        if(clip.x > stage.canvas.width){
            clip.x = -50;
        }else{
           clip.x ++; 
        }

    };
};
