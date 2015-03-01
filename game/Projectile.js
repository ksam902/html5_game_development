//Class for Arrow
var Projectile = function(stage, assetManager) {
    // initialization
    var targetX;
    var targetY;
    var angle = 0;
    var arrowCount = 0;
    var speed = 3;
    var moving = false;
    // private variables
    var xDisplace = -1;
    var yDisplace = -1;

    //get arrw
    var arrow = assetManager.getSprite("assets");
    //var arrowMover = new MoverDiagonal(arrow, stage);;
    // ---------------------------------------------- get/set methods
    this.getClip = function() {
        return clip;
    };
    // ---------------------------------------------- private methods
    this.setupMe = function(mouseX, mouseY, willyX, willyY) {

        //placing arrow based on willy's whereabouts
        if(willy.getDirection() == "left"){
            arrow.x = willyX - 40;
            arrow.y = willyY + 20;
        }else{
            arrow.x = willyX + 40;
            arrow.y = willyY + 20;
        }
        targetX = mouseX - arrow.x;
        targetY = mouseY - arrow.y;
        angle = Math.atan2(targetY, targetX);
        console.log(angle);
        // console.log("Willy X : " + arrow.x + " - Mouse X position : " + mouseX);
        // console.log("Willy Y : " + arrow.y + " - Mouse Y position : " + mouseY);
        arrow.rotation = angle;

        arrow.gotoAndStop("arrowPointer");
        startArrow();
        stage.addChild(arrow);

    };
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // -------------------------------------------------- private methods
    function radianMe(degrees) {
        return (degrees * (Math.PI / 180));
    }    
    function startArrow(){
        if (!moving) {
            // convert current rotation of object to radians
            //var radians = radianMe(arrow.rotation);
            // calculating X and Y displacement
            xDisplace = Math.cos(arrow.rotation) * speed;
            yDisplace = Math.sin(arrow.rotation) * speed;
            arrow.play();
            // setup listener to listen for ticker to control animation
            createjs.Ticker.addEventListener("tick", onMove);
            moving = true;
        }       
    }
    // -------------------------------------------------- event handlers
    function onMove(e) {
        // move sprite
        arrow.x = arrow.x + xDisplace;
        arrow.y = arrow.y + yDisplace;
        
    }
};
