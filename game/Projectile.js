//Class for Arrow
var Projectile = function(stage, assetManager) {
    // initialization
    var targetX, targetY, angle, xDisplace, yDisplace;
    var speed = 8;
    // private variables
    var xDisplace = -1;
    var yDisplace = -1;

    //get arrow
    var arrow = assetManager.getSprite("assets");
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return arrow;
    };
    // ---------------------------------------------- private methods
    this.setupMe = function(mouseX, mouseY, willyX, willyY) {

        //placing arrow based on willy's whereabouts
        if(willy.getDirection() == "left"){
            arrow.x = willyX - 30;
            arrow.y = willyY + 20;
        }else{
            arrow.x = willyX + 30;
            arrow.y = willyY + 20;
        }
        targetX = mouseX - arrow.x;
        targetY = mouseY - arrow.y;
        angle = Math.atan2(targetY, targetX);
        arrow.rotation = angle * (180/Math.PI);
        arrow.gotoAndStop("arrowPointer");
        startArrow();
        stage.addChild(arrow);

    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // -------------------------------------------------- private methods
    function startArrow(){
        // calculating X and Y displacement
        xDisplace = Math.cos(angle) * speed;
        yDisplace = Math.sin(angle) * speed;
        arrow.play();
        // setup listener to listen for ticker to control animation
        createjs.Ticker.addEventListener("tick", onMove);
    }
    // -------------------------------------------------- event handlers
    function onMove(e) {
        // move sprite
        if(!willy.getIsPaused()){
            arrow.x = arrow.x + xDisplace;
            arrow.y = arrow.y + yDisplace;
        }

    }
};
